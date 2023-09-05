import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, ITodoList, categoryAtom, todoAtom } from "../atoms";
import { SubmitHandler, useForm } from "react-hook-form";
import { setLocalStorage } from "../utilities/storages";

interface ITodoForm {
  todo: string;
}

const CreateTodo = () => {
  const [todoList, setTodoList] = useRecoilState<ITodoList[]>(todoAtom);
  const category = useRecoilValue(categoryAtom);
  const { register, handleSubmit, setValue } = useForm<ITodoForm>();
  const onSubmit: SubmitHandler<ITodoForm> = ({ todo }) => {
    setTodoList((recentTodo) => [{ text: todo, category: category as Categories, id: Date.now() }, ...recentTodo]);
    setValue("todo", "");
  };
  setLocalStorage(todoList);
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
