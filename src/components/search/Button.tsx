import { CirclePlus } from 'lucide-react'
import './Button.module.css'

export function Button() {
  return (
    <button>
      <strong>Criar</strong>
      <CirclePlus size={16 }/>
    </button>
  )
}