import { useState } from "react"

function PersistentInput() {
  const [inputValue, setValue] = useLocalStorage()

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setValue(e.currentTarget.value)}
    />
  )
}

function useLocalStorage(key) {
  const [storedValue, setStoredValue] = useState(window.localStorage.getItem(key))

  const setValue = (value) => {
    setStoredValue(value)
    window.localStorage.setItem(key, value)
  }

  return [storedValue, setValue]
}

export default PersistentInput
