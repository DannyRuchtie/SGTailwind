import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon, InformationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '../buttons/Button';

const variants = {
  danger: {
    icon: ExclamationTriangleIcon,
    iconColor: 'text-SG-state-error',
    iconBgColor: 'bg-red-100',
    buttonVariant: 'danger',
  },
  warning: {
    icon: ExclamationTriangleIcon,
    iconColor: 'text-SG-state-warning',
    iconBgColor: 'bg-yellow-100',
    buttonVariant: 'warning',
  },
  success: {
    icon: CheckCircleIcon,
    iconColor: 'text-SG-state-success',
    iconBgColor: 'bg-green-100',
    buttonVariant: 'success',
  },
  info: {
    icon: null,
    iconColor: '',
    iconBgColor: '',
    buttonVariant: 'primary',
  },
};

export default function ConfirmationModal({ 
  open, 
  setOpen, 
  title, 
  message, 
  confirmText, 
  onConfirm,
  variant = 'danger'
}) {
  const { icon: Icon, iconColor, iconBgColor, buttonVariant } = variants[variant];
  
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-SG-bg-content px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="sm:flex sm:items-start">
                  {Icon && (
                    <div className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${iconBgColor} sm:mx-0 sm:h-10 sm:w-10`}>
                      <Icon className={`h-6 w-6 ${iconColor}`} aria-hidden="true" />
                    </div>
                  )}
                  <div className={`mt-3 text-center sm:text-left ${Icon ? 'sm:ml-4 sm:mt-0' : ''}`}>
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-SG-text-primary">
                      {title}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">{message}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <Button
                    variant={buttonVariant}
                    onClick={() => {
                      onConfirm();
                      setOpen(false);
                    }}
                  >
                    {confirmText}
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => setOpen(false)}
                    className="sm:mr-3 mt-3 sm:mt-0"
                  >
                    Cancel
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

ConfirmationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  confirmText: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['danger', 'warning', 'success', 'info']),
}; 