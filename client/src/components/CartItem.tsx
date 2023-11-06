import { useContext } from 'react'
import { IProduct } from '../models/interfaces'
import { ShopContext, ShopContextI } from '../context/shop-context'

type Props = {
    product: IProduct
}

const CartItem = ({ product }: Props) => {
    const { addToCart, removeFromCart, updateCartItemCount, getCartItemCount } = useContext<ShopContextI>(ShopContext)

    const item = getCartItemCount(product._id)

    return (
        <div className='cart-item'>
            <img src={product.imageURL} className="cart-item-img" />
            <div className="product-description">
                <h3>{product.productName}</h3>
                <p>{product.description}</p>
                <p>{product.price} $</p>
                <div className='count-handler'>
                    <button onClick={() => removeFromCart(product._id)}>-</button>
                    <input type='number' value={item} onChange={(event) => updateCartItemCount(Number(event.target.value), product._id)} />
                    <button onClick={() => addToCart(product._id)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem