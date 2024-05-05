import styles from './TaskHeader.module.css'

interface ITaskHeader {
  numOfTasks: number;
}

export function TaskHeader({numOfTasks}: ITaskHeader) {
  return (
    <header className={styles.headerContent}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{numOfTasks}</span>
      </aside>
      <aside>
        <p>Concluídas</p>
        <span>0</span>
      </aside>
    </header>
  )
}