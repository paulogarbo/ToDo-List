import styles from './TaskHeader.module.css'

export function TaskHeader() {
  return (
    <header className={styles.headerContent}>
      <aside>
        <p>Tarefas criadas</p>
        <span>0</span>
      </aside>
      <aside>
        <p>Concluídas</p>
        <span>0</span>
      </aside>
    </header>
  )
}