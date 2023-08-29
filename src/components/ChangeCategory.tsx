import { useSetRecoilState } from "recoil";
import { ITodoList, todoAtom } from "../atoms";

const ChangeCategory = ({ id, category }: ITodoList) => {
  const setTodoList = useSetRecoilState(todoAtom);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setTodoList((current): ITodoList[] => {
      const todo = current.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            category: name as ITodoList["category"],
          };
        }
        return item;
      });
      return todo;
    });
  };
  return (
    <>
      {category !== "TODO" && (
        <button name="TODO" onClick={onClick}>
          Change Todo
        </button>
      )}
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Change Doing
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Change Done
        </button>
      )}
    </>
  );
};

export default ChangeCategory;
