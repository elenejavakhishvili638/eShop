import { Link } from 'react-router-dom'
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai"
import { MdShoppingCartCheckout } from "react-icons/md"
import { FcShop } from "react-icons/fc"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='title'>
                <h3>E-Shop</h3>
            </div>
            <div className='navbar-list'>
                <Link to="/"><FcShop /></Link>
                <Link to="/purchased-items"><AiOutlineShoppingCart /></Link>
                <Link to="/checkout"><MdShoppingCartCheckout /></Link>
                <Link to="/auth"><AiOutlineUser /></Link>
            </div>
        </div>
    )
}

export default Navbar