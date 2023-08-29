import { ITodoList } from "../atoms";
import ChangeCategory from "./ChangeCategory";

const Todo = (props: ITodoList) => {
  return (
    <li>
      <ChangeCategory {...props} />
      <span> {props.text} </span>
    </li>
  );
};

export default Todo;
