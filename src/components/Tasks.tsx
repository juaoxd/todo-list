import { EmptyList } from './EmptyList'
import { TaskList, TaskType } from './TaskList'
import styles from './Tasks.module.css'

interface TasksProps {
  tasks: TaskType[],
  onDeleteTask(task: string): void
}

export function Tasks({ tasks, onDeleteTask }: TasksProps) {
  return (
    <div className={styles.tasks}>
      <header className={styles.info}>
        <div className={styles.infoCreated}>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.infoDone}>
          <p>Concluídas</p>
          <span>{tasks.length === 0 ? 0 : `${0} de ${tasks.length}`}</span>
        </div>
      </header>
      {tasks.length === 0 ? <EmptyList /> : <TaskList tasks={tasks} onDeleteTask={onDeleteTask} />}
    </div>
  )
}