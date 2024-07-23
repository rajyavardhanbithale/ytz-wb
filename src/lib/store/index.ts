import { configureStore } from '@reduxjs/toolkit'
import demoSlice from './demo/demoSlice'
import productDataSlice from './dashboard/productData'

export const store = configureStore({
    reducer: {
        demo: demoSlice,
        productData: productDataSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
