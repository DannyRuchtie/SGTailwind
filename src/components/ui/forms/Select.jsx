import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

export default function Select({ label, name, options, value, onChange, disabled = false, error = '' }) {
  // If no value is provided, default to the first option
  const [selected, setSelected] = useState(value || (options.length > 0 ? options[0].value : ''));

  const handleSelection = (selectedValue) => {
    setSelected(selectedValue);
    if (onChange) {
      // Create a synthetic event object to mimic a native select's onChange
      const event = {
        target: {
          name,
          value: selectedValue,
        },
      };
      onChange(event);
    }
  };

  const selectedOption = options.find(option => option.value === selected);

  return (
    <div className="w-full max-w-xs">
      <Listbox value={selected} onChange={handleSelection} disabled={disabled} name={name}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700 dark:text-gray-300">{label}</Listbox.Label>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 border border-SG-stroke focus:outline-none focus:ring-2 focus:ring-SG-buttons-cta-primary sm:text-sm sm:leading-6 dark:bg-gray-800 dark:text-white dark:ring-gray-600">
                <span className="block truncate">{selectedOption ? selectedOption.label : 'Select an option'}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base border border-SG-stroke focus:outline-none sm:text-sm dark:bg-gray-800">
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.value}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-8 pr-4 ${
                          active ? 'bg-SG-buttons-cta-primary text-white' : 'text-gray-900 dark:text-white'
                        }`
                      }
                      value={option.value}
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                            {option.label}
                          </span>

                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-1.5 ${
                                active ? 'text-white' : 'text-SG-buttons-cta-primary'
                              }`}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
             {error && <p className="mt-2 text-sm text-red-600 dark:text-SG-state-error">{error}</p>}
          </>
        )}
      </Listbox>
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
}; 