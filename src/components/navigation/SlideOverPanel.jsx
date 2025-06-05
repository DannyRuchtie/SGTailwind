import { Fragment } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'UI Demo', href: '#', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SlideOverPanel({ open, setOpen }) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog className="relative z-50" onClose={setOpen}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-ful border-r border-t border-SG-stroke">
              <TransitionChild
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-400"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-400"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <DialogPanel className="pointer-events-auto relative w-screen max-w-md">
                  <div className="absolute top-0 right-0 flex pt-4 pr-4">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="relative rounded-md text-SG-text-muted hover:text-SG-text-primary focus:outline-none focus:ring-2 focus:ring-SG-buttons-cta-primary"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="flex h-full flex-col overflow-y-scroll bg-SG-bg-content py-6 shadow-xl">
                    <div className="px-4 sm:px-6 pt-10">
                      <DialogTitle className="text-base font-semibold leading-6 text-SG-text-primary">
                        Navigation
                      </DialogTitle>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                          <li>
                            <ul role="list" className="-mx-2 space-y-1">
                              {navigation.map((item) => (
                                <li key={item.name}>
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      item.current
                                        ? 'bg-SG-bg-active text-SG-buttons-cta-primary'
                                        : 'text-SG-text-muted hover:bg-SG-brand-neutral hover:text-SG-buttons-cta-primary',
                                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                          {/* Additional navigation sections can go here */}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

SlideOverPanel.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}; 