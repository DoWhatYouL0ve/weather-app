import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    withCredentials: true,
    headers: {
        'X-RapidAPI-Key': '2d269a6ac8mshb36af9e3b596612p15ce5fjsnd0074ba9cc5e',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
})

export const getCity = (city: string) => {
    return instance.get<{city: string},AxiosResponse<{data: Array<SearchSelectItemType>}>>(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${city}&sort=-population&minPopulation=10000`)
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