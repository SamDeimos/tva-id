import { kebabCase } from "@/lib/utils"
import { toPng } from "html-to-image"

export default function useDownloadCredential(inputRef) {
  const htmlToImageConvert = () => {
    toPng(inputRef.current, { cacheBust: false })
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

  return { htmlToImageConvert }
}
