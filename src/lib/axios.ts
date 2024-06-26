import axios from 'axios'

// axios configuration
export const api = axios.create({
  baseURL: 'http://localhost:3333',
})
