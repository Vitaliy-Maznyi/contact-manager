import { useState, useEffect } from 'react'

const useFetch = ({ fetchMethod, params, defaultResponse }) => {
  const [request, setRequest] = useState({
    loading: true,
    response: defaultResponse,
  })

  useEffect(() => {
    async function fetchData() {
      const response = await fetchMethod(params)
      setRequest({
        loading: false,
        response: response.data,
      })
    }
    fetchData()
  }, [])

  return [request.response, request.loading]
}

export default useFetch
