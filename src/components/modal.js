"use client"

import useModalContext from "@/contexts/modal-context"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { Button } from "./ui/button"

export default function Modal({ title, description, children }) {
  const { showModal, closeModal } = useModalContext()

  return (
    <Transition appear show={showModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl dark:bg-black rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium leading-6 text-gray-900 dark:text-white"
                >
                  {title}
                </Dialog.Title>
                <Dialog.Description className="pb-3 text-sm text-gray-500">
                  {description}
                </Dialog.Description>

                {children}

                <div className="flex justify-end px-2 mt-4">
                  <Button
                    onClick={(e) => {
                      e.preventDefault()
                      closeModal()
                    }}
                  >
                    Go it
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
