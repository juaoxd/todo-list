// import { EmptyList } from './EmptyList'
import { TaskList } from './TaskList'
import styles from './Tasks.module.css'

export function Tasks() {
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
      {/* <EmptyList /> */}
      <TaskList />
    </div>
  )
}