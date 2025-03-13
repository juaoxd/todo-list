import { Trash } from "phosphor-react";

import styles from './Task.module.css'
import { useState } from "react";

interface TaskProps {
  id: string
  title: string
  isCompleted: boolean
  onDeleteTask(id: string): void
}

export function Task({ id, title, isCompleted, onDeleteTask }: TaskProps) {
  const [isChecked, setIsChecked] = useState(isCompleted)

  function toggleCompletion() {
    setIsChecked(state => {
      return !state
    })
  }

  function handleDeleteTask() {
    onDeleteTask(id)
  }

  return (
    <div className={styles.task}>
        <div>
          {/* TODO
            - Add check icon when task is checked
          */}
          <input type="checkbox" name="" id="" defaultChecked={isChecked} onClick={toggleCompletion} />
          <p>{title}</p>
        </div>
        <button onClick={handleDeleteTask}>
          <Trash size={20}/>
        </button>
    </div>
  )
}