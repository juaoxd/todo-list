import { useState } from 'react'
import { CreateTask } from './components/CreateTask'
import { Header } from './components/Header'
import { TaskType } from './components/TaskList'
import { Tasks } from './components/Tasks'
import './global.css'

export function App() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  function createTask(task: TaskType) {
    setTasks(state => {
      return [...state, task]
    })
  }

  function deleteTask(taskToDeleteId: string) {
    const tasksWithoutDeleted = tasks.filter(task => task.id !== taskToDeleteId)

    setTasks(tasksWithoutDeleted)
  }

  return (
   <div>
    <Header />
    <CreateTask onCreateTask={createTask} />
    <Tasks tasks={tasks} onDeleteTask={deleteTask} />
   </div>
  )
}

