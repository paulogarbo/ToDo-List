import { CirclePlus } from 'lucide-react'
import styles from './Button.module.css'

export function Button(): React.ReactElement {
  return (
    <button 
      className={styles.submit}>
        <strong>Criar</strong>
        <CirclePlus size={16 }/>
    </button>
  )
}