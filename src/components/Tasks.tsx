import { Trash } from '@phosphor-icons/react'
import { useAppSelector } from '../hooks/useStoreActions'
import { FiltersTasks } from '../types.d'
import ButtonMotion from './ButtonMotion'
import useTasks from '../hooks/useTasks'
import ListTasksEmpty from './ListTasksEmpty'
import ListTasks from './ListTasks'

const Tasks = () => {
  const filter = useAppSelector(store => store.filter)
  const tasks = useAppSelector(store => store.tasks)
  const { removeTasksCompleted } = useTasks()

  const tasksFilterOptions = {
    all: tasks,
    completed: tasks.filter(task => task.isCompleted),
    active: tasks.filter(task => !task.isCompleted)
  }

  const areThereTasks = tasks.length > 0
  const isFilterCompleted = filter === FiltersTasks.completed
  const areThereTasksCompleted = tasksFilterOptions.completed.length > 0

  return (
    <main className='flex flex-col gap-5'>
      {
          areThereTasks
            ? <ListTasks tasks={tasksFilterOptions[filter]} />
            : <ListTasksEmpty />
        }
      {
          isFilterCompleted && areThereTasksCompleted &&
            <ButtonMotion
              onClick={removeTasksCompleted}
              className='text-white bg-red-500 self-end text-sm flex items-center gap-1'
            >
              <Trash />Delete completed
            </ButtonMotion>
        }
    </main>
  )
}
export default Tasks
