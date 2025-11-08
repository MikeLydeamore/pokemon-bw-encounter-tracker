import { useState, useEffect, useMemo } from 'react'
import './App.css'
import LocationList from './components/LocationList'
import locations from './data/locations'
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
    if (!q) return locations
    return locations.filter(loc => loc.name.toLowerCase().includes(q))
  }, [query])

  // Version exclusive hide toggles (hide entries whose versionTag matches)
  const [hideBlack, setHideBlack] = useState<boolean>(() => {
    try { return localStorage.getItem('bw-hide-black') === 'true' } catch { return false }
  })
  const [hideWhite, setHideWhite] = useState<boolean>(() => {
    try { return localStorage.getItem('bw-hide-white') === 'true' } catch { return false }
  })

  useEffect(() => { try { localStorage.setItem('bw-hide-black', String(hideBlack)) } catch {} }, [hideBlack])
  useEffect(() => { try { localStorage.setItem('bw-hide-white', String(hideWhite)) } catch {} }, [hideWhite])

  // Compute total visible slots (respect version-exclusive hide toggles)
  const totalSlots = useMemo(() => {
    let total = 0
    for (const loc of locations) {
      for (const m of loc.encounters) {
        for (let i = 0; i < m.entries.length; i++) {
          const e = m.entries[i]
          if (hideBlack && e.versionTag === 'B') continue
          if (hideWhite && e.versionTag === 'W') continue
          total += 1
        }
      }
    }
    return total
  }, [hideBlack, hideWhite])

  // Number of checked/ticked encounters among visible entries only
  const tickedCount = useMemo(() => {
    let count = 0
    for (const id of checkedEncounters) {
      // id format: locId-methodType-idx (methodType may contain '-')
      const parts = id.split('-')
      if (parts.length < 3) continue
      const locId = parts[0]
      const idxStr = parts[parts.length - 1]
      const methodType = parts.slice(1, parts.length - 1).join('-')
      const idx = Number(idxStr)
      if (Number.isNaN(idx)) continue
      const loc = locations.find(l => l.id === locId)
      if (!loc) continue
      const method = loc.encounters.find(m => m.type === methodType)
      if (!method) continue
      const entry = method.entries[idx]
      if (!entry) continue
      if (hideBlack && entry.versionTag === 'B') continue
      if (hideWhite && entry.versionTag === 'W') continue
      count++
    }
    return count
  }, [checkedEncounters, hideBlack, hideWhite])

  const uniqueSpeciesCount = useMemo(() => {
    const s = new Set<string>()
    for (const val of Object.values(selectedMap)) {
      if (val) s.add(val)
    }
    return s.size
  }, [selectedMap])

  const slotPct = useMemo(() => totalSlots ? Math.round((tickedCount / totalSlots) * 100) : 0, [tickedCount, totalSlots])
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
    setLocationExpanded(prev => {
      const next = { ...prev, [locId]: !prev[locId] }
      try { localStorage.setItem('bw-encounters-loc-expanded', JSON.stringify(next)) } catch { }
      return next
    })
  }

  const toggleMethod = (locId: string, method: string) => {
    const key = `${locId}:${method}`
    setMethodExpanded(prev => {
      const next = { ...prev, [key]: !prev[key] }
      try { localStorage.setItem('bw-encounters-method-expanded', JSON.stringify(next)) } catch { }
      return next
    })
  }

  const setLocationMethodsExpanded = (locId: string, expanded: boolean) => {
    setMethodExpanded(prev => {
      const next = { ...prev }
      const loc = locations.find(l => l.id === locId)
      if (loc) {
        for (const m of loc.encounters) {
          next[`${locId}:${m.type}`] = expanded
        }
      }
      try { localStorage.setItem('bw-encounters-method-expanded', JSON.stringify(next)) } catch { }
      return next
    })
    if (expanded) {
      setLocationExpanded(prev => {
        const next = { ...prev, [locId]: true }
        try { localStorage.setItem('bw-encounters-loc-expanded', JSON.stringify(next)) } catch { }
        return next
      })
    }
  }

  const setAllExpanded = (expanded: boolean) => {
    const nextLoc: Record<string, boolean> = {}
    const nextMeth: Record<string, boolean> = {}
    for (const loc of locations) {
      nextLoc[loc.id] = expanded
      for (const m of loc.encounters) {
        nextMeth[`${loc.id}:${m.type}`] = expanded
      }
    }
    setLocationExpanded(nextLoc)
    setMethodExpanded(nextMeth)
    try {
      localStorage.setItem('bw-encounters-loc-expanded', JSON.stringify(nextLoc))
      localStorage.setItem('bw-encounters-method-expanded', JSON.stringify(nextMeth))
    } catch { }
  }

  // Load persisted expansion state once
  useEffect(() => {
    try {
      const locRaw = localStorage.getItem('bw-encounters-loc-expanded')
      if (locRaw) setLocationExpanded(JSON.parse(locRaw))
      const methRaw = localStorage.getItem('bw-encounters-method-expanded')
      if (methRaw) setMethodExpanded(JSON.parse(methRaw))
    } catch { }
  }, [])

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
            <span>Slots: {tickedCount} / {totalSlots} ({slotPct}%)</span>
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
          <div className="version-hide-controls" role="group" aria-label="Hide version exclusive encounters">
            <span className="vh-label">Hide Version Exclusives:</span>
            <label className="vh-opt">
              <input
                type="checkbox"
                checked={hideBlack}
                onChange={(e) => setHideBlack(e.target.checked)}
              /> Black
            </label>
            <label className="vh-opt">
              <input
                type="checkbox"
                checked={hideWhite}
                onChange={(e) => setHideWhite(e.target.checked)}
              /> White
            </label>
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
          hideBlack={hideBlack}
          hideWhite={hideWhite}
        />
      </main>
    </div>
  )
}

export default App
