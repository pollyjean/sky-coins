import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="todo">Write a To-Do</label>
        <input type="text" id="todo" name="todo" value={todo} onChange={onChange} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
