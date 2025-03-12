import styles from './TaskList.module.css'
import { Task } from './Task'

const tasks = [
  {
    id: 1,
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: false
  },
  {
    id: 2,
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: true
  },
]

export function TaskList() {
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