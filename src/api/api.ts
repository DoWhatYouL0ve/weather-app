import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    withCredentials: true,
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RapidAPI_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_RapidAPI_HOST
    }
})

export const getCity = (city: string) => {
    return instance.get<{city: string},AxiosResponse<{data: Array<SearchSelectItemType>}>>(`?namePrefix=${city}&sort=-population&minPopulation=10000`)
}


// types
export type SearchSelectItemType = {
    city: string
    country: string
    countryCode: string
    id: number
    latitude: number
    longitude: number
    name: string
    population: number
    region: string
    regionCode: string
    type: string
    wikiDataId: string
}