import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FiltersTasks } from '../types.d'

const initialState: FiltersTasks = (() => {
  const filterInLocalStorage = localStorage.getItem('__todo_list_app__filter') as FiltersTasks
  return filterInLocalStorage || FiltersTasks.all
})()

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter (_, action: PayloadAction<FiltersTasks>) {
      return action.payload
    }
  }
})

export default filterSlice.reducer
export const { setFilter } = filterSlice.actions
