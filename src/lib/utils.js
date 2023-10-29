import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function capitalize(word) {
  return word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : ""
}

export function kebabCase(string) {
  return string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase()
}

export const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onload = () => {
      resolve(fileReader.result)
    }

    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}
