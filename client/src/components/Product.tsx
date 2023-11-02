import { IProduct } from "../models/interfaces"

type Props = {
    product: IProduct
}

const Product = ({ product }: Props) => {
    return (
        <div className="product">
            <img src={product.imageURL} className="product-img" />
            <div className="product-description">
                <h3>{product.productName}</h3>
                <p>{product.description}</p>
                <p>{product.price} $</p>
            </div>
            <button disabled={product.stockQuantity === 0}>Add to cart</button>
            <div>
                {product.stockQuantity === 0 ? <p>OUT OF STOCK</p> :
                    (
                        <p>Left - {product.stockQuantity}</p>
                    )
                }
            </div>
        </div>
    )
}

export default Product