import { useMemo } from "react"

export default function useQuery(...keys) {
    return useMemo(() => {
        const params = new URLSearchParams(window.location.search)
        let values = {}
        for (let key in keys) {
            let query = keys[key]
            values = {
                ...values,
                [query]: params.get(query)
            }
        }
        return values;
    }, [keys])
}