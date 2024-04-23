import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/search/Input'
// import { Empty } from './components/tasks/Empty'
import { Task } from './components/tasks/Task'
import { TaskHeader } from './components/tasks/TaskHeader'

export function App() {
  return (
    <section className={styles.contentWrapper}>
      <Header/>
      <div className={styles.tasksWrapper}>
        <Input />
        <div className={styles.tasksContent}>
          <TaskHeader/>
          <div>
            <Task/>
            {/* <Empty/> */}
          </div>
        </div>
      </div>
    </section>
  )
}