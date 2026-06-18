import { useForm } from "react-hook-form"
import "./Form.css";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";


export const AddProduct = () => {
    const [files, setFiles] = useState(null);
    const [preview, setPreview] = useState(null);



    const schema = z.object({
        title: z.string().min(5, { message: "Title must be at least 5 characters long" })
            .max(50, { message: "Title must not exceed 100 characters" }),

        description: z.string().min(5, { message: "Description must be at least 5 characters long" })
            .max(500, { message: "Description must not exceed 500 characters" }),
        price: z.coerce
            .number({ invalid_type_error: "Price must be a number" })
            .positive({ message: "Price must be greater than 0" }),



    })
    const { handleSubmit, register, formState: { errors } } = useForm({ resolver: zodResolver(schema) })
    console.log(errors);

    const handleImageChange = (e) => {
        const file = e.target.files?.[0]
        setFiles(file)
        console.log(file);
        if (file) {
            setPreview(URL.createObjectURL(file))
        }

    }






    const onSubmit = async (data) => {
        console.log(data);
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2YTBhZDNjNDdiZGE3MTdiMWVmM2RhMTYiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3ODE3NzI3MTAsImV4cCI6MTc4MjM3NzUxMH0.LAhTqOUU3M3nnYmiBAU7rDCP4nw-_uTO6cYcy4mbzgA"
        const formdata = new FormData()

        formdata.append("title", data.title)
        formdata.append("description", data.description)
        formdata.append("price", data.price)
        formdata.append("image", files)

        try {
            const product = await fetch("http://localhost:4000/api/v1/product", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formdata
            })

            if (product) {
                const res = await product.json()
                console.log(res);

            }
        } catch (error) {
            console.log(error);

        }



    }
    return (
        <div className="form-container">
            <h1 className="form-title">Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label className="form-label">Title</label>
                <input type="text" {...register("title")} className="form-input" />
                {errors.title && <p className="form-error">{errors.title.message}</p>}

                <label className="form-label">Description</label>
                <input type="text" {...register("description")} className="form-input" />
                {errors.description && <p className="form-error">{errors.description.message}</p>}

                <label className="form-label">Price</label>
                <input type="number" {...register("price")} className="form-input" />
                {errors.price && <p className="form-error">{errors.price.message}</p>}

                <label className="form-label">Image</label>
                <input type="file" name="image" onChange={handleImageChange} className="form-input" />
                {preview && <img src={preview} alt="" width={"100px"} height={"100px"} />}

                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    )
}
