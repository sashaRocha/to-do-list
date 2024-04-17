import { FilterValue} from "../types"
import { Filters } from "./Filters"


interface Props {
    activeCounts: number,
    completedCounts: number,
    onClearCompleted: () => void,
    filterSelected: FilterValue,
    handleFilterChange: (filter: FilterValue) => void
}
export const Footer: React.FC<Props> = ({
    activeCounts = 0, 
    completedCounts = 0,
    onClearCompleted ,
    filterSelected,
    handleFilterChange
}) => {
    return ( 
    <footer className="footer">
    <span className="todo-count">
        <strong>{activeCounts}</strong> Tareas Pendientes
    </span>
    <Filters
       filterSelected={filterSelected}
       onFilterChange={handleFilterChange}
    />

    {
        completedCounts > 0 && (
            <button className="clear-completed" onClick={onClearCompleted}>
                Limpiar Completados
            </button>
        )
    }
</footer>)
   
}