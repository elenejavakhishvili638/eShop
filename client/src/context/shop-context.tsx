import { createContext, useState } from "react"
import { useGetProducts } from "../hooks/useGetProducts"
import { IProduct } from "../models/interfaces"
import axios from "axios"
import { useGetToken } from "../hooks/useGetToken"

export interface ShopContextI {
    addToCart: (itemId: string) => void,
    removeFromCart: (itemId: string) => void,
    updateCartItemCount: (newAmount: number, itemId: string) => void,
    getCartItemCount: (itemId: string) => number,
    getCartItems: () => number,
    getTotalCartAmount: () => number,
    checkout: () => void
}

const ShopContext = createContext<ShopContextI>({
    addToCart: () => { },
    removeFromCart: () => { },
    updateCartItemCount: () => { },
    getCartItemCount: () => 0,
    getCartItems: () => 0,
    getTotalCartAmount: () => 0,
    checkout: () => { }
})

interface ShopContextProviderProps {
    children: React.ReactNode
}

const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
    const [cartItems, setCartItems] = useState<Record<string, number> | Record<string, never>>({})
    const { products } = useGetProducts()

    const { headers } = useGetToken()

    const getCartItemCount = (itemId: string) => {
        if (itemId in cartItems) {
            return cartItems[itemId]
        }

        return 0
    }

    const getCartItems = () => {
        return Object.values(cartItems).reduce((a, b) => a + b, 0)
    }

    const addToCart = (itemId: string) => {
        if (!cartItems[itemId]) {
            setCartItems((prevValues) => ({ ...prevValues, [itemId]: 1 }))
        } else {
            setCartItems((prevValues) => ({ ...prevValues, [itemId]: prevValues[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId: string) => {
        if (!cartItems[itemId]) return;
        if (cartItems[itemId] == 0) return;
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1
        }))
    }

    const getTotalCartAmount = (): number => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo: IProduct = products.find((product) => product._id === item)
                totalAmount += cartItems[item] * itemInfo.price
            }
        }

        return totalAmount
    }

    const updateCartItemCount = (newAmount: number, itemId: string) => {
        if (newAmount < 0) return;
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
    }

    const checkout = async () => {
        const body = { customerID: localStorage.getItem("userId"), cartItems }

        try {
            await axios.post("http://localhost:3001/products/checkout", body, { headers })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ShopContext.Provider value={{ addToCart, removeFromCart, updateCartItemCount, getCartItemCount, getCartItems, getTotalCartAmount, checkout }}>
            {children}
        </ShopContext.Provider>
    )
}

export { ShopContext, ShopContextProvider }