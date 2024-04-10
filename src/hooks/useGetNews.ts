import axios from "axios";
import { useEffect, useState } from "react";

const options = {
    method: 'GET',
    url: import.meta.env.VITE_RAPID_API_COIN_NEWS_URL,
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_NEWS_HOST
    }
};

export const useGetNews = <CoinNews>():[boolean, CoinNews | undefined, any] => {
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<CoinNews>()
    const [error, setError] = useState<any>()

    useEffect(() => {
        sendRequest()
    }, [])

    const sendRequest = () => {
        setLoading(true)

        axios(options)
            .then((resp) => {
                setData(resp.data)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => setLoading(false))
    }

    return [loading, data, error ]
}