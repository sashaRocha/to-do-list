import { useState } from "react";
import { type Todotitle } from "../types";

interface Props {
    saveTodo: ({title}: Todotitle) => void;
}

export const CreateTodo: React.FC<Props> = ({saveTodo})  => {
    const [inputValue, setInputValue] = useState('');
    
    const handleSubmit = (event : React.KeyboardEvent<HTMLFormElement>): void => {
     event.preventDefault();
     saveTodo({title: inputValue});
    setInputValue('');
    }
  
    return (
       <form  onSubmit={handleSubmit}>
        <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={inputValue}
            onChange={(evt) => {setInputValue(evt.target.value)}}
            onKeyDown={() => {}}
            aria-placeholder="What needs to be done?"
            autoFocus
        />
    </form> 
    );
}