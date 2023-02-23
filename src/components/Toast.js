import React from 'react'
import TrashIcon from './icons/TrashIcon'
import styles from "../styles/Toast.module.css"
export default function Toast({message,eraseToastFromParent,type}) {
    const removeToast = ()=>{
        eraseToastFromParent()
    }
    return (
    <div className={type==='success'?styles.toastContainerSuccess:styles.toastContainerError}>
        <p className={styles.toastContainerText}>{message}</p>
        <button onClick={removeToast}>
        <TrashIcon />
        </button>
    </div>
  )
}
