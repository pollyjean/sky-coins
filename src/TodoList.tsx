import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

interface IInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const TodoList = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IInputs>();
  const onSubmit: SubmitHandler<IInputs> = (data) => {
    if (data.password !== data.passwordConfirm) {
      setError("passwordConfirm", { message: "Password are not the same" }, { shouldFocus: true });
    }
  };
  const onError: SubmitErrorHandler<IInputs> = (error) => console.log("Error ", error);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          {...register("firstName", {
            required: "First name is required",
            validate: {
              noAdmin: (value) => (value.includes("admin") ? "no admin allowed" : true),
              noUser: (value) => (value.includes("user") ? "no user allowed" : true),
            },
          })}
        />
        {errors.firstName?.message ? <p>{errors.firstName?.message}</p> : null}
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          {...register("lastName", {
            required: "Last name is required",
            validate: {
              noAdmin: (value) => (value.includes("admin") ? "no admin allowed" : true),
              noUser: (value) => (value.includes("user") ? "no user allowed" : true),
            },
          })}
        />
        {errors.lastName?.message ? <p>{errors.lastName?.message}</p> : null}
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: "Invalidated Email format",
            },
            minLength: { value: 5, message: "Email length is too short. (minimum 5 letters)" },
          })}
        />
        {errors.email?.message ? <p>{errors.email?.message}</p> : null}
        <br></br>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password", { required: "Password is required" })} />
        {errors.password?.message ? <p>{errors.password?.message}</p> : null}
        <br />
        <label htmlFor="passwordConfirm">Password Confirm</label>
        <input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", { required: "Password is required" })}
        />
        {errors.passwordConfirm?.message ? <p>{errors.passwordConfirm?.message}</p> : null}
        <br />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
