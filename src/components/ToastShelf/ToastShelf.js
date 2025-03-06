import React from 'react'

import Toast from '../Toast'
import styles from './ToastShelf.module.css'

function ToastShelf({ toasts, onDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, i) => {
        return (
          <li className={styles.toastWrapper} key={i}>
            <Toast
              variant={toast.variant}
              handleDismiss={() => onDismiss(toast.id)}
            >
              {toast.message}
            </Toast>
          </li>
        )
      })}

      {/* <li className={styles.toastWrapper}>
        <Toast variant="notice">Example notice toast</Toast>
      </li>
      <li className={styles.toastWrapper}>
        <Toast variant="error">Example error toast</Toast>
      </li> */}
    </ol>
  )
}

export default ToastShelf
