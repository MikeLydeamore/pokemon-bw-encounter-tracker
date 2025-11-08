import { Location } from '../data/locations'
import LocationCard from './LocationCard'
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
}

export default function LocationList({ locations, checkedEncounters, selectedMap, onToggleEncounter, onSelectEncounter, locationExpanded, onToggleLocation, methodExpanded, onToggleMethod, onSetLocationMethods }: LocationListProps) {
  return (
    <div className="location-list">
      {locations.map(location => (
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
        />
      ))}
    </div>
  )
}
