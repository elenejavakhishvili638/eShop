import { Link } from 'react-router-dom'
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai"
import { MdShoppingCartCheckout } from "react-icons/md"
import { FcShop } from "react-icons/fc"
import "./Navbar.css"
import { useContext } from 'react'
import { ShopContext, ShopContextI } from '../context/shop-context'

const Navbar = () => {

    const { getCartItems, availableMoney } = useContext<ShopContextI>(ShopContext)

    const count = getCartItems()
    return (
        <div className='navbar'>
            <div className='title'>
                <h3>E-Shop</h3>
            </div>
            <div className='navbar-list'>
                <Link title='Shop' to="/"><FcShop /></Link>
                <p>{availableMoney.toFixed(2)}$</p>
                <Link title='Purchased items' to="/purchased-items"><AiOutlineShoppingCart /></Link>
                <div className='checkout'>
                    <Link title='Checkout' to="/checkout"><MdShoppingCartCheckout /></Link>
                    <div className='count-wrapper'>
                        <p>
                            {count}
                        </p>
                    </div>
                </div>
                <Link title='Authenticate' to="/auth"><AiOutlineUser /></Link>
            </div>
        </div>
    )
}

export default Navbar