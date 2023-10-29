"use client"

import Image from "next/image"
import { ModeToggle } from "../components/ui/mode-toggle"

// import * as htmlToImage from "html-to-image"
import CredentialTva from "../components/credential-tva"
import CredentialForm from "@/components/credential-form"

export default function HomePage() {
  return (
    <main>
      <nav className="fixed flex justify-between w-full px-4 py-2">
        {/* img */}

        {/* Menu */}
        {/* <div>
          <ModeToggle />
        </div> */}
      </nav>

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

      <section className="hidden md:block">
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
