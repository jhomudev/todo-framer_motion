import { setFilter } from '../store/filterSlice'
import { FiltersTasks } from '../types'
import { useAppDispatch } from './useStoreActions'

const useFilter = () => {
  const dispacth = useAppDispatch()

  function changeFilter (filter:FiltersTasks) {
    dispacth(setFilter(filter))
  }

  return { changeFilter }
}
export default useFilter
