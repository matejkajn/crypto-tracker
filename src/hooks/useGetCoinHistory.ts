import { useContext, useEffect, useState } from "react"
import { CurrencyContext } from "../components/CurrencyContextProvider"
import axios from "axios"

type Props = {
    uuid: string,
    timePeriod: string
}

export const useGetCoinHistory = <CoinHistory>({ uuid, timePeriod } : Props):[boolean, CoinHistory | undefined, any] => {
    
    const { currency } = useContext(CurrencyContext)

    const options = {
        method: 'GET',
        url: import.meta.env.VITE_RAPID_API_COIN_URL + uuid + "/history",
        params: {
        referenceCurrencyUuid: currency.uuid,
        timePeriod: timePeriod
        },
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST
        }
    };

    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<CoinHistory>()
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
            .finally(() => () => setLoading(false))
    }

    return [loading, data, error ]
}