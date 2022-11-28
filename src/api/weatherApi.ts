import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_OpenWeatherAPI_URL,
})

export const getCityWeather = (lat: number, lon: number) => {
    const apiKey = process.env.REACT_APP_OpenWeatherAPI_HOST
    return instance.get<{lat: number, lon: number},AxiosResponse<CurrentCityType>>(`weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
}

export const getForecastCityWeather = (lat: number, lon: number) => {
    const apiKey = process.env.REACT_APP_OpenWeatherAPI_HOST
    return instance.get<{lat: number, lon: number},AxiosResponse<ForecastDailyType>>(`forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
}

// types
export type CurrentCityType = {
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

export type ForecastDailyType = {
    city:{
        coord:{
        lat: number,
        lon: number
        }
    country: string
    id: number
    name: string
    population: number
    sunrise: number
    sunset: number
    timezone: number
    }
    cnt: number
    cod: string
    list: Array<ForecastListType>
    message: number
}

type ForecastListType = {
    clouds: {
        all: number
    }
    dt: number
    dt_txt: string
    main: {
        feels_like: number
        grnd_level: number
        humidity: number
        pressure: number
        sea_level: number
        temp: number
        temp_kf: number
        temp_max: number
        temp_min: number
    }
    pop: number
    sys: {
        pod: string
    }
    visibility: number
    weather: [
        {
            description: string
            icon: string
            id: number
            main: string
        }
    ]
    wind: {
        deg: number
        gust: number
        speed: number
    }
}