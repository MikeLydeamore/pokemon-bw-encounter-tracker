import { useState, useEffect, useMemo } from 'react'
import './App.css'
import LocationList from './components/LocationList'
import { locationsData } from './data/locations'
import { allPokemon } from './data/pokemon'

function App() {
  const [checkedEncounters, setCheckedEncounters] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('bw-encounters')
    return saved ? new Set(JSON.parse(saved)) : new Set()
  })

  const [selectedMap, setSelectedMap] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('bw-encounters-selected')
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })

  // UI expand/collapse state
  const [locationExpanded, setLocationExpanded] = useState<Record<string, boolean>>(() => ({}))
  const [methodExpanded, setMethodExpanded] = useState<Record<string, boolean>>(() => ({}))

  // Location search filter (persisted)
  const [query, setQuery] = useState<string>(() => {
    try {
      return localStorage.getItem('bw-encounters-query') || ''
    } catch {
      return ''
    }
  })

  const filteredLocations = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return locationsData
    return locationsData.filter(loc => loc.name.toLowerCase().includes(q))
  }, [query])

  // Compute total slots and set of valid encounter ids
  const { totalSlots, allIds } = useMemo(() => {
    const ids = new Set<string>()
    let total = 0
    for (const loc of locationsData) {
      for (const m of loc.encounters) {
        for (let i = 0; i < m.entries.length; i++) {
          ids.add(`${loc.id}-${m.type}-${i}`)
          total++
        }
      }
    }
    return { totalSlots: total, allIds: ids }
  }, [])

  const filledSlots = useMemo(() => {
    let count = 0
    for (const [id, val] of Object.entries(selectedMap)) {
      if (val && allIds.has(id)) count++
    }
    return count
  }, [selectedMap, allIds])

  const uniqueSpeciesCount = useMemo(() => {
    const s = new Set<string>()
    for (const val of Object.values(selectedMap)) {
      if (val) s.add(val)
    }
    return s.size
  }, [selectedMap])

  const slotPct = useMemo(() => totalSlots ? Math.round((filledSlots / totalSlots) * 100) : 0, [filledSlots, totalSlots])
  const speciesPct = useMemo(() => allPokemon.length ? Math.round((uniqueSpeciesCount / allPokemon.length) * 100) : 0, [uniqueSpeciesCount])

  // Persist search query
  useEffect(() => {
    try { localStorage.setItem('bw-encounters-query', query) } catch { }
  }, [query])

  useEffect(() => {
    localStorage.setItem('bw-encounters', JSON.stringify([...checkedEncounters]))
  }, [checkedEncounters])

  useEffect(() => {
    localStorage.setItem('bw-encounters-selected', JSON.stringify(selectedMap))
  }, [selectedMap])

  const toggleEncounter = (id: string) => {
    setCheckedEncounters(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const clearAll = () => {
    if (confirm('Clear all checked encounters?')) {
      setCheckedEncounters(new Set())
      setSelectedMap({})
    }
  }

  const setEncounterSelection = (id: string, species: string) => {
    setSelectedMap(prev => {
      const next = { ...prev }
      if (!species) {
        delete next[id]
      } else {
        next[id] = species
      }
      return next
    })

    // Auto-expand location and method for this slot (id format: `${locId}-${method}-${idx}`)
    if (species) {
      const parts = id.split('-')
      if (parts.length >= 3) {
        const locId = parts[0]
        const method = parts.slice(1, parts.length - 1).join('-') // handles methods with dashes
        setLocationExpanded(prev => ({ ...prev, [locId]: true }))
        const key = `${locId}:${method}`
        setMethodExpanded(prev => ({ ...prev, [key]: true }))
      }
    }
  }

  const toggleLocation = (locId: string) => {
    setLocationExpanded(prev => ({ ...prev, [locId]: !prev[locId] }))
  }

  const toggleMethod = (locId: string, method: string) => {
    const key = `${locId}:${method}`
    setMethodExpanded(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const setLocationMethodsExpanded = (locId: string, expanded: boolean) => {
    setMethodExpanded(prev => {
      const next = { ...prev }
      const loc = locationsData.find(l => l.id === locId)
      if (loc) {
        for (const m of loc.encounters) {
          next[`${locId}:${m.type}`] = expanded
        }
      }
      return next
    })
    if (expanded) {
      setLocationExpanded(prev => ({ ...prev, [locId]: true }))
    }
  }

  const setAllExpanded = (expanded: boolean) => {
    const nextLoc: Record<string, boolean> = {}
    const nextMeth: Record<string, boolean> = {}
    for (const loc of locationsData) {
      nextLoc[loc.id] = expanded
      for (const m of loc.encounters) {
        nextMeth[`${loc.id}:${m.type}`] = expanded
      }
    }
    setLocationExpanded(nextLoc)
    setMethodExpanded(nextMeth)
  }

  const exportData = () => {
    const data = {
      version: 1,
      timestamp: new Date().toISOString(),
      checkedEncounters: [...checkedEncounters],
      selectedMap,
      query
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `bw-encounters-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const importData = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'application/json'
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (!file) return
      const reader = new FileReader()
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target?.result as string)
          if (data.checkedEncounters) setCheckedEncounters(new Set(data.checkedEncounters))
          if (data.selectedMap) setSelectedMap(data.selectedMap)
          if (data.query !== undefined) setQuery(data.query)
          alert('Import successful!')
        } catch (err) {
          alert('Failed to import: Invalid file format')
        }
      }
      reader.readAsText(file)
    }
    input.click()
  }

  return (
    <div className="app">
      <header>
        <div className="header-left">
          <h1>Pokemon Black & White Encounter Tracker</h1>
          <div className="summary">
            <span>Slots: {filledSlots} / {totalSlots} ({slotPct}%)</span>
            <span className="dot">•</span>
            <span>Species: {uniqueSpeciesCount} / {allPokemon.length} ({speciesPct}%)</span>
          </div>
          <div className="progress-group" aria-hidden>
            <div className="progress-row">
              <span className="progress-label">Slots</span>
              <div className="progress"><div className="fill slots" style={{ width: `${slotPct}%` }} /></div>
            </div>
            <div className="progress-row">
              <span className="progress-label">Species</span>
              <div className="progress"><div className="fill species" style={{ width: `${speciesPct}%` }} /></div>
            </div>
          </div>
          <div className="search-wrap">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search locations..."
              className="search-input"
              aria-label="Search locations"
            />
            {query && (
              <button
                className="clear-input"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                title="Clear"
              >
                ×
              </button>
            )}
          </div>
        </div>
        <div className="header-actions">
          <button onClick={exportData} className="clear-btn" title="Export progress to file">💾 Export</button>
          <button onClick={importData} className="clear-btn" title="Import progress from file">📂 Import</button>
          <button onClick={() => setAllExpanded(true)} className="clear-btn">Expand All</button>
          <button onClick={() => setAllExpanded(false)} className="clear-btn">Collapse All</button>
          <button onClick={clearAll} className="clear-btn">Clear All</button>
        </div>
      </header>
      <main>
        <LocationList
          locations={filteredLocations}
          checkedEncounters={checkedEncounters}
          selectedMap={selectedMap}
          onToggleEncounter={toggleEncounter}
          onSelectEncounter={setEncounterSelection}
          locationExpanded={locationExpanded}
          onToggleLocation={toggleLocation}
          methodExpanded={methodExpanded}
          onToggleMethod={toggleMethod}
          onSetLocationMethods={setLocationMethodsExpanded}
        />
      </main>
    </div>
  )
}

export default App
