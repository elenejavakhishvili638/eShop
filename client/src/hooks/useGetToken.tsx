import { useMemo } from "react"
import { useCookies } from "react-cookie"

export const useGetToken = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cookies, _] = useCookies(["access_token"])

    const headers = useMemo(() => {
        return { authorization: cookies.access_token }
    }, [cookies.access_token])

    return { headers }
}