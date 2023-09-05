import { useRecoilState } from "recoil";
import { ITodoList, todoAtom } from "../atoms";
import { setLocalStorage } from "../utilities/storages";

const DeleteItem = () => {
  const [todoList, setTodoList] = useRecoilState<ITodoList[]>(todoAtom);
  const onClick = (event: React.FormEvent<HTMLButtonElement>) => {
    const currentId = Number(event.currentTarget?.parentElement?.dataset?.id);
    setTodoList((recentTodo) => recentTodo.filter((todoItem) => todoItem.id !== currentId));
  };
  setLocalStorage(todoList);
  return <button onClick={onClick}>Delete &rarr;</button>;
};

export default DeleteItem;
