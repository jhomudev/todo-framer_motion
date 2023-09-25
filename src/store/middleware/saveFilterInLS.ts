import { Middleware } from '@reduxjs/toolkit'
import { setFilter } from '../filterSlice'

const saveFilterInLS:Middleware = (store) => (next) => (action) => {
  next(action)
  // save in local storage
  if (action.type === setFilter.type) localStorage.setItem('__todo_list_app__filter', store.getState().filter)
}

export default saveFilterInLS
