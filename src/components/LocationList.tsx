import { Location } from '../data/locations'
import LocationCard from './LocationCard.tsx'
import './LocationList.css'

interface LocationListProps {
  locations: readonly Location[]
  checkedEncounters: Set<string>
  selectedMap: Record<string, string>
  onToggleEncounter: (id: string) => void
  onSelectEncounter: (id: string, species: string) => void
  locationExpanded: Record<string, boolean>
  onToggleLocation: (locId: string) => void
  methodExpanded: Record<string, boolean>
  onToggleMethod: (locId: string, method: string) => void
  onSetLocationMethods: (locId: string, expanded: boolean) => void
  hideBlack: boolean
  hideWhite: boolean
}

export default function LocationList({ locations, checkedEncounters, selectedMap, onToggleEncounter, onSelectEncounter, locationExpanded, onToggleLocation, methodExpanded, onToggleMethod, onSetLocationMethods, hideBlack, hideWhite }: LocationListProps) {
  return (
    <div className="location-list">
      {locations.filter(location => {
        // Only show locations with at least one visible entry after version filters
        return location.encounters.some(m => m.entries.some(e => {
          if (hideBlack && e.versionTag === 'B') return false
          if (hideWhite && e.versionTag === 'W') return false
          return true
        }))
      }).map(location => (
        <LocationCard
          key={location.id}
          location={location}
          checkedEncounters={checkedEncounters}
          selectedMap={selectedMap}
          onToggleEncounter={onToggleEncounter}
          onSelectEncounter={onSelectEncounter}
          expanded={locationExpanded[location.id] ?? false}
          onToggle={() => onToggleLocation(location.id)}
          methodExpanded={methodExpanded}
          onToggleMethod={onToggleMethod}
          onSetAllMethods={(expanded: boolean) => onSetLocationMethods(location.id, expanded)}
          hideBlack={hideBlack}
          hideWhite={hideWhite}
        />
      ))}
    </div>
  )
}
