import React from 'react'
import useKeydown from '../../hooks/useKeydown'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const handleEscape = React.useCallback(() => {
    setToasts([])
  }, [])

  useKeydown('Escape', handleEscape)

  function createToast(variant, message) {
    const nextToasts = [
      ...toasts,
      { id: crypto.randomUUID(), variant, message },
    ]
    setToasts(nextToasts)
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id
    })
    setToasts(nextToasts)
  }

  return (
    <ToastContext.Provider
      value={{ toasts, setToasts, createToast, dismissToast }}
    >
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider
