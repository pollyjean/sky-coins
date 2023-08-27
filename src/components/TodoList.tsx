import { useRecoilValue } from "recoil";
import CreateTodo from "./CreateTodo";
import Header from "./Header";
import Todo from "./Todo";
import { ITodoList, todoAtom } from "../atoms";

const TodoList = () => {
  const todoItem = useRecoilValue<ITodoList[]>(todoAtom);
  return (
    <div>
      <Header />
      <ul>
        {todoItem.map((todo) => (
          <Todo {...todo} />
        ))}
      </ul>
      <CreateTodo />
    </div>
  );
};

export default TodoList;
