import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

type STATE = {
    DEMO: any | null
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState: STATE = {
    DEMO: null,
    loading: 'idle',
}

export const demoThunk = createAsyncThunk('demo/app', async (req: number) => {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${req}`
    )
    return response?.data
})

const demoSlice = createSlice({
    name: 'demoSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            demoThunk.fulfilled,
            (state, action: PayloadAction<any>) => {
                state.loading = 'succeeded'
                state.DEMO = action.payload
            }
        )
    },
})

export default demoSlice.reducer
