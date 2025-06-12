import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
} from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

export default function DatePicker({ selectedDate, onDateChange }) {
  const [currentMonth, setCurrentMonth] = useState(selectedDate || new Date());

  const firstDayOfMonth = startOfMonth(currentMonth);
  const lastDayOfMonth = endOfMonth(currentMonth);

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(firstDayOfMonth),
    end: endOfWeek(lastDayOfMonth),
  });

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDayClassName = (day) => {
    const baseClasses = 'mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm';
    if (!isSameMonth(day, currentMonth)) {
      return `${baseClasses} text-gray-400 dark:text-gray-500`;
    }
    if (isSameDay(day, selectedDate)) {
      return `${baseClasses} bg-SG-buttons-cta-primary text-white font-semibold`;
    }
    if (isToday(day)) {
      return `${baseClasses} bg-gray-200 dark:bg-gray-700 text-SG-buttons-cta-primary font-semibold`;
    }
    return `${baseClasses} hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white`;
  };

  return (
    <div className="w-full max-w-sm rounded-lg bg-white p-4 border border-SG-stroke dark:bg-gray-800">
      <div className="flex items-center justify-between">
        <button
          onClick={prevMonth}
          type="button"
          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <div className="font-semibold text-gray-900 dark:text-white">
          {format(currentMonth, 'MMMM yyyy')}
        </div>
        <button
          onClick={nextMonth}
          type="button"
          className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-6 grid grid-cols-7 text-center text-xs leading-6 text-gray-500 dark:text-gray-400">
        {weekDays.map(day => <div key={day}>{day}</div>)}
      </div>
      <div className="mt-2 grid grid-cols-7 text-sm">
        {daysInMonth.map((day, dayIdx) => (
          <div key={day.toString()} className="py-1.5">
            <button
              type="button"
              onClick={() => onDateChange(day)}
              className={getDayClassName(day)}
              disabled={!isSameMonth(day, currentMonth)}
            >
              <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

DatePicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  onDateChange: PropTypes.func.isRequired,
}; 