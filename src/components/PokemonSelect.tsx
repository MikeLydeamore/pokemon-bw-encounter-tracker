import { useState, useMemo, useRef, useEffect } from 'react'
import { allPokemon } from '../data/pokemon'
import './PokemonSelect.css'

interface PokemonSelectProps {
  value: string
  onChange: (value: string) => void
}

// Precompute lowercase map once (outside component scope)
const allPokemonLower = allPokemon.map(p => p.toLowerCase())

// Lightweight selector: collapsed by default, opens on click; debounced search; limited results.
export default function PokemonSelect({ value, onChange }: PokemonSelectProps) {
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState('')
  const [debounced, setDebounced] = useState('')
  const timerRef = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Debounce filter text to reduce recalculations
  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => setDebounced(filter), 150)
    return () => { if (timerRef.current) window.clearTimeout(timerRef.current) }
  }, [filter])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    window.addEventListener('mousedown', handler)
    return () => window.removeEventListener('mousedown', handler)
  }, [open])

  const filtered = useMemo(() => {
    if (!open) return []
    const q = debounced.trim().toLowerCase()
    if (!q) return allPokemon.slice(0, 120) // show first chunk only when empty to avoid huge DOM
    const results: string[] = []
    for (let i = 0; i < allPokemonLower.length; i++) {
      if (allPokemonLower[i].includes(q)) {
        results.push(allPokemon[i])
        if (results.length >= 60) break // cap results
      }
    }
    return results
  }, [debounced, open])

  const currentLabel = value || '(none)'

  return (
    <div className="pokemon-select" ref={containerRef}>
      {!open && (
        <button type="button" className="pokemon-select-trigger" onClick={() => setOpen(true)}>
          {currentLabel}
        </button>
      )}
      {open && (
        <div className="pokemon-select-panel">
          <div className="pokemon-select-controls">
            <input
              autoFocus
              type="text"
              placeholder="Search Pokémon..."
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="pokemon-filter"
            />
            <button type="button" onClick={() => { setOpen(false); setFilter('') }} className="close-btn">✕</button>
          </div>
          <ul className="pokemon-results" role="listbox">
            <li key="__none__">
              <button
                type="button"
                className={!value ? 'active none-option' : 'none-option'}
                onClick={() => { onChange(''); setOpen(false); setFilter('') }}
              >(none)</button>
            </li>
            {filtered.map(name => (
              <li key={name}>
                <button
                  type="button"
                  className={name === value ? 'active' : ''}
                  onClick={() => { onChange(name); setOpen(false); setFilter('') }}
                >{name}</button>
              </li>
            ))}
            {filtered.length === 0 && <li className="empty">No matches</li>}
          </ul>
        </div>
      )}
    </div>
  )
}
