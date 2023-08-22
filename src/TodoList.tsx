import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todoError, setTodoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodoError("");
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.length < 10) {
      setTodoError("10글자 이상이어야 합니다.");
    }
    console.log("Submitted : ", todo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo">Write a To-Do</label>
        <input type="text" id="todo" name="todo" value={todo} onChange={onChange} />
        {todoError === "" ? null : <p>{todoError}</p>}
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
