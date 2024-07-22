import { configureStore } from '@reduxjs/toolkit'
import demoSlice from './demo/demoSlice'

export const store = configureStore({
    reducer: {
        demo: demoSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
