import { Fragment } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { 
  Squares2X2Icon,
  BeakerIcon,
} from '@heroicons/react/24/outline'
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';

const navigation = [
  { 
    name: 'Dashboard', 
    href: '/dashboard', 
    icon: Squares2X2Icon
  },
  { 
    name: 'Workforce', 
    href: '/', 
    icon: BeakerIcon
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SlideOverPanel({ open, setOpen }) {
  const location = useLocation();

  // Function to check if a nav item is current
  const isCurrentRoute = (href) => {
    if (href === '/') {
      return location.pathname === '/' || ['/focus', '/expanded'].includes(location.pathname);
    }
    return location.pathname === href;
  };

  return (
    <Transition show={open} as={Fragment}>
      <Dialog className="relative z-50" onClose={setOpen}>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full border-r border-t border-SG-stroke">
              <TransitionChild
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-400"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-400"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-SG-bg-content py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <DialogTitle className="text-base font-semibold leading-6 text-SG-text-primary">
                          Safeguard Global
                        </DialogTitle>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-SG-bg-content text-SG-text-muted hover:text-SG-text-primary focus:outline-none focus:ring-2 focus:ring-SG-buttons-cta-primary"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                          <li>
                            <ul role="list" className="-mx-2 space-y-1">
                              {navigation.map((item) => {
                                const isCurrent = isCurrentRoute(item.href);
                                return (
                                  <li key={item.name}>
                                    <Link
                                      to={item.href}
                                      onClick={() => setOpen(false)}
                                      className={classNames(
                                        isCurrent
                                          ? 'bg-SG-stroke-active/10 text-SG-buttons-cta-primary'
                                          : 'text-SG-text-muted hover:bg-SG-bg-content-secondary hover:text-SG-buttons-cta-primary',
                                        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                      )}
                                    >
                                      <item.icon 
                                        className={classNames(
                                          isCurrent 
                                            ? 'text-SG-buttons-cta-primary' 
                                            : 'text-SG-text-muted group-hover:text-SG-buttons-cta-primary',
                                          'h-6 w-6 shrink-0'
                                        )} 
                                        aria-hidden="true" 
                                      />
                                      {item.name}
                                    </Link>
                                  </li>
                                );
                              })}
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