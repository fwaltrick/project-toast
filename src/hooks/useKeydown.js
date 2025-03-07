import React from 'react'

function useKeydown(key, callback) {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === key) {
        callback(event) // Call the provided callback function
      }
    }
    // Add the event listener
    document.addEventListener('keydown', handleKeyDown)

    // Remove the event listener on cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [callback]) // Re-run effect if the callback changes
}

export default useKeydown
