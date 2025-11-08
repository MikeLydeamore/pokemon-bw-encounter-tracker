import { EncounterMethod } from '../data/locations'
import './EncounterTable.css'
import PokemonSelect from './PokemonSelect'

interface EncounterTableProps {
  locationId: string
  encounter: EncounterMethod
  checkedEncounters: Set<string>
  selectedMap: Record<string, string>
  onToggleEncounter: (id: string) => void
  onSelectEncounter: (id: string, species: string) => void
}

export default function EncounterTable({ locationId, encounter, checkedEncounters, selectedMap, onToggleEncounter, onSelectEncounter }: EncounterTableProps) {
  return (
    <div className="encounter-table">
      <table>
        <thead>
          <tr>
            <th>✓</th>
            <th>Slot</th>
            <th>Rate / Note</th>
            <th>Selected</th>
          </tr>
        </thead>
        <tbody>
          {encounter.entries.map((entry, idx) => {
            const encounterId = `${locationId}-${encounter.type}-${idx}`
            const isChecked = checkedEncounters.has(encounterId)
            const rateOrNote = entry.rate != null ? `${entry.rate}%` : (entry.note ?? '')
            const selected = selectedMap[encounterId] || ''
            return (
              <tr key={idx} className={isChecked ? 'checked' : ''}>
                <td>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onToggleEncounter(encounterId)}
                  />
                </td>
                <td className="pokemon-name">{entry.name}</td>
                <td className="rate">{rateOrNote}</td>
                <td>
                  <PokemonSelect
                    value={selected}
                    onChange={(val: string) => onSelectEncounter(encounterId, val)}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
