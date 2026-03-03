import "./App.css"
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset();
  }
  // console.log(watch("firstName"))
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-gray-200  min-h-screen flex justify-center ">

        <div className="flex flex-col w-1/2 my-10 bg-white p-15 px-32 gap-2 shadow-2xl">
          <h1 className="text-green-500 text-4xl text-center font-bold">Form In React</h1>

          <h2 className="font-bold">First Name : </h2>
          <input className="border p-2" id="firstname" placeholder="Enter First Name" type="text" {...register("firstName",{})} />

          <h2 className="font-bold">Second Name : </h2>
          <input className="border p-2" id="secondname" placeholder="Enter Second Name" type="text" {...register("secondName")} />

          <h2 className="font-bold">Enter Email : </h2>
          <input className="border p-2" id="email" placeholder="Enter Email" type="email" {...register("Email")} />

          <h2 className="font-bold">Contact : </h2>
          <input className="border p-2" id="contact" placeholder="Enter Mobile Number" type="tel" {...register("Contact")} />

          <h2 className="font-bold">Gender :</h2>

          <div className="flex justify-center gap-5">
            <input type="radio" value="Female" id="female" {...register("Gender")}/>
            <label htmlFor="female">Female</label>

            <input type="radio" value="Male" id="male" {...register("Gender")}/>
            <label htmlFor="male">Male</label>

            <input type="radio" value="Other" id="other" {...register("Gender")}/>
            <label htmlFor="other">Other</label>
          </div>

          <h2 className="font-bold">Your Favorite Subject(s) :</h2>

          <div className="flex justify-center gap-5">
            <input type="checkbox" value="Mathematics" id="maths"  {...register("Subject")}/>
            <label htmlFor="maths">Mathematics</label>

            <input type="checkbox" value="Physics" id="physics" {...register("Subject")}/>
            <label htmlFor="physics">Physics</label>

            <input type="checkbox" value="Chemistry" id="chem" {...register("Subject")}/>
            <label htmlFor="chem">Chemistry</label>
          </div>

          <h2 className="font-bold">Upload Resume : </h2>
          <input className="border p-2" type="file" {...register("Resume")} />

          <h2 className="font-bold">Enter URL : </h2>
          <input className="border p-2" placeholder="Enter URL" type="url" {...register("URL")} />

          <h2 className="font-bold">Select Your Choice : </h2>
          <select className="border p-2" {...register("choice")}>
            <option value="" disabled>Select your choice</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">Js</option>
          </select>

          <h2 className="font-bold">About : </h2>
          <textarea className="border p-2" placeholder="Type Something About Yourself..." cols="30" rows="7" {...register("about")}></textarea>
          <div className="flex gap-5 justify-center ">
            <input className="bg-green-500 text-white py-4 px-12 text-xl" type="reset" value="Reset" />
            <input className="bg-green-500 text-white py-4 px-12 text-xl" type="submit" value="Submit" />
          </div>
        </div>
      </div>
    </form>
  )
}

export default App
