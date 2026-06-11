import { useForm } from "react-hook-form"


export const AddProduct = () => {
    const { handleSubmit, register, formState: { errors } } = useForm()
    console.log(errors);


    const onSubmit = (data) => {
        console.log(data);

    }
    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <label>name  </label>

                <input type="text" {...register("name", { required: "name is required", minLength: { value: 3, message: "name must not be less than 3 character" } })} />
                {errors.name && <p style={{ color: "red", fontSize: "10px" }}>{errors.name.message}</p>}
                <br /><br />

                {/* include validation with required or other standard HTML validation rules */}
                <label>Email</label>
                <input type="email" {...register("email")} /> <br /><br />

                <label> age</label>
                <input type="number" {...register("age")} />
                {/* errors will return when field validation fails  */}
                {/* {errors.exampleRequired && <span>This field is required</span>} */}

                <button>Submit</button>
            </form>
        </div>
    )
}
