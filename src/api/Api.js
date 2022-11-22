import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
      // api_key: '165475b8f2da839621ecc0e2e99a74b0'
    }
})

export default Api