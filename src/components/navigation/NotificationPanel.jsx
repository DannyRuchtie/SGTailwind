'use client'

import PropTypes from 'prop-types';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function NotificationPanel({ isOpen, setIsOpen }) {
  return (
    <Transition show={isOpen}>
      <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
        {/* No separate backdrop overlay for this one, it slides over */}
        <TransitionChild
          enter="transform transition ease-in-out duration-300 sm:duration-400"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-300 sm:duration-400"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <DialogPanel className="pointer-events-auto fixed inset-y-0 right-0 flex h-full w-screen max-w-md flex-col overflow-y-scroll bg-white py-6 shadow-xl  border-l border-t border-SG-stroke">
            <div className="px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <DialogTitle className="text-lg font-semibold text-SG-text-primary">Notifications</DialogTitle>
                <div className="ml-3 flex h-7 items-center">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="relative rounded-md bg-white text-SG-text-muted hover:text-SG-text-primary focus:ring-2 focus:ring-SG-buttons-cta-primary focus:ring-offset-2 focus:outline-none"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
              </div>
            </div>
            <div className="relative mt-6 flex-1 px-4 sm:px-6">
              {/* Replace with your actual notification content */}
              <div className="h-full rounded-lg border-2 border-dashed border-SG-stroke p-4">
                <p className="text-center text-SG-text-secondary">No new notifications.</p>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  )
}

NotificationPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
}; 