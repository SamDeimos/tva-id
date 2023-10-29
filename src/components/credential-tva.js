import Image from "next/image"
import { useRef } from "react"
import { toPng } from "html-to-image"
import { Button } from "./ui/button"
import CredentialTvaItem from "./credential-tva-item"
import useUserContext from "@/contexts/user-provider"
import { kebabCase } from "@/lib/utils"

export default function CredentialTva() {
  const { name, idNumber, imageBase64 } = useUserContext()

  const elementRef = useRef(null)

  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a")
        link.download = `special-agent-${kebabCase(name)}.png`
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <header className="flex flex-col items-center justify-center flex-grow flex-shrink h-screen">
      {/* Credential Card */}
      <div
        className="relative w-11/12 md:w-1/2 p-4 bg-white aspect-[3.5/2] border border-primary rounded-md shadow-all"
        ref={elementRef}
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
                  className="xl:p-2"
                  alt="time-variance-authority"
                  src={"/time-variance-authority.png"}
                  fill
                  objectFit="contain"
                />
              </div>
              <div className="relative w-[40%] h-full">
                <Image
                  alt="tva"
                  src={"/tva.svg"}
                  className="w-full h-full"
                  fill
                  objectFit="contain"
                />
              </div>
              <div className="absolute w-[20%] aspect-[3/4] right-8 xl:right-10">
                <Image
                  alt="image-agent"
                  src={`${imageBase64 || "/image-agent.png"}`}
                  className="w-full h-full sepia-[30%]"
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          {/* Imagen */}
          {/* <div className="absolute top-[16%] right-10 bg-red-300 aspect-[3/4] w-40">
            <Image
              src={"/sam-7.png"}
              className="w-full h-full"
              layout="fill"
              objectFit="cover"
              //   sizes="100vw"
            />
          </div> */}
          {/* white */}
          <div className="flex justify-between w-full px-3 text-black md:px-2 lg:px-3 h-1/2">
            <div className="flex-1 space-y-[0.9] xl:space-y-3 md:pt-1">
              <CredentialTvaItem label="Name">{name}</CredentialTvaItem>

              <CredentialTvaItem label="Rank">Special Agent</CredentialTvaItem>

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
      </div>
      <div className="mt-4">
        <Button className="w-full" onClick={htmlToImageConvert}>
          Download
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
  )
}
