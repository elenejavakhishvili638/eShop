import { useContext } from "react"
import { useGetProducts } from "../hooks/useGetProducts"
import { IProduct } from "../models/interfaces"
import { ShopContext, ShopContextI } from "../context/shop-context"
import CartItem from "../components/CartItem"
import "./Checkout.css"
import { useNavigate } from "react-router"

const Checkout = () => {
    const { products } = useGetProducts()

    const { getCartItemCount, getTotalCartAmount, checkout } = useContext<ShopContextI>(ShopContext)

    const navigate = useNavigate()

    const totalAmount = getTotalCartAmount()
    return (
        <div className="checkout-wrapper">
            <h3>Your cart items</h3>
            <div className="products">
                {products?.map((product: IProduct) => {
                    if (getCartItemCount(product._id) !== 0) {
                        return <CartItem product={product} key={product._id} />
                    }
                })}
            </div>
            {totalAmount > 0 ? (
                <div className="checkout-container">
                    <h3>Subtotal: {totalAmount.toFixed(2)} $</h3>
                    <div className="button-cont">
                        <button onClick={() => navigate("/")}>Continue shopping</button>
                        <button onClick={checkout}>Checkout</button>
                    </div>
                </div>
            ) : (
                <>
                    <h3>Your shopping Cart is empty</h3>
                    <button onClick={() => navigate("/")}>Continue shopping</button>
                </>
            )}
        </div>
    )
}

export default Checkout