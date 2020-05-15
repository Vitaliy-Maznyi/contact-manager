import axios from 'axios'
import { merge } from 'lodash'

const interceptRequests = () => {
  axios.defaults.baseURL = 'http://localhost:3000'

  // TODO: setup authentication
  axios.interceptors.request.use(
    config => merge({}, config, {
      headers: merge({}, config.headers, {
        // Authorization: `Bearer ${token})}`,
      }),
    }),

    error => {
      console.error('API Request Error: --------------------- v')
      return Promise.reject(error)
    }
  )
}

// const interceptResponses = () => {}  TODO: check for token errors

const enableAxiosInterceptors = () => {
  interceptRequests()
}

export default enableAxiosInterceptors
