import { useState } from 'react';
import PropTypes from 'prop-types';
import { Switch } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Toggle({ label, enabled, setEnabled, screenReaderLabel = 'Use setting' }) {
  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? 'bg-SG-buttons-cta-primary' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-SG-buttons-cta-primary focus:ring-offset-2'
        )}
      >
        <span className="sr-only">{screenReaderLabel}</span>
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white border border-SG-stroke transition duration-200 ease-in-out'
          )}
        />
      </Switch>
      {label && <Switch.Label as="span" className="ml-3 text-sm">
        <span className="font-medium text-gray-900 dark:text-gray-100">{label}</span>
      </Switch.Label>}
    </Switch.Group>
  );
}

Toggle.propTypes = {
    label: PropTypes.string,
    enabled: PropTypes.bool.isRequired,
    setEnabled: PropTypes.func.isRequired,
    screenReaderLabel: PropTypes.string,
}; 