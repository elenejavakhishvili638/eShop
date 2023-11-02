import Modal from "../components/Modal"
import Product from "../components/Product"
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
                        {products?.map((product) => {
                            return (
                                <Product product={product} key={product._id} />
                            )
                        })}
                    </div>
                </div>
            )}
        </>
    )
}

export default Shop