import { TodoId, type ListOfTodos } from '../types';
import { Todo } from './Todo';

//le pasamos parametros a los tipos 
interface Props {
    todos: ListOfTodos,
    onCompleted: ({id, completed}: {id: number, completed: boolean}) => void,
    onRemove: ({id}: TodoId) => void

}

// react functional component es un generico, de esta forma le decimos de que tipos son las props que le pasamos
export const Todos: React.FC<Props> = ({ todos, onRemove, onCompleted}) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : '' }`}>
            <Todo
            key={todo.id}
            id={todo.id}
            title= {todo.title}
            completed= {todo.completed}
            onCompleted= {onCompleted}
            onRemove={id => {onRemove(id)}}
            />
        </li>
      ))}
    </ul>
  );
}