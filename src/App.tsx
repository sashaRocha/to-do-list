import { useState } from "react";
import { Todos } from "./components/Todos";
import { type TodoId, type Todo as TodoType, type FilterValue, Todotitle } from "./types";
import { TODO_FILTERS } from "./consts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const mockTodos = [
  { id: 1, title: "Leer Mangas solo los miercoles", completed: true },
  {
    id: 2,
    title: "Devolver el libro de python a la biblioteca",
    completed: false,
  },
  { id: 3, title: "Estudiar react+typescript 2horas al dia", completed: false },
];

function App(): JSX.Element {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(
    TODO_FILTERS.ALL
  );

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleFilterChange = (filter: FilterValue) => {
    setFilterSelected(filter);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === Number(id)) {
        return { ...todo, completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

 const  handleRemoveAllCompleted = () : void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  }
  const activeCounts = todos.filter((todo) => !todo.completed).length;
  const completedCounts = todos.length - activeCounts;
  
   const handleAddTodo = ({title}: Todotitle) : void => {
         const newTodo = {
          title,
          id: Math.floor(Math.random() * 1000000),
          completed: false
         }
         const newTodos =  [...todos, newTodo];
         setTodos(newTodos);
   }

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo}/>
      <Todos
        onCompleted={handleCompleted}
        onRemove={handleRemove}
        todos={filteredTodos}
      />

      <Footer
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        activeCounts={activeCounts}
        completedCounts={completedCounts}
        onClearCompleted={handleRemoveAllCompleted}
      />

      
    </div>
  );
}

export default App;
