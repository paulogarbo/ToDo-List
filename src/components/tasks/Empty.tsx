import styles from './Empty.module.css'
import emptyNode from '../../assets/Clipboard.svg'

export function Empty() {
  return (
    <div className={styles.emptyContent}>
      <img src={emptyNode} alt="lista vazia" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}