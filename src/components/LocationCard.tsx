import { Location } from '../data/locations'
import EncounterTable from './EncounterTable.tsx'
import './LocationCard.css'

interface LocationCardProps {
  location: Location
  checkedEncounters: Set<string>
  selectedMap: Record<string, string>
  onToggleEncounter: (id: string) => void
  onSelectEncounter: (id: string, species: string) => void
  expanded: boolean
  onToggle: () => void
  methodExpanded: Record<string, boolean>
  onToggleMethod: (locId: string, method: string) => void
  onSetAllMethods: (expanded: boolean) => void
  hideBlack: boolean
  hideWhite: boolean
}

export default function LocationCard({ location, checkedEncounters, selectedMap, onToggleEncounter, onSelectEncounter, expanded, onToggle, methodExpanded, onToggleMethod, onSetAllMethods, hideBlack, hideWhite }: LocationCardProps) {
  const methodLabels: Record<string, string> = {
    'grass': '🌱 Grass',
    'dark-grass': '🌿 Dark Grass',
    'cave': '🕳️ Cave',
    'surfing': '🌊 Surfing',
    'super-rod': '🎣 Super Rod',
    'fishing': '🎣 Fishing',
    'special': '⭐ Special'
  }
  return (
    <div className="location-card">
      <div className="location-header" onClick={onToggle} role="button" tabIndex={0}>
        <h2 className="location-title">{expanded ? '▼' : '▶'} {location.name}</h2>
      </div>
      {expanded && (
        <div className="encounters">
          <div className="loc-actions">
            <button className="mini-btn" onClick={() => onSetAllMethods(true)}>Expand all</button>
            <button className="mini-btn" onClick={() => onSetAllMethods(false)}>Collapse all</button>
          </div>
          {location.encounters.map((encounter, idx) => {
            const mKey = `${location.id}:${encounter.type}`
            const isOpen = methodExpanded[mKey] ?? false
            const hasVisible = encounter.entries.some(e => {
              if (hideBlack && e.versionTag === 'B') return false
              if (hideWhite && e.versionTag === 'W') return false
              return true
            })
            if (!hasVisible) return null
            return (
              <div key={mKey} className="method-wrapper">
                <div className="method-header" onClick={() => onToggleMethod(location.id, encounter.type)} role="button" tabIndex={0}>
                  <h3 className="method-title">{isOpen ? '▾' : '▸'} {methodLabels[encounter.type] ?? encounter.type}</h3>
                </div>
                {isOpen && (
                  <EncounterTable
                    key={idx}
                    locationId={location.id}
                    encounter={encounter}
                    checkedEncounters={checkedEncounters}
                    onToggleEncounter={onToggleEncounter}
                    selectedMap={selectedMap}
                    onSelectEncounter={onSelectEncounter}
                    hideBlack={hideBlack}
                    hideWhite={hideWhite}
                  />
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
