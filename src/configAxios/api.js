import axios from 'axios'
import 'dotenv/config'

export const api = axios.create({
  baseURL: process.env.RACT_APP_BASE_URL_USER
})

