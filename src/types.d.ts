export enum FiltersTasks {
  all= 'all',
  active= 'active',
  completed= 'completed',
}
export type TaskId = ReturnType<typeof crypto.randomUUID>

export type TaskProperties= {
  content:string,
  isCompleted:boolean
}

export type TaskWithId = { id: TaskId } & TaskProperties

export type StateTasks = TaskWithId[]
