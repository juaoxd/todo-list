import clipboard from '../assets/clipboard-image.svg'
import styles from './EmptyList.module.css'

export function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <img src={clipboard} alt="Clipboard image" />
      <p>
        Você ainda não tem tarefas cadastradas
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  )
}