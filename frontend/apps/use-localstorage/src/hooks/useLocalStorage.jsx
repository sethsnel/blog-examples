import { useState } from "react"

function useLocalStorage(key) {
  const [storedValue, setStoredValue] = useState(window.localStorage.getItem(key))

  const setValue = (value) => {
    setStoredValue(value)
    window.localStorage.setItem(key, value)
  }

  return [storedValue, setValue]
}

export default useLocalStorage
