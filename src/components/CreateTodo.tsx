import { useSetRecoilState } from "recoil";
import { ITodoList, todoAtom } from "../atoms";
import { SubmitHandler, useForm } from "react-hook-form";

interface ITodoForm {
  todo: string;
}

const CreateTodo = () => {
  const setTodoList = useSetRecoilState<ITodoList[]>(todoAtom);
  const { register, handleSubmit, setValue } = useForm<ITodoForm>();
  const onSubmit: SubmitHandler<ITodoForm> = ({ todo }) => {
    setTodoList((recentTodo) => [{ text: todo, category: "TODO", id: Date.now() }, ...recentTodo]);
    setValue("todo", "");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="todo">To-Do</label>
      <input
        type="text"
        id="todo"
        placeholder="Write a To-Do"
        {...register("todo", { required: "Please write a To-Do" })}
      />
      <button>Add</button>
    </form>
  );
};

export default CreateTodo;
