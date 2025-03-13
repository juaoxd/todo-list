import { PlusCircle } from 'phosphor-react'
import styles from './CreateTask.module.css'
import { TaskType } from './TaskList'
import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface CreateTaskProps {
  onCreateTask(task: TaskType): void
}

export function CreateTask({ onCreateTask }: CreateTaskProps) {
  const [title, setTitle] = useState('')

  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setTitle(event.target.value)
  }
  
  function handleCreateTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const task = {
      id: uuidv4(),
      title,
      isCompleted: false
    }
    
    onCreateTask(task)

    setTitle('')
  }


  return (
    <form onSubmit={handleCreateTask} className={styles.createTask} action="">
      <input type="text" placeholder='Adicione uma nova tarefa' value={title} onChange={handleTitleChange}/>
      <button type="submit">
        Criar
        <PlusCircle size={16}/>
      </button>
    </form>
  )
}