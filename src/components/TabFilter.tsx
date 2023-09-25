import { FunctionComponent } from 'react'
import useFilter from '../hooks/useFilter'
import { FiltersTasks } from '../types.d'
import { useAppSelector } from '../hooks/useStoreActions'

type Props = {
  content: string,
  filterValue: FiltersTasks
}

const TabFilterItem: FunctionComponent<Props> = ({ content, filterValue }) => {
  const { changeFilter } = useFilter()
  const filter = useAppSelector(store => store.filter)

  const classNameDefaultTab = 'min-w-[100px] py-3 relative'
  const isTheFilter = filter === filterValue

  return (
    <li className='flex-1 font-semibold flex justify-center relative'>
      <button
        onClick={() => { changeFilter(filterValue) }}
        className={`${classNameDefaultTab} ${isTheFilter && 'after-tab'}`}
      >
        {content}
      </button>
    </li>
  )
}

const TabFilter = () => {
  return (
    <nav className='w-[min(100%,600px)] border-b-[1px] border-mygray'>
      <ul className='w-full flex items-center text-center box-border'>
        <TabFilterItem content='All' filterValue={FiltersTasks.all} />
        <TabFilterItem content='Active' filterValue={FiltersTasks.active} />
        <TabFilterItem content='Completed' filterValue={FiltersTasks.completed} />
      </ul>
    </nav>
  )
}
export default TabFilter
