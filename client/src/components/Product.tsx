import { useContext } from "react"
import { IProduct } from "../models/interfaces"
import { ShopContext, ShopContextI } from "../context/shop-context"

type Props = {
    product: IProduct
}

const Product = ({ product }: Props) => {

    const { addToCart, getCartItemCount } = useContext<ShopContextI>(ShopContext)

    const count = getCartItemCount(product._id)
    return (
        <div className="product">
            <img src={product.imageURL} className="product-img" />
            <div className="product-description">
                <h3>{product.productName}</h3>
                <p>{product.description}</p>
                <p>{product.price} $</p>
            </div>
            <button disabled={product.stockQuantity === 0} onClick={() => addToCart(product._id)}>Add to cart</button>
            <div>
                {product.stockQuantity === 0 ? <p>OUT OF STOCK</p> :
                    (
                        <p>Left - {product.stockQuantity - count}</p>
                    )
                }
            </div>
        </div>
    )
}

export default Product