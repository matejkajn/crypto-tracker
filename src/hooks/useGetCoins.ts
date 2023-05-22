import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Currency } from "../types/types"
import { CurrencyContext } from "../components/CurrencyContextProvider"

type Props = {
    offset?: number,
    limit?: number
}

export const useGetCoins = <Coins>({ limit = 300, offset = 0 } : Props):[boolean, Coins | undefined, any] => {

    const { currency } = useContext(CurrencyContext);

    const options = {
        method: 'GET',
        url: import.meta.env.VITE_RAPID_API_COINS_URL,
        params: {
          referenceCurrencyUuid: currency.uuid,
          timePeriod: '7d',
          orderBy: 'marketCap',
          orderDirection: 'desc',
          limit: limit,
          offset: offset
        },
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST
        }
    };


    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<Coins>()
    const [error, setError] = useState<any>()

    useEffect(() => {
        sendRequest()
    }, [currency])

  const sendRequest = () => {
        setLoading(true)

        axios(options)
            .then((resp) => {
                setData(resp.data) 
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => setTimeout(() => setLoading(false), 1500))
    }

    return [loading, data, error ]
}