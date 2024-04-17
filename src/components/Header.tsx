import { type Todotitle } from "../types";
import { CreateTodo } from "./CreateTodo";

interface Props {
    onAddTodo: ({title}: Todotitle) => void;
}

export const Header: React.FC<Props> = ({onAddTodo})  => {
  return (
    <header className="header">
      <h1>kernel<img 
      style={{width: '60px', height: 'auto'}}
      src="https://www.svgrepo.com/show/353393/amp-icon.svg" alt="" />

      </h1>

      <CreateTodo saveTodo={onAddTodo}/>
      {/* <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      /> */}
    </header>
  );
}