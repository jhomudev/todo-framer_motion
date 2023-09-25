import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { StateTasks, TaskId, TaskProperties } from '../types'

const initialState: StateTasks = (() => {
  const tasksInlocalStorage = localStorage.getItem('__todo_list_app__tasks')
  return tasksInlocalStorage ? JSON.parse(tasksInlocalStorage) : []
})()

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action:PayloadAction<TaskProperties>) => {
      const newTaskProperties = action.payload
      const newTask = {
        id: crypto.randomUUID(),
        ...newTaskProperties
      }
      state.push(newTask)
    },
    deleteTask: (state, action: PayloadAction<TaskId>) => {
      const id = action.payload
      const idTaskToDelete = state.findIndex(task => task.id === id)
      state.splice(idTaskToDelete, 1)
    },
    toggleCompleteTask: (state, action: PayloadAction<TaskId>) => {
      const id = action.payload
      const idTaskToChange = state.findIndex(task => task.id === id)
      state[idTaskToChange].isCompleted = !state[idTaskToChange].isCompleted
    },
    deleteTasksCompleted: (state) => state.filter(task => !task.isCompleted)

  }
})

export default tasksSlice.reducer
export const { addTask, deleteTask, deleteTasksCompleted, toggleCompleteTask } = tasksSlice.actions
