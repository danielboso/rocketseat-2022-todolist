import style from './Checkbox.module.css'
import { Check } from 'phosphor-react';
import { useId } from 'react'

interface Props {
  isCompleted: boolean;
  taskId: number;
  onClick: Function;
}

export function Checkbox({ isCompleted, taskId, onClick }: Props) {
  const id = useId();
  return (
    <>
      <input className={style.input} onChange={(event) => onClick(taskId, event.target.checked)} type="checkbox" name="checkbox" checked={isCompleted} id={id} value="value" hidden />
      <label className={style.labelCheck} htmlFor={id}>
        <div className={style.checkContainer}>
          { isCompleted && <Check size={16} /> }
        </div>
      </label>
    </>
  )
}