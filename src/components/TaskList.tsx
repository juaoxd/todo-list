import styles from './TaskList.module.css'
import { Task } from './Task'

export interface TaskType {
  id: string
  title: string
  isCompleted: boolean
}

interface TaskListProps {
  tasks: TaskType[]
  onDeleteTask(id: string): void
}

export function TaskList({ tasks, onDeleteTask }: TaskListProps) {
  return (
    <div className={styles.taskList}>
      {
        tasks.map(task => {
          return <Task key={task.id} id={task.id} title={task.title} isCompleted={task.isCompleted} onDeleteTask={onDeleteTask} />
        })
      }
    </div>
  )
}