import { Trash } from "phosphor-react";

import styles from './Task.module.css'

interface TaskProps {
  title: string
  isCompleted: boolean
}

export function Task(props: TaskProps) {
  return (
    <div className={styles.task}>
        <div>
          {/* TODO
            - Add check icon when task is checked
            - Fix cannot check/uncheck tasks
          */}
          <input type="checkbox" name="" id="" checked={props.isCompleted} />
          <p>{props.title}</p>
        </div>
        <button>
          <Trash size={20}/>
        </button>
    </div>
  )
}