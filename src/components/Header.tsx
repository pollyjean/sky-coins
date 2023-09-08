import { useRecoilValue } from "recoil";
import { ITodoList, todoAtom } from "../atomsTodo";

const Header = () => {
  const todoList = useRecoilValue<ITodoList[]>(todoAtom);
  return (
    <header>
      <h1>
        Sky TO-DO (<span>{todoList.length}</span>)
      </h1>
      <hr />
    </header>
  );
};

export default Header;
