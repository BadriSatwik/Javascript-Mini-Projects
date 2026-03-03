<div className="bg-black min-h-screen">
      <div className="form bg-lime-50 w-1/2 flex justify-center mx-auto flex-col my-3">
        <h1 className="text-green-900 text-2xl text-center">Form In React</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="m-10 w-1/2 mx-auto justify-center flex flex-col gap-2">
            <label htmlFor="firstname">First Name : </label>
            <input className="border p-2  " id="firstname" placeholder="Enter First Name" type="text" {...register("firstName")} />

            <label htmlFor="secondname">Second Name : </label>
            <input className="border p-2" id="secondname" placeholder="Enter Second Name" type="text" {...register("secondtName")} />
          </div>

          <div className="text-center" >
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>



        