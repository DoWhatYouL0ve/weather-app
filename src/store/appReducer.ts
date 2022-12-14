import {AnyAction, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {getCity, SearchSelectItemType} from "../api/cityAPI";
import {CurrentCityType, ForecastDailyType, getCityWeather, getForecastCityWeather} from "../api/weatherApi";

const InitialState: InitialStateType = {
    citiesData: [],
    status: false,
    findACity: false,
    error: '',
    weather: {
        currentCityWeather: {
            "coord": {
                "lon": 0,
                "lat": 0
            },
            "weather": [
                {
                    "id": 0,
                    "main": '',
                    "description": '',
                    "icon": ''
                }
            ],
            "base": '',
            "main": {
                "temp": 0,
                "feels_like": 0,
                "temp_min": 0,
                "temp_max": 0,
                "pressure": 0,
                "humidity": 0,
                "sea_level": 0,
                "grnd_level": 0
            },
            "visibility": 0,
            "wind": {
                "speed": 0,
                "deg": 0,
                "gust": 0
            },
            "rain": {
                "1h": 0
            },
            "clouds": {
                "all": 0
            },
            "dt": 0,
            "sys": {
                "type": 0,
                "id": 0,
                "country": '',
                "sunrise": 0,
                "sunset": 0
            },
            "timezone": 0,
            "id": 0,
            "name": '',
            "cod": 0
        },
        forecastWeather: {
            city:{
                coord:{
                    lat: 0,
                    lon: 0,
                },
                country: '',
                id: 0,
                name: '',
                population: 0,
                sunrise: 0,
                sunset: 0,
                timezone: 0,
            },
            cnt: 0,
            cod: '',
            list: [
                {
                    clouds: {
                        all: 0,
                    },
                    dt: 0,
                    dt_txt: '',
                    main: {
                        feels_like: 0,
                        grnd_level: 0,
                        humidity: 0,
                        pressure: 0,
                        sea_level: 0,
                        temp: 0,
                        temp_kf: 0,
                        temp_max: 0,
                        temp_min: 0,
                    },
                    pop: 0,
                    sys: {
                        pod: '',
                    },
                    visibility: 0,
                    weather: [
                        {
                            description: '',
                            icon: '',
                            id: 0,
                            main: '',
                        }
                    ],
                    wind: {
                        deg: 0,
                        gust: 0,
                        speed: 0,
                    }
                }
            ] ,
            message: 0,
        }
    }
}

// thunk creators
export const getCities = createAsyncThunk('app/getCities', async (city: string, thunkAPI) => {
    try {
        const res = await getCity(city)
        return {cities: res.data.data}
    }catch(err: any) {
        const error: AxiosError = err
        return thunkAPI.rejectWithValue({error: error.message})
    }
})

export const getCurrentCityWeather = createAsyncThunk('app/getCurrentCityWeathers', async (data:{lat: number, lon: number}, thunkAPI) => {
    try {
        const resW = await getCityWeather(data.lat, data.lon)
        const resF = await getForecastCityWeather(data.lat, data.lon)
        return {currentCityWeather: resW.data, forecastWeather: resF.data}
    }catch(err: any) {
        const error: AxiosError = err
        return thunkAPI.rejectWithValue({error: error.message})
    }
})

const slice = createSlice({
    initialState: InitialState,
    name: 'app',
    reducers: {
        setAppError(state, action: PayloadAction<{error: string}>) {
            state.error = action.payload.error},
    }, extraReducers: builder => {
        builder.addCase(getCities.pending, (state) => {
            state.findACity = true
            state.error = ''
        })
        builder.addCase(getCities.fulfilled, (state, action) => {
            state.citiesData = action.payload.cities
            state.findACity = false
        })
        builder.addCase(getCurrentCityWeather.pending, (state) => {
            state.status = true
            state.error = ''
        })
        builder.addCase(getCurrentCityWeather.fulfilled, (state, action) => {
            state.weather = {currentCityWeather: action.payload.currentCityWeather, forecastWeather: action.payload.forecastWeather}
            state.status = false
        })
        builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.status = false
            state.findACity = false
        })
    }})

export const appReducer = slice.reducer
export const {setAppError} = slice.actions

// helper function for common error handling cases
const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected')
}

// types
type InitialStateType = {
    citiesData: Array<SearchSelectItemType>
    status: boolean
    findACity: boolean
    error: string
    weather: {
        currentCityWeather: CurrentCityType
        forecastWeather: ForecastDailyType
    }
}