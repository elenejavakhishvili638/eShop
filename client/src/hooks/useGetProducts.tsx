import axios from "axios";
import { useEffect, useState } from "react"
import { useGetToken } from "./useGetToken";
import { IProduct } from "../models/interfaces";

export const useGetProducts = () => {
    const [products, setProducts] = useState<IProduct[]>()
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    const { headers } = useGetToken()

    useEffect(() => {
        setLoading(true)
        const fetchProducts = async () => {
            try {
                const products = await axios.get("http://localhost:3001/products", { headers })
                setProducts(products.data.products)
                setLoading(false)
            } catch (error) {
                setError("ERROR: Something went wrong")
                setLoading(false)
            }
        }

        if (localStorage.getItem("userId")) {
            fetchProducts()
        }
    }, [headers])

    return { products, error, setError, loading }
}