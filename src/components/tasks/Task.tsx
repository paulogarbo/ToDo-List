import { useState } from 'react'
import styles from './Task.module.css'
import { Trash2, Check, Bold } from 'lucide-react'
import * as Checkbox from '@radix-ui/react-checkbox'

export function Task() {
  const [ checked, setChecked ] = useState(false)

  function handleChangeChecked() {
    if (checked) {
      setChecked(false)
      return
    }
    setChecked(true)
  }

  return (
    <section className={styles.container}>
      <div>
        <Checkbox.Root className={checked ? styles.checkedBox : styles.checkBox} onClick={handleChangeChecked}>
          <span>
            <Check className={styles.vetor}/>
          </span>
        </Checkbox.Root>
        <p>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </p>
        <button className={styles.removeTask}>
          <Trash2 size={18}/>
        </button>
      </div>
    </section>
  )
}