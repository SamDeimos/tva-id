import { createContext, useContext, useMemo, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("")
  const [idNumber, setIdNumber] = useState("")
  const [imageBase64, setImageBase64] = useState("")

  const values = useMemo(
    () => ({
      name,
      idNumber,
      imageBase64,
      setName,
      setIdNumber,
      setImageBase64,
    }),
    [name, idNumber, imageBase64]
  )

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export function useUserContext() {
  const context = useContext(UserContext)

  if (!context) {
    console.error("Error deploying App Context!!!")
  }

  return context
}

export default useUserContext
