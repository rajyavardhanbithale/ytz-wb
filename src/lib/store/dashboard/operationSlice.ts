import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type STATE = {
    selectedOperation: 'Dashboard' | 'Add Product' 
}


const initialState: STATE = {
    selectedOperation: 'Dashboard',
}


const operationSlice = createSlice({
    name: 'operationSlice',
    initialState,
    reducers: {
        selectOperation: (state, action: PayloadAction<any>) => {
            state.selectedOperation = action.payload
        },
    },
})

export const { selectOperation } = operationSlice.actions
export default operationSlice.reducer