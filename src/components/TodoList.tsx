import { useRecoilValue } from "recoil";
import { todoSelector } from "../atoms";
import CreateTodo from "./CreateTodo";
import Header from "./Header";
import Todo from "./Todo";

const TodoList = () => {
  const selectorOutput = useRecoilValue(todoSelector);
  console.log(selectorOutput);
  return (
    <>
      <Header />
      {selectorOutput.map((categoryItem) =>
        categoryItem.length !== 0 ? (
          <>
            {categoryItem.length !== 0 && <h2>{categoryItem[0].category}</h2>}
            <ul>
              {categoryItem.map((todo) => (
                <Todo key={todo.id} {...todo} />
              ))}
            </ul>
            {categoryItem.length !== 0 && <hr />}
          </>
        ) : null
      )}
      <CreateTodo />
    </>
  );
};

export default TodoList;
