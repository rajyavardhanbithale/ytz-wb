import { configureStore } from '@reduxjs/toolkit'
import demoSlice from './demo/demoSlice'
import productDataSlice from './dashboard/productData'
import operationSlice from './dashboard/operationSlice'

export const store = configureStore({
    reducer: {
        demo: demoSlice,
        productData: productDataSlice,
        operation: operationSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
