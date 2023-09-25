import { FunctionComponent } from 'react'
import { StateTasks } from '../types'
import TaskItem from './TaskItem'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  tasks: StateTasks,
}

const ListTasks:FunctionComponent<Props> = ({ tasks }) => {
  return (
    <motion.ul className='flex gap-3 flex-col'>
      <AnimatePresence mode='popLayout'>
        {
        tasks.map((task, i) => (
          <TaskItem key={task.id} custom={i} id={task.id} content={task.content} isCompleted={task.isCompleted} />
        ))
        }
      </AnimatePresence>
    </motion.ul>
  )
}
export default ListTasks
