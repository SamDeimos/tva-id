import Image from "next/image"
import { ModeToggle } from "../components/ui/mode-toggle"

import CredentialTva from "../components/credential-tva"
import CredentialForm from "@/components/credential-form"
import Modal from "@/components/modal"
import CredentialOpenEditModal from "@/components/credential-open-edit-modal"

export default function HomePage() {
  return (
    <main>
      <div className="grid lg:grid-cols-5">
        <div className="hidden lg:block shadow-all">
          <div className="flex flex-col justify-between h-screen">
            <div className="flex justify-center mt-4">
              <Image src="/tva.svg" width={100} height={20} alt="logo-tva" />
            </div>
            <div>
              <CredentialForm />
            </div>
            <div>
              <ModeToggle />
            </div>
          </div>
        </div>
        <div className="col-span-3 overflow-hidden lg:col-span-4 lg:border-l border-primary">
          <CredentialTva />
        </div>
      </div>

      <Modal>
        <CredentialForm />
      </Modal>

      <CredentialOpenEditModal />

      <section className="hidden lg:block">
        <div className="absolute bottom-0 right-0">
          <Image
            src="/miss-minutes-1.png"
            width={250}
            height={20}
            alt="logo-tva"
          />
        </div>
      </section>
    </main>
  )
}
