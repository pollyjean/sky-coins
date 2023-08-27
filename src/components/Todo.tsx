import { ITodoList } from "../atoms";

const Todo = ({ id, text, category }: ITodoList) => {
  return (
    <li key={id}>
      {category === "TODO" ? <i className="bi bi-square"></i> : null}
      {category === "DOING" ? <i className="bi bi-square"></i> : null}
      {category === "DONE" ? <i className="bi bi-square"></i> : null}
      <span>{text}</span>
      <button>Done</button>
    </li>
  );
};

export default Todo;
