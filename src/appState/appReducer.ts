import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {getCity, SearchSelectItemType} from "../api/cityAPI";
import {CurrentCityType, getCityWeather} from "../api/weatherApi";

const InitialState: InitialStateType = {
    citiesData: [],
    status: false,
    error: null,
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
    }
}

// thunk creators
export const getCities = createAsyncThunk('app/getCities', async (city: string, thunkAPI) => {
    thunkAPI.dispatch(setAppStatus({status: true}))
    try {
        const res = await getCity(city)
        thunkAPI.dispatch(setAppStatus({status: false}))
        return {cities: res.data.data}
    }catch(err: any) {
        const error: AxiosError = err
        //handleNetworkError(error, thunkAPI.dispatch)
        return thunkAPI.rejectWithValue({errors: [error.message], fieldsErrors: undefined})
    }
})

export const getCurrentCityWeather = createAsyncThunk('app/getCurrentCityWeathers', async (data:{lat: number, lon: number}, thunkAPI) => {
    thunkAPI.dispatch(setAppStatus({status: true}))
    try {
        const res = await getCityWeather(data.lat, data.lon)
        thunkAPI.dispatch(setAppStatus({status: false}))
        return {currentCityWeather: res.data}
    }catch(err: any) {
        const error: AxiosError = err
        //handleNetworkError(error, thunkAPI.dispatch)
        return thunkAPI.rejectWithValue({errors: [error.message], fieldsErrors: undefined})
    }
})

const slice = createSlice({
    initialState: InitialState,
    name: 'app',
    reducers: {
        setAppStatus(state, action: PayloadAction<{status: boolean}>) {
            state.status = action.payload.status},
        setAppError(state, action: PayloadAction<{error: string | null}>) {
            state.error = action.payload.error},
    }, extraReducers: builder => {
        builder.addCase(getCities.fulfilled, (state, action) => {
            state.citiesData = action.payload.cities
        })
        builder.addCase(getCurrentCityWeather.fulfilled, (state, action) => {
            state.currentCityWeather = action.payload.currentCityWeather
        })
    }})

export const appReducer = slice.reducer
export const {setAppError, setAppStatus} = slice.actions

// types
type InitialStateType = {
    citiesData: Array<SearchSelectItemType>
    status: boolean
    error: string | null
    currentCityWeather: CurrentCityType
}