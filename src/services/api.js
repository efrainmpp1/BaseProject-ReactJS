import axios from 'axios'
import hostUrl from './hostUrl'

const api = axios.create({
  baseURL: hostUrl,
})

export default api
