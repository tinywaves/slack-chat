const DEV_BASE_URL = 'http://httpbin.dev.org'
const PROD_BASE_URL = 'http://httpbin.prod.org'

export const BASE_URL = process.env.NODE_ENV === 'development' ? DEV_BASE_URL : PROD_BASE_URL
export const TIMEOUT = 5000