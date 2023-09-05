import { useRecoilState, useRecoilValue } from "recoil";
import CreateTodo from "./CreateTodo";
import Header from "./Header";
import { ITodoList, categoryAtom, todoSelector } from "../atoms";
import Todo from "./Todo";

const TodoList = () => {
  const [todo] = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryAtom);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value);
  };
  return (
    <>
      <Header />
      <select onInput={onInput} value={category}>
        <option value="TODO">Todo</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateTodo />
      {todo.map((item) => (
        <Todo key={item.id as ITodoList["id"]} {...(item as ITodoList)} />
      ))}
    </>
  );
};

export default TodoList;
