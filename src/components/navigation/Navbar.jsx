import PropTypes from 'prop-types';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { 
  SunIcon, 
  MoonIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon 
} from '@heroicons/react/24/solid'
import CompanyLogo from '../ui/CompanyLogo';
import { useState } from 'react';
import CommandPalette from '../ui/CommandPalette';
import { useTheme } from '../../context/ThemeContext';

const userNavigation = [
  { type: 'theme' },
  { name: 'Your Profile', href: '#', icon: UserCircleIcon },
  { name: 'Settings', href: '#', icon: Cog6ToothIcon },
  { name: 'Sign out', href: '#', icon: ArrowRightOnRectangleIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ setIsSlideOverOpen, setIsNotificationPanelOpen }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const renderMenuItem = (item, focus) => {
    if (item.type === 'theme') {
      return (
        <button
          onClick={toggleTheme}
          className={classNames(
            focus ? 'bg-SG-bg-base100 dark:bg-SG-bg-base700' : '',
            'flex w-full items-center px-4 py-2 text-sm text-SG-text-primary'
          )}
        >
          {isDark ? (
            <>
              <SunIcon className="mr-3 h-5 w-5 text-SG-text-muted" aria-hidden="true" />
              Light Mode
            </>
          ) : (
            <>
              <MoonIcon className="mr-3 h-5 w-5 text-SG-text-muted" aria-hidden="true" />
              Dark Mode
            </>
          )}
        </button>
      );
    }
    return (
      <a
        href={item.href}
        className={classNames(
          focus ? 'bg-SG-bg-base100 dark:bg-SG-bg-base700' : '',
          'flex items-center px-4 py-2 text-sm text-SG-text-primary'
        )}
      >
        <item.icon className="mr-3 h-5 w-5 text-SG-text-muted" aria-hidden="true" />
        {item.name}
      </a>
    );
  };

  return (
    <>
      <CommandPalette 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      
      <Disclosure as="nav" className="bg-SG-bg-content shadow-sm dark:bg-SG-bg-base800 transition-colors duration-200">
        {({ open }) => (
          <>
            <div className="mx-auto px-4 sm:px-6 lg:px-8 border-b border-t border-SG-stroke dark:border-gray-700">
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
                      className="p-2 rounded-md text-SG-text-muted hover:text-SG-text-primary hover:bg-SG-bg-active focus:outline-none focus:ring-2 focus:ring-inset focus:ring-SG-buttons-cta-primary"
                    >
                      <span className="sr-only">Open sidebar</span>
                      <Bars3Icon className="h-6 w-6 text-SG-text-primary" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="flex shrink-0 items-center">
                    <CompanyLogo className="h-8 w-auto" />
                    <span className="ml-3 text-SG-text-primary">Safeguard Global</span>
                    <span className="text-SG-stroke ml-4">|</span>
                    <span className="ml-4 text-SG-text-primary">UI Demo</span>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(true)}
                    className="relative rounded-full bg-SG-bg-content p-1 text-gray-400 hover:text-SG-text-muted focus:outline-none focus:ring-2 focus:ring-SG-buttons-cta-primary focus:ring-offset-2"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (typeof setIsNotificationPanelOpen === 'function') {
                        setIsNotificationPanelOpen(true);
                      } else {
                        console.error('NAVBAR_ERROR: setIsNotificationPanelOpen is not a function when trying to open notification panel');
                      }
                    }}
                    className="relative ml-3 rounded-full bg-SG-bg-content p-1 text-gray-400 hover:text-SG-text-muted focus:outline-none focus:ring-2 focus:ring-SG-buttons-cta-primary focus:ring-offset-2"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex rounded-full bg-SG-bg-content text-sm focus:ring-offset-2 dark:bg-SG-bg-base800">
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
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-SG-bg-content py-1 shadow-lg transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-75 data-[leave]:ease-in border border-SG-stroke dark:bg-SG-bg-base800 dark:border-gray-700"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name || item.type}>
                          {({ focus }) => renderMenuItem(item, focus)}
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Menu>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-full bg-SG-bg-content p-1 text-gray-400 hover:bg-SG-bg-active hover:text-SG-text-muted focus:outline-none focus:ring-2 focus:ring-SG-brand-indigo focus:ring-offset-2">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="h-8 w-8 rounded-full"
                    />
                  </DisclosureButton>
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="flex items-center px-4">
                  <div className="ml-0">
                    <div className="text-base font-medium text-SG-text-primary">Tom Cook</div>
                    <div className="text-sm font-medium text-SG-text-muted">tom@example.com</div>
                  </div>
                  <div className="ml-auto flex space-x-3">
                    <button
                      type="button"
                      onClick={() => setIsSearchOpen(true)}
                      className="relative rounded-full bg-SG-bg-content p-1 text-gray-400 hover:text-SG-text-muted focus:outline-none focus:ring-2 focus:ring-SG-buttons-cta-primary focus:ring-offset-2"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (typeof setIsNotificationPanelOpen === 'function') {
                          setIsNotificationPanelOpen(true);
                        } else {
                          console.error('NAVBAR_ERROR: setIsNotificationPanelOpen is not a function when trying to open notification panel from mobile');
                        }
                      }}
                      className="relative rounded-full bg-SG-bg-content p-1 text-gray-400 hover:text-SG-text-muted focus:outline-none focus:ring-2 focus:ring-SG-buttons-cta-primary focus:ring-offset-2"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  {userNavigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block px-4 py-2 text-base font-medium text-SG-text-muted hover:bg-SG-bg-base100 hover:text-SG-text-primary"
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
    </>
  )
}

Navbar.propTypes = {
  setIsSlideOverOpen: PropTypes.func.isRequired,
  setIsNotificationPanelOpen: PropTypes.func.isRequired,
}; 