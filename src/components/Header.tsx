import styles from './Header.module.css'
import todoListLogo from '../assets/todo-list-logo.svg'

export function Header() {
  return (
    <div className={styles.header}>
      <img src={todoListLogo} alt="Logo" />
    </div>
  )
}