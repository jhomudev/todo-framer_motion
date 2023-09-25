import { FunctionComponent } from 'react'
import { Trash } from '@phosphor-icons/react'
import { Variants, motion } from 'framer-motion'
import { TaskId } from '../types'
import useTasks from '../hooks/useTasks'

type TaskItemType = {
  id: TaskId,
  custom: number,
  content: string,
  isCompleted?: boolean
}

const TaskItem: FunctionComponent<TaskItemType> = ({ id, custom, content, isCompleted }) => {
  const { changeIsCompletedTask, removeTask } = useTasks()

  const variants:Variants = {
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { type: 'spring', delay: i * 0.1 }
    }),
    hidden: { x: -50, opacity: 0 },
    exit: { x: 100, opacity: 0 }
  }

  return (
    <motion.li
      layout
      variants={variants}
      custom={custom}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='flex items-center gap-3'
    >
      <motion.input onChange={() => { changeIsCompletedTask(id) }} className='accent-myblue' type='checkbox' checked={isCompleted} />
      <motion.p className={`${isCompleted && 'line-through'}`}>{content}</motion.p>
      <motion.button onClick={() => { removeTask(id) }} className='text-mygray text-lg hover:text-red-500 ml-auto'><Trash /></motion.button>
    </motion.li>
  )
}
export default TaskItem
