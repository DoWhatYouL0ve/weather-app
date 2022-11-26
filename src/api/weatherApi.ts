import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_OpenWeatherAPI_URL,
    withCredentials: true,
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RapidAPI_KEY,
    }
})

export const getCityWeather = (lat: number, lon: number) => {
    const apiKey = process.env.REACT_APP_OpenWeatherAPI_HOST
    return instance.get<{lat: number, lon: number},AxiosResponse<{data: ResponseType}>>(`?lat=${lat}&lon=${lon}&appid=${apiKey}`)
}

// types
type ResponseType = {
    "coord": {
        "lon": number,
        "lat": number
    },
    "weather": [
        {
            "id": number,
            "main": string,
            "description": string,
            "icon": string
        }
    ],
    "base": string,
    "main": {
        "temp": number,
        "feels_like": number,
        "temp_min": number,
        "temp_max": number,
        "pressure": number,
        "humidity": number,
        "sea_level": number,
        "grnd_level": number
    },
    "visibility": number,
    "wind": {
        "speed": number,
        "deg": number,
        "gust": number
    },
    "rain": {
        "1h": number
    },
    "clouds": {
        "all": number
    },
    "dt": number,
    "sys": {
        "type": number,
        "id": number,
        "country": string,
        "sunrise": number,
        "sunset": number
    },
    "timezone": number,
    "id": number,
    "name": string,
    "cod": number
}