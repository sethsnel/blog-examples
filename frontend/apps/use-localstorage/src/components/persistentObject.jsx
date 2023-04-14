import { useState } from "react"

function PersistentForm() {
  const [formValue, setValue] = useLocalStorage("contact-form")

  const updateFormState = (e) => {
    setValue({
      ...formValue,
      [e.name]: e.value
    })
  }

  return (
    <>
      <input
        type="text"
        name="callingName"
        className="mb-3"
        value={formValue?.callingName ?? ""}
        onChange={(e) => updateFormState(e.currentTarget)}
      />
      <input
        type="text"
        name="lastName"
        value={formValue?.lastName ?? ""}
        onChange={(e) => updateFormState(e.currentTarget)}
      />
    </>
  )
}

function useLocalStorage(key) {
  const [storedValue, setStoredValue] = useState(
      JSON.parse(window.localStorage.getItem(key))
  )

  const setValue = (value) => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue]
}

export default PersistentForm
