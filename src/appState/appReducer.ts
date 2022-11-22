import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import {getCity, SearchSelectItemType} from "../api/api";

const InitialState: InitialStateType = {
    citiesData: [],
    status: false,
    error: null
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
    }})

export const appReducer = slice.reducer
export const {setAppError, setAppStatus} = slice.actions

// types
type InitialStateType = {
    citiesData: Array<SearchSelectItemType>
    status: boolean
    error: string | null
}