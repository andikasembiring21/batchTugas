import axios from 'axios'

export const HTTP =axios.create({
    baseUrl:`http://jsonplaceholder.typicode.com/`,
    Authorization: 'Bearer {token}' 
})