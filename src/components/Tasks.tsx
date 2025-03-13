import { EmptyList } from './EmptyList'
import { TaskList, TaskType } from './TaskList'
import styles from './Tasks.module.css'

interface TasksProps {
  tasks: TaskType[]
}

export function Tasks({ tasks }: TasksProps) {
  return (
    <div className={styles.tasks}>
      <header className={styles.info}>
        <div className={styles.infoCreated}>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div className={styles.infoDone}>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </header>
      {tasks.length === 0 ? <EmptyList /> : <TaskList tasks={tasks} />}
    </div>
  )
}