import { useState, useEffect, useCallback } from 'react'

export const Product = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [productError, setProductError] = useState('')
    const [retry, setRetry] = useState(false);
    const getProduct = async () => {
        try {
            setLoading(true)
            setProductError("")
            const response = await fetch('https://fakestoreapi.com/products')

            if (response.ok) {
                const resJson = await response.json()
                setProducts(resJson)
            } else {
                setProductError("Error while fetching Products")
            }
        } catch (error) {
            setProductError(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProduct()
    }, [retry])

    return (
        <div className="product-container">
            {productError && (
                <div className="error-box">
                    <h1>{productError}</h1>
                    <button onClick={() => setRetry(!retry)}>Retry</button>
                </div>
            )}

            {loading && <h1>Loading...</h1>}

            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="product-image"
                        />
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">${product.price}</p>
                        <button className="see-more-btn">See More</button>
                    </div>
                ))}
            </div>
        </div>
    )
}


