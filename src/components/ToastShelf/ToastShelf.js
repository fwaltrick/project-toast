import React from 'react'
import { ToastContext } from '../ToastProvider'
import Toast from '../Toast'
import styles from './ToastShelf.module.css'

function ToastShelf({ handleDismiss }) {
  const { toasts } = React.useContext(ToastContext)

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast, i) => {
        return (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast
              id={toast.id}
              variant={toast.variant}
              handleDismiss={handleDismiss}
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
