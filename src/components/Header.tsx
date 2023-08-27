import { useRecoilValue } from "recoil";
import { ITodoList, todoAtom } from "../atoms";

const Header = () => {
  const todoList = useRecoilValue<ITodoList[]>(todoAtom);
  return (
    <header>
      <h1>
        Sky TO-DO (<span>{todoList.length}</span>)
      </h1>
    </header>
  );
};

export default Header;
