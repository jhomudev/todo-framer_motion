import { Middleware } from '@reduxjs/toolkit'
import { toast } from 'sonner'
import { deleteTask, addTask, deleteTasksCompleted } from '../tasksSlice'

const toastMessage:Middleware = (_) => (next) => (action) => {
  next(action)
  switch (action.type) {
    case deleteTask.type:
      toast.success('Task deleted')
      break
    case addTask.type:
      toast.success('Task added')
      break
    case deleteTasksCompleted.type:
      toast.success('Tasks completed deleted')
      break
  }
}

export default toastMessage
