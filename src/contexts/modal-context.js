import { createContext, useContext, useState, useMemo } from "react"

export const ModalContext = createContext()

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false)

  function closeModal() {
    setShowModal(false)
  }

  function openModal() {
    setShowModal(true)
  }

  const values = useMemo(
    () => ({ showModal, closeModal, openModal }),
    [showModal]
  )

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  )
}

export function useModalContext() {
  const context = useContext(ModalContext)

  if (!context) {
    console.error("Error deploying App Context!!!")
  }

  return context
}

export default useModalContext
