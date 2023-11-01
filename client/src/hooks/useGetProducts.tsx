import axios from "axios";
import { useEffect, useState } from "react"
import { useGetToken } from "./useGetToken";

export interface IProduct {
    productName: string;
    price: number;
    description: string;
    imageURL: string;
    stockQuantity: number;
}


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
            }
        }

        fetchProducts()
    }, [headers])

    return { products, error, setError, loading }
}