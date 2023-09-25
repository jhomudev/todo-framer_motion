import TabFilter from './components/TabFilter'
import FormAddTask from './components/FormAddTask'
import { useAppSelector } from './hooks/useStoreActions'
import { FiltersTasks } from './types.d'
import Tasks from './components/Tasks'
import { Toaster } from 'sonner'

function App () {
  const filter = useAppSelector(store => store.filter)

  return (
    <>
      <div className='container-all w-full min-h-screen font-raleway'>
        <div className='w-full container mx-auto py-10 px-4 flex gap-5 flex-col items-center overflow-hidden'>
          <h1 className='text-2xl font-bold'>#todo</h1>
          <TabFilter />
          <main className='w-[min(100%,600px)] flex flex-col gap-4'>
            {filter !== FiltersTasks.completed && <FormAddTask />}
            <Tasks />
          </main>
        </div>
        <Toaster richColors />
      </div>
    </>
  )
}

export default App
