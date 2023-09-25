import { ChangeEvent, useState } from 'react'
import ButtonMotion from './ButtonMotion'
import InputMotion from './InputMotion'
import useTasks from '../hooks/useTasks'

const FormAddTask = () => {
  const { addNewTask } = useTasks()

  const [taskForm, setTaskForm] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleSubmitForm = (e:ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!taskForm) {
      setError('Please enter a task')
      return
    }

    addNewTask({ content: taskForm, isCompleted: false })
    setError('')
    setTaskForm('')
  }

  const handleChangeTaskForm = (e:ChangeEvent<HTMLInputElement>) => setTaskForm(e.target.value)

  return (
    <form onSubmit={handleSubmitForm} className='flex justify-center gap-4 mb-3'>
      <div className='relative w-full'>
        <InputMotion autoFocus value={taskForm} onChange={handleChangeTaskForm} className='w-full' type='text' placeholder='Write something' />
        {error && <p className='text-red-500 text-xs absolute top-full left-0'>{error}</p>}
      </div>
      <ButtonMotion>Add</ButtonMotion>
    </form>
  )
}
export default FormAddTask
