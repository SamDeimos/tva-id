"use client"
import { Button } from "./ui/button"
import useModalContext from "@/contexts/modal-context"

export default function CredentialOpenEditModal() {
  const { openModal } = useModalContext()
  return (
    <section className="lg:hidden">
      <div className="absolute bottom-10 right-10">
        <Button onClick={openModal}>Edit my credential</Button>
      </div>
    </section>
  )
}
