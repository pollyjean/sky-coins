import { useRecoilState } from "recoil";
import { Categories, ITodoList, todoAtom } from "../atoms";
import { setLocalStorage } from "../utilities/storages";

const ChangeCategory = ({ id, category }: ITodoList) => {
  const [todoList, setTodoList] = useRecoilState(todoAtom);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTodoList((current): ITodoList[] => {
      const todo = current.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            category: event.currentTarget.name,
          };
        }
        return item;
      });
      return todo as ITodoList[];
    });
  };
  setLocalStorage(todoList);
  return (
    <>
      {category !== Categories.TODO && (
        <button name={Categories.TODO} onClick={onClick}>
          Todo &rarr;
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing &rarr;
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done &rarr;
        </button>
      )}
    </>
  );
};

export default ChangeCategory;
