import React from 'react'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setToasts([])
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [toasts])

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
