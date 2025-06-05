import { Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import PropTypes from 'prop-types'

export default function Alert({ show, setShow, title, message, actions }) {
  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-start px-4 py-6 sm:p-6"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        <Transition
          show={show}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="pointer-events-auto w-full max-w-xl overflow-hidden rounded-lg bg-SG-bg-content shadow-lg">
            <div className="border-l-4 border-SG-state-warning p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ExclamationTriangleIcon className="h-5 w-5 text-SG-state-warning" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-800">{title}</h3>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>{message}</p>
                  </div>
                  {actions && (
                    <div className="mt-4">
                      <div className="-mx-2 -my-1.5 flex">
                        <button
                          type="button"
                          className="rounded-md bg-SG-bg-content px-2 py-1.5 text-sm font-medium text-SG-state-warning hover:bg-SG-state-warning/10 focus:outline-none focus:ring-2 focus:ring-SG-state-warning focus:ring-offset-2"
                        >
                          View status
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div className="ml-auto pl-3">
                  <div className="-mx-1.5 -my-1.5">
                    <button
                      type="button"
                      className="inline-flex rounded-md p-1.5 text-gray-400 hover:bg-SG-bg-base100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-SG-buttons-cta-primary"
                      onClick={() => setShow(false)}
                    >
                      <span className="sr-only">Dismiss</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}

Alert.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  actions: PropTypes.bool,
}

Alert.defaultProps = {
  actions: false,
} 