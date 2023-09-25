import { TaskId, TaskProperties } from '../types'
import { useAppDispatch } from './useStoreActions'
import { addTask, deleteTask, deleteTasksCompleted, toggleCompleteTask } from '../store/tasksSlice'

const useTasks = () => {
  const dispacth = useAppDispatch()

  function addNewTask (task:TaskProperties) {
    dispacth(addTask(task))
  }

  function removeTask (taskId:TaskId) {
    dispacth(deleteTask(taskId))
  }

  function changeIsCompletedTask (taskId:TaskId) {
    dispacth(toggleCompleteTask(taskId))
  }

  function removeTasksCompleted () {
    dispacth(deleteTasksCompleted())
  }

  return { addNewTask, removeTask, removeTasksCompleted, changeIsCompletedTask }
}
export default useTasks
