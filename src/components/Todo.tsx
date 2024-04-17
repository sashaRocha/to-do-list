import { TodoId, type Todo as TodoType } from "../types";

interface Props extends TodoType {
  onCompleted: ({ id, completed }: { id: number; completed: boolean }) => void;
  onRemove: ({ id }: TodoId) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemove,
  onCompleted,
}) => {
const handleChangeCheckbox = (event : React.ChangeEvent<HTMLInputElement>) => { 
    onCompleted({id, completed: event.target.checked})
}
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <button className="destroy" onClick={() => onRemove({ id })}></button>
    </div>
  );
};
