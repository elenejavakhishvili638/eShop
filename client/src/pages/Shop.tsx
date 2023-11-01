import Modal from "../components/Modal"
import { useGetProducts } from "../hooks/useGetProducts"
import "./Shop.css"

const Shop = () => {
    const { products, error, setError, loading } = useGetProducts()

    const closeModal = () => {
        setError("")
    }

    return (
        <>
            {error && <Modal text={error} closeModal={closeModal} />}
            {loading ? <Modal text="Please wait" /> : (
                <div className="shop">
                    <div className="products">
                        {products?.map((product, index) => {
                            return (
                                <div key={index}>
                                    <img src={product.imageURL} />
                                    <div>
                                        <h3>{product.productName}</h3>
                                        <p>{product.description}</p>
                                        <p>{product.price}</p>
                                    </div>
                                    <div>
                                        <p>left - {product.stockQuantity}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </>
    )
}

export default Shop