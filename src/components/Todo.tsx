import { ITodoList } from "../atomsTodo";
import ChangeCategory from "./ChangeCategory";
import DeleteItem from "./DeleteItem";

const Todo = (props: ITodoList) => {
  return (
    <li data-id={props.id as ITodoList["id"]}>
      <span> {props.text} </span>
      <ChangeCategory {...props} />
      <DeleteItem />
    </li>
  );
};

export default Todo;
