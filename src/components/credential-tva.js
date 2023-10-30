"use client"

import Image from "next/image"
import { useRef } from "react"
import { Button } from "./ui/button"
import CredentialTvaItem from "./credential-tva-item"
import useUserContext from "@/contexts/user-context"
import { cn } from "@/lib/utils"

import styles from "./credential-tva.module.css"
import Link from "next/link"
import useDownloadCredential from "@/hooks/use-download-credential"
import useRotateCredential from "@/hooks/use-rotate-credential"

export default function CredentialTva() {
  const buyMeACoffie = process.env.NEXT_PUBLIC_BUYMEACOFFEELINK

  const inputRef = useRef()
  const glowRef = useRef()

  const { name, idNumber, imageBase64 } = useUserContext()
  const { htmlToImageConvert } = useDownloadCredential(inputRef)
  const { rotateToMouse, rotateToTouch, removeListener } = useRotateCredential(
    inputRef,
    glowRef
  )

  return (
    <div>
      <header
        className="flex flex-col items-center justify-center flex-grow flex-shrink h-screen "
        style={{ perspective: "1500px" }}
      >
        {/* Credential Card */}
        <div
          className={cn(
            "relative w-11/12 md:w-1/2 p-4 bg-white aspect-[3.5/2] border border-primary rounded-md shadow-all card",
            styles.card
          )}
          onMouseLeave={removeListener}
          onMouseMove={rotateToMouse}
          onTouchEnd={removeListener}
          onTouchMove={rotateToTouch}
          ref={inputRef}
        >
          <div className="h-full border-4 border-blue-900 rounded">
            {/* blue */}
            <div className="bg-blue-900 h-1/2">
              <h2 className="text-sm font-medium text-center text-white md:text-base lg:text-lg xl:text-2xl">
                TIME VARIANCE AUTHORITY
              </h2>
              <div className="flex h-[70%] md:h-[65%] xl:h-[80%] space-x-4 md:space-x-2">
                <div className="relative w-[20%] h-full">
                  <Image
                    className="object-contain xl:p-2"
                    alt="time-variance-authority"
                    src={"/time-variance-authority.png"}
                    fill
                  />
                </div>
                <div className="relative w-[40%] h-full">
                  <Image
                    alt="tva"
                    src={"/tva.svg"}
                    className="object-contain w-full h-full"
                    fill
                  />
                </div>
                <div className="absolute w-[20%] aspect-[3/4] right-8 xl:right-10">
                  <Image
                    alt="image-agent"
                    src={`${imageBase64 || "/Mobius_M._Mobius.webp"}`}
                    className="w-full h-full sepia-[30%] object-cover"
                    fill
                  />
                </div>
              </div>
            </div>

            {/* white */}
            <div className="flex justify-between w-full px-3 text-black md:px-2 lg:px-3 h-1/2">
              <div className="flex-1 space-y-[0.9] xl:space-y-3 md:pt-1">
                <CredentialTvaItem label="Name">{name}</CredentialTvaItem>

                <CredentialTvaItem label="Rank">
                  Special Agent
                </CredentialTvaItem>

                <CredentialTvaItem label="ID Number">
                  {idNumber}
                </CredentialTvaItem>
              </div>
              <div className="flex items-end flex-1 h-full">
                <div className="relative w-full mb-2 border border-black rounded xl:border-2 h-7 xl:mb-4 xl:h-12 md:h-8 lg:h-8">
                  <span className="absolute top-0 text-[0.40rem] md:text-[0.50rem] xl:text-xs text-blue-900 left-1">
                    Signature
                  </span>
                  <div className="pl-1 xl:pt-4 xl:pl-2 md:pt-1">
                    <span className="text-[0.70rem] xl:text-xl font-signature">
                      {name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={glowRef} className={styles.glow} />
        </div>
        <div className="flex w-full px-2 mt-6 space-x-6 md:px-48 ">
          <Button className="w-full" onClick={htmlToImageConvert}>
            Download
          </Button>
          <Button variant="outline" className="w-full ">
            <Link href={buyMeACoffie}>
              <span className="mr-2 text-lg">🍰</span>
              Buy me a lemon pie
            </Link>
          </Button>
        </div>

        {/* Formulario */}
        {/* <div className="w-1/2 p-8 border rounded-xl border-primary shadow-all">
      <div className="space-y-5">
        <Input type="text" placeholder="Agent Name" />
        <Input type="email" placeholder="Email" />
        <Button className="w-full">Generate</Button>
      </div>
    </div> */}
      </header>
    </div>
  )
}
