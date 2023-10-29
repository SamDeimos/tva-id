"use client"
import { Input } from "./ui/input"
import useUserContext from "@/contexts/user-provider"
import { convertBase64 } from "@/lib/utils"

export default function CredentialForm() {
  const { setName, setIdNumber, setImageBase64 } = useUserContext()

  const handlerFile = async (e) => {
    const file = event.target.files[0]
    const base64 = await convertBase64(file)
    setImageBase64(base64)
  }

  return (
    <div className="px-2 space-y-2">
      <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <Input
        placeholder="ID Number"
        maxLength="12"
        onChange={(e) => setIdNumber(e.target.value)}
      />
      <Input type="file" onChange={(e) => handlerFile(e)} />
    </div>
  )
}
