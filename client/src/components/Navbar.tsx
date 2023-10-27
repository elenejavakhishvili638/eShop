import { Link } from 'react-router-dom'
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai"
import { MdShoppingCartCheckout } from "react-icons/md"
import { FcShop } from "react-icons/fc"

const Navbar = () => {
    return (
        <div>
            <div>
                <h1>E-Shop</h1>
            </div>
            <div>
                <Link to="/"><FcShop /></Link>
                <Link to="/purchsed-items"><AiOutlineShoppingCart /></Link>
                <Link to="/checkout"><MdShoppingCartCheckout /></Link>
                <Link to="/auth"><AiOutlineUser /></Link>
            </div>
        </div>
    )
}

export default Navbar