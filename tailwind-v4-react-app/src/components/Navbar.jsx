import PropTypes from 'prop-types';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import CompanyLogo from './CompanyLogo';

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ setIsSlideOverOpen, setIsNotificationPanelOpen }) {
  // Simplified diagnostic log in Navbar.jsx
  console.log("NAVBAR_DEBUG: typeof setIsSlideOverOpen:", typeof setIsSlideOverOpen);
  console.log("NAVBAR_DEBUG: typeof setIsNotificationPanelOpen:", typeof setIsNotificationPanelOpen);

  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8 border-b border-SG-stroke">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex items-center mr-4">
                  <button
                    type="button"
                    onClick={() => {
                      if (typeof setIsSlideOverOpen === 'function') {
                        setIsSlideOverOpen(true);
                      } else {
                        console.error('NAVBAR_ERROR: setIsSlideOverOpen is not a function when trying to open main menu');
                      }
                    }}
                    className="p-2 rounded-md text-SG-text-muted hover:text-SG-text-primary hover:bg-SG-brand-neutral focus:outline-none focus:ring-2 focus:ring-inset focus:ring-SG-buttons-cta-primary"
                  >
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon className="h-6 w-6 text-SG-text-primary" aria-hidden="true" />
                  </button>
                </div>
                <div className="flex shrink-0 items-center">
                  <CompanyLogo className="h-8 w-auto" />
                  <span className="ml-3 text-SG-text-primary">Safeguard Global</span> <span className=' text-SG-stroke ml-4'>|</span>
                  <span className="ml-4 text-SG-text-primary">UI Demo</span>
                </div>
                {/* Main navigation links removed */}
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <button
                  type="button"
                  onClick={() => {
                    if (typeof setIsNotificationPanelOpen === 'function') {
                      setIsNotificationPanelOpen(true);
                    } else {
                      console.error('NAVBAR_ERROR: setIsNotificationPanelOpen is not a function when trying to open notification panel');
                    }
                  }}
                  className="relative rounded-full bg-white p-1 text-gray-400 hover:text-SG-text-muted focus:outline-none focus:ring-2 focus:ring-SG-buttons-cta-primary focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3 ">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-white text-sm  focus:ring-offset-2">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="h-8 w-8 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-75 data-[leave]:ease-in border border-SG-stroke"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        {({ focus }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              focus ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-SG-text-primary'
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-SG-text-muted focus:outline-none focus:ring-2 focus:ring-SG-brand-indigo focus:ring-offset-2">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 data-[open]:hidden group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 data-[open]:block group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            {/* Mobile navigation links removed */}
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-4">
                <div className="shrink-0">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-SG-text-primary">Tom Cook</div>
                  <div className="text-sm font-medium text-SG-text-muted">tom@example.com</div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (typeof setIsNotificationPanelOpen === 'function') {
                      setIsNotificationPanelOpen(true);
                    } else {
                      console.error('NAVBAR_ERROR: setIsNotificationPanelOpen is not a function when trying to open notification panel from mobile');
                    }
                  }}
                  className="relative ml-auto shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-SG-text-muted focus:outline-none focus:ring-2 focus:ring-SG-brand-indigo focus:ring-offset-2"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                {userNavigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block px-4 py-2 text-base font-medium text-SG-text-muted hover:bg-gray-100 hover:text-SG-text-primary"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

Navbar.propTypes = {
  setIsSlideOverOpen: PropTypes.func.isRequired,
  setIsNotificationPanelOpen: PropTypes.func.isRequired,
}; 