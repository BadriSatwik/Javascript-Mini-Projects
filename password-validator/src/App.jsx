import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Minimum 8 characters required"
          },
          validate: {
            hasLowerCase: (value) =>
              /[a-z]/.test(value) || "At least 1 lowercase letter required",

            hasUpperCase: (value) =>
              /[A-Z]/.test(value) || "At least 1 uppercase letter required",

            hasNumber: (value) =>
              /[0-9]/.test(value) || "At least 1 number required",

            hasSymbol: (value) =>
              /[!@#$%^&*]/.test(value) || "At least 1 special character required",
          }
        })}
      />

      {errors.password && <p>{errors.password.message}</p>}

      <input type="submit" />
    </form>
  )
}

export default App