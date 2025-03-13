import styles from './TaskList.module.css'
import { Task } from './Task'

export interface TaskType {
  id: string
  title: string
  isCompleted: boolean
}

interface TaskListProps {
  tasks: TaskType[]
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <div className={styles.taskList}>
      {
        tasks.map(task => {
          return <Task key={task.id} title={task.title} isCompleted={task.isCompleted} />
        })
      }
    </div>
  )
}