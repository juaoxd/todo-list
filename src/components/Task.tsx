import { Trash } from "phosphor-react";

import styles from './Task.module.css'
import { useState } from "react";

interface TaskProps {
  title: string
  isCompleted: boolean
}

export function Task(props: TaskProps) {
  const [isChecked, setIsChecked] = useState(props.isCompleted)

  function toggleCompletion() {
    setIsChecked(state => {
      return !state
    })
  }

  return (
    <div className={styles.task}>
        <div>
          {/* TODO
            - Add check icon when task is checked
          */}
          <input type="checkbox" name="" id="" checked={isChecked} onClick={toggleCompletion} />
          <p>{props.title}</p>
        </div>
        <button>
          <Trash size={20}/>
        </button>
    </div>
  )
}