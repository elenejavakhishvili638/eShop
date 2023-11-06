import { createContext, useCallback, useEffect, useState } from "react"
import { useGetProducts } from "../hooks/useGetProducts"
import { IProduct } from "../models/interfaces"
import axios from "axios"
import { useGetToken } from "../hooks/useGetToken"
import { useNavigate } from "react-router"

export interface ShopContextI {
    addToCart: (itemId: string) => void,
    removeFromCart: (itemId: string) => void,
    updateCartItemCount: (newAmount: number, itemId: string) => void,
    getCartItemCount: (itemId: string) => number,
    getCartItems: () => number,
    getTotalCartAmount: () => number,
    checkout: () => void,
    availableMoney: number,
    purchasedItems: IProduct[]
}

const ShopContext = createContext<ShopContextI>({
    addToCart: () => { },
    removeFromCart: () => { },
    updateCartItemCount: () => { },
    getCartItemCount: () => 0,
    getCartItems: () => 0,
    getTotalCartAmount: () => 0,
    checkout: () => { },
    availableMoney: 0,
    purchasedItems: []
})

interface ShopContextProviderProps {
    children: React.ReactNode
}

const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
    const [cartItems, setCartItems] = useState<Record<string, number> | Record<string, never>>({})
    const [availableMoney, setAvailableMoney] = useState<number>(0)
    const [purchasedItems, setPurchasedItems] = useState<IProduct[]>([])

    const { products } = useGetProducts()
    const navigate = useNavigate()
    const { headers } = useGetToken()

    const fetchAvailableMoney = useCallback(async () => {
        try {
            const res = await axios.get(`http://localhost:3001/user/available-money/${localStorage.getItem("userId")}`, { headers })
            setAvailableMoney(res.data.availableMoney)
        } catch (error) {
            console.log(error)
        }
    }, [headers])

    useEffect(() => {
        if (localStorage.getItem("userId")) {
            fetchAvailableMoney()
        }
    }, [fetchAvailableMoney])


    const fetchPurchsedItems = useCallback(async () => {
        try {
            const res = await axios.get(`http://localhost:3001/products/purchased-items/${localStorage.getItem("userId")}`, { headers })
            setPurchasedItems(res.data.purchasedItems)
        } catch (error) {
            console.log(error)
        }
    }, [headers])

    useEffect(() => {
        if (localStorage.getItem("userId")) {
            fetchPurchsedItems()
        }
    }, [fetchPurchsedItems])

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
            setCartItems({})
            fetchAvailableMoney()
            fetchPurchsedItems()
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ShopContext.Provider value={{
            addToCart,
            removeFromCart,
            updateCartItemCount,
            getCartItemCount,
            getCartItems,
            getTotalCartAmount,
            checkout,
            availableMoney,
            purchasedItems
        }}>
            {children}
        </ShopContext.Provider>
    )
}

export { ShopContext, ShopContextProvider }