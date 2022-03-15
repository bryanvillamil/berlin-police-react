import axios from 'axios'

export const api = axios.create({
    baseURL: `https://bikeindex.org/api/v3/bikes/564?access_token=jHe3QbAFD62nDuH5qZPNoZPHZxgPL-C5VfgXT_m5ePk`
})