import Button from "./Button";


export const Interpolation = () => {
    const name = "John"
    const age = 55
    const product = {
        title: "Macbook",
        description: "The macbook have m2 chip",
        price: 5000,
        available: false
    }

    const users = [
        {
            name: 'ayo',
            age: 20,
            gender: "male"
        },
        {
            
            name: 'Biola',
            age: 17,
            gender: "female"
        },
        {
            name: 'Kunle',
            age: 18,
            gender: "male"
        }
    ]
    return (
        <div>
            <h1>Interpolation</h1>
            <p>my name is {name}</p>
            <p>{name} age is {age}</p>

            <h1>Product</h1>
            <ul>
                <li>{product.title.toUpperCase()}</li>
                <li>{product.description}</li>
                <li>{product.price + 200}</li>
                {/* <li>{product.available ? "available" : "not available"}</li> */}
                <li>{product.available && "Available"}</li>
            </ul>


            <div>
                {users.map((user, i) => (
                    <ul style={{ border: "thin solid black", padding: "10px", margin: "5px" }} key={i}>
                        <li>{user.name}</li>
                        <li>{user.gender}</li>
                        <li>{user.age}</li>
                        <Button text= {user.name} color={"yellow"} />
                    </ul>
                ))}
            </div>
        </div>
    )
}
