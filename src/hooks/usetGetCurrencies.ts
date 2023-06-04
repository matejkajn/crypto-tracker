import axios from "axios"
import { useEffect, useState } from "react"

const options = {
  method: 'GET',
  url: import.meta.env.VITE_RAPID_API_CURRENCIES_URL,
  params: {
    limit: '60',
  },
  headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST
  }
};

export const useGetCurrencies = <Currencies>():[boolean, Currencies | undefined, any] => {
    const [loading, setLoading] = useState<boolean>(true)
    const [data, setData] = useState<Currencies>()
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