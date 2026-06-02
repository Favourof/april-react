import { useState, useEffect } from "react"

export const Product = () => {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [productError, setProductError] = useState('')

    async function getProduct() {
        try {
            setLoading(true)
            setProductError("")
            const response = await fetch('https://fakestoreapi.com/product')
            console.log("response: ", response);
            if (response.ok) {
                const resJson = await response.json()
                console.log(resJson);
                setProduct(resJson)
                setLoading(false)
                console.log("product", products);
            } else {
                setProductError("Error while fetching Products")
            }



        } catch (error) {
            setProductError(error.message)
            console.log(error);

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProduct();
    }, [])






    return (
        <div>

            {
                productError && <h1>{productError}</h1>
            }

            {
                loading && <h1>loading</h1>
            }
            {
                products.map((product, i) => (
                    <ul key={i}>
                        <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} />
                        <li>{product.title}</li>
                        <li>{product.description}</li>
                    </ul>
                ))
            }
        </div>
    )
}
