import { useContext } from "react"
import { ShopContext } from "../context/shop-context"
import { IProduct } from "../models/interfaces"

const PurchasedItems = () => {

    const { purchasedItems, addToCart, getCartItemCount } = useContext(ShopContext)

    return (
        <div className="checkout-wrapper">
            <h3>Purchased items</h3>
            <div className="products">
                {purchasedItems?.map((product: IProduct) => {
                    const count = getCartItemCount(product._id)
                    return (
                        <div className='cart-item' key={product._id}>
                            <h3>{product.productName}</h3>
                            <img className="cart-item-img" src={product.imageURL} />
                            <p>${product.price}</p>
                            <button onClick={() => addToCart(product._id)}>Purchase again {count > 0 && <>({count})</>}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PurchasedItems