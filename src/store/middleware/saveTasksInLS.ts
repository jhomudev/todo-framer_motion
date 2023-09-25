import { Middleware } from '@reduxjs/toolkit'
import { setFilter } from '../filterSlice'

const saveTasksInLS: Middleware = (store) => (next) => (action) => {
  next(action)
  // save in local storage
  if (action.type !== setFilter.type) localStorage.setItem('__todo_list_app__tasks', JSON.stringify(store.getState().tasks))
}
export default saveTasksInLS
