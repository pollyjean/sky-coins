import { useRecoilValue } from "recoil";
import CreateTodo from "../components/CreateTodo";
import Header from "../components/Header";
import { ITodoList, todoSelector } from "../atomsTodo";
import Todo from "../components/Todo";
import SelectCategories from "../components/SelectCategories";

const TodoList = () => {
  const [todo] = useRecoilValue(todoSelector);
  return (
    <>
      <Header />
      <SelectCategories />
      <CreateTodo />
      <ul>
        {todo.map((item) => (
          <Todo key={item.id as ITodoList["id"]} {...(item as ITodoList)} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
