import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './slices/registerSlice'


export const store = configureStore({
    reducer: {
        accessToken:registerReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch