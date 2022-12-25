import {configureStore} from '@reduxjs/toolkit'
import registerReducer from './slices/authSlice'
import ProductSlice from './slices/productSlice'


export const store = configureStore({
    reducer: {
        accessToken: registerReducer,
        product: ProductSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch