import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './tasksSlice'
import filterSlice from './filterSlice'
import saveTasksInLS from './middleware/saveTasksInLS'
import saveFilterInLS from './middleware/saveFilterInLS'
import toastMessage from './middleware/toastMessage'

const store = configureStore({
  reducer: {
    filter: filterSlice,
    tasks: tasksSlice
  },
  middleware: [saveTasksInLS, saveFilterInLS, toastMessage]
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
