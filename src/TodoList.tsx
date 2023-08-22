import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

interface IInputs {
  firstName: string;
  lastName: string;
}

const TodoList = () => {
  const { register, watch, handleSubmit } = useForm<IInputs>();
  const onSubmit: SubmitHandler<IInputs> = (data) => console.log(data);
  const onError: SubmitErrorHandler<IInputs> = (error) => console.log("Error ", error);
  console.log("watching : ", watch());
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" {...register("firstName", { required: true })} />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" {...register("lastName", { required: true })} />

        <button>Add</button>
      </form>
    </div>
  );
};

// const TodoList = () => {
//   const [todo, setTodo] = useState("");
//   const [todoError, setTodoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodoError("");
//     setTodo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (todo.length < 10) {
//       setTodoError("10글자 이상이어야 합니다.");
//     }
//     console.log("Submitted : ", todo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <label htmlFor="todo">Write a To-Do</label>
//         <input type="text" id="todo" name="todo" value={todo} onChange={onChange} />
//         {todoError === "" ? null : <p>{todoError}</p>}
//         <button>Add</button>
//       </form>
//     </div>
//   );
// };

export default TodoList;
