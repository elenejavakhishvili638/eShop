import { useMemo } from "react"
import { useCookies } from "react-cookie"

export const useGetToken = () => {
    const [cookies, _] = useCookies(["access_token"])

    const headers = useMemo(() => {
        return { authorization: cookies.access_token }
    }, [cookies.access_token])

    return { headers }
}