import axios from "axios"
import { useEffect, useState } from "react"

  const options = {
    method: 'GET',
    url: import.meta.env.VITE_RAPID_API_GLOBAL_STATS_URL,
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST
    }
  };

export const useGeneralStats = <GeneralStats>():[boolean, GeneralStats | undefined, any] => {
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<GeneralStats>()
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