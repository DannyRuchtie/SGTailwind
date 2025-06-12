import { useState } from 'react';

// Data Display
import Avatar from '../ui/data-display/Avatar';
import AvatarList from '../ui/data-display/AvatarList';
import Badge from '../ui/data-display/Badge';
import ProgressBar from '../ui/data-display/ProgressBar';
import Spinner from '../ui/data-display/Spinner';
import Table from '../ui/data-display/Table';
import Tooltip from '../ui/data-display/Tooltip';

// Feedback
import AlertBanner from '../ui/feedback/AlertBanner';

// Forms
import Checkbox from '../ui/forms/Checkbox';
import Input from '../ui/forms/Input';
import Radio from '../ui/forms/Radio';
import RangeSlider from '../ui/forms/RangeSlider';
import Select from '../ui/forms/Select';
import Textarea from '../ui/forms/Textarea';
import Toggle from '../ui/forms/Toggle';
import DatePicker from '../ui/forms/DatePicker';

// Navigation
import Breadcrumb from '../ui/navigation/Breadcrumb';
import Pagination from '../ui/navigation/Pagination';

// Overlays
import Accordion from '../ui/data-display/Accordion';
import Dropdown from '../ui/overlays/Dropdown';
import ConfirmationModal from '../ui/overlays/ConfirmationModal';
import WorkerListItem from '../ui/list/WorkerListItem';
import ListEmptyState from '../ui/list/ListEmptyState';

// Existing Components
import Button from '../ui/buttons/Button.jsx';
import SearchInput from '../ui/SearchInput';
import Notification from '../ui/Notification';
import Tabs from '../navigation/Tabs';
import { DialogTitle } from '@headlessui/react'
import { ArrowDownTrayIcon, PlusIcon } from '@heroicons/react/16/solid'
import MultiColumnLayoutShowcase from '../ui/layout/MultiColumnLayoutShowcase';


const ComponentSection = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">{title}</h2>
    <div className="space-y-6">{children}</div>
  </section>
);

const ComponentWrapper = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-3">{title}</h3>
    <div className="p-6 bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 flex items-start gap-6 flex-wrap">
        {children}
    </div>
  </div>
);

export default function ComponentShowcase() {
    const [sliderValue, setSliderValue] = useState(50);
    const [toggleEnabled, setToggleEnabled] = useState(false);
    const [modalState, setModalState] = useState({ open: false, variant: 'danger' });
    const [checkboxStates, setCheckboxStates] = useState({ terms: false, newsletter: true });
    const [radioValue, setRadioValue] = useState('email');
    const [showNotification, setShowNotification] = useState(false);
    const [activeTab, setActiveTab] = useState('team');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedWorker, setSelectedWorker] = useState(1);

    const handleCheckboxChange = (e) => {
        setCheckboxStates({ ...checkboxStates, [e.target.name]: e.target.checked });
    };

    const tableHeaders = ['Name', 'Title', 'Email', 'Role'];
    const tableData = [
        { name: 'Jane Cooper', title: 'Regional Paradigm Technician', email: 'jane.cooper@example.com', role: 'Admin' },
        { name: 'Cody Fisher', title: 'Product Directives Officer', email: 'cody.fisher@example.com', role: 'Owner' },
    ];
    
    const breadcrumbCrumbs = [
        { name: 'Projects', href: '#', current: false },
        { name: 'Project Nero', href: '#', current: true },
    ];
    
    const accordionItems = [
        { title: 'What is your refund policy?', content: 'If you\'re unhappy with your purchase for any reason, email us within 90 days and we\'ll refund you in full, no questions asked.' },
        { title: 'Do you offer technical support?', content: 'No.' },
    ];

    const dropdownItems = [
        { label: 'Account settings', href: '#' },
        { label: 'Support', href: '#' },
        { label: 'License', href: '#' },
        { label: 'Sign out', onClick: () => alert('Signing out!') },
    ];

    const avatarListItems = [
        { alt: 'Anika Calzoni' },
        { alt: 'Lincoln Vetrovs' },
        { alt: 'Justin Ekstrom' },
        { alt: 'Ann Rhiel Madsen' },
        { alt: 'Marcus Bothman' },
    ];

    const tabItems = [
        { id: 'profile', label: 'Profile' },
        { id: 'team', label: 'Team' },
        { id: 'billing', label: 'Billing' },
    ];

    const workerListItems = [
      { id: 1, name: 'Anika Calzoni', company: 'Maple Gate', country: 'CA' },
      { id: 2, name: 'Lincoln Vetrovs', company: 'Indium Tech', country: 'NL' },
      { id: 3, name: 'Justin Ekstrom Bothman', company: 'Indium Tech', country: 'NL' },
    ];


  return (
    <div className="col-span-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Component Showcase</h1>



      <ComponentSection title="Layout">
        <ComponentWrapper title="Multi-Column Grid">
          <div className="w-full">
            <MultiColumnLayoutShowcase />
          </div>
        </ComponentWrapper>
      </ComponentSection>

      
      <ComponentSection title="Buttons">
        <ComponentWrapper title="Variants & Sizes">
            <div className="flex items-start gap-4">
                <div className="flex flex-col gap-4 items-start">
                    <Button size="sm">Primary</Button>
                    <Button size="md">Primary</Button>
                    <Button size="lg">Primary</Button>
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <Button variant="secondary" size="sm">Secondary</Button>
                    <Button variant="secondary" size="md">Secondary</Button>
                    <Button variant="secondary" size="lg">Secondary</Button>
                </div>
                 <div className="flex flex-col gap-4 items-start">
                    <Button variant="tertiary" size="sm">Tertiary</Button>
                    <Button variant="tertiary" size="md">Tertiary</Button>
                    <Button variant="tertiary" size="lg">Tertiary</Button>
                </div>
                 <div className="flex flex-col gap-4 items-start">
                    <Button variant="danger" size="sm">Danger</Button>
                    <Button variant="danger" size="md">Danger</Button>
                    <Button variant="danger" size="lg">Danger</Button>
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <Button variant="success" size="sm">Success</Button>
                    <Button variant="success" size="md">Success</Button>
                    <Button variant="success" size="lg">Success</Button>
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <Button variant="warning" size="sm">Warning</Button>
                    <Button variant="warning" size="md">Warning</Button>
                    <Button variant="warning" size="lg">Warning</Button>
                </div>
            </div>
        </ComponentWrapper>
        <ComponentWrapper title="With Icons">
            <div className="flex items-start gap-4">
                <Button size="md" icon={<PlusIcon />}>Add</Button>
                <Button variant="secondary" size="md" icon={<ArrowDownTrayIcon />} iconPosition="right">Download</Button>
                <Button variant="tertiary" size="md" icon={<PlusIcon />}>Add</Button>
                 <Button variant="secondary" size="lg" icon={<PlusIcon />} aria-label="Add item" />
            </div>
        </ComponentWrapper>
      </ComponentSection>



      <ComponentSection title="Lists">
        <ComponentWrapper title="List Item">
          <ul className="w-full max-w-sm rounded-lg border border-SG-stroke bg-SG-bg-content divide-y divide-SG-stroke">
            {workerListItems.map(worker => (
              <WorkerListItem
                key={worker.id}
                {...worker}
                isSelected={selectedWorker === worker.id}
                onClick={() => setSelectedWorker(worker.id)}
              />
            ))}
          </ul>
        </ComponentWrapper>
        <ComponentWrapper title="List Empty State">
          <div className="w-full max-w-sm rounded-lg border border-SG-stroke bg-SG-bg-content">
            <ListEmptyState message="No results found." />
          </div>
        </ComponentWrapper>
      </ComponentSection>

      <ComponentSection title="Feedback">
        <ComponentWrapper title="Alert Banner">
            <div className="w-full space-y-4">
                <AlertBanner title="Information" message="A new software update is available. See what's new in version 2.0.4." type="info" />
                <AlertBanner title="Success!" message="Your profile has been updated successfully." type="success" />
                <AlertBanner title="Warning" message="Your account will be locked in 3 days due to inactivity." type="warning" />
                <AlertBanner title="Error" message="Failed to upload document. Please try again." type="error" />
            </div>
        </ComponentWrapper>
        <ComponentWrapper title="Notification (Toast)">
            <Button onClick={() => setShowNotification(true)}>Show Notification</Button>
            <Notification
                show={showNotification}
                setShow={setShowNotification}
                title="Action successful!"
                message="The operation has been completed successfully."
            />
        </ComponentWrapper>
      </ComponentSection>

      <ComponentSection title="Forms">
        <ComponentWrapper title="Checkbox">
            <Checkbox label="Accept terms and conditions" name="terms" checked={checkboxStates.terms} onChange={handleCheckboxChange} />
            <Checkbox label="Subscribe to newsletter" name="newsletter" checked={checkboxStates.newsletter} onChange={handleCheckboxChange} />
        </ComponentWrapper>
        <ComponentWrapper title="Input">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Full Name" name="fullName" placeholder="Anika Calzoni" />
                <Input label="Email Address" name="email" type="email" placeholder="you@example.com" error="This field is required." />
            </div>
        </ComponentWrapper>
        <ComponentWrapper title="Search Input">
            <SearchInput placeholder="Search..." />
        </ComponentWrapper>
        <ComponentWrapper title="Radio Group">
            <div className="flex flex-col gap-2">
                <Radio label="Email" name="notificationMethod" value="email" checked={radioValue === 'email'} onChange={(e) => setRadioValue(e.target.value)} />
                <Radio label="SMS" name="notificationMethod" value="sms" checked={radioValue === 'sms'} onChange={(e) => setRadioValue(e.target.value)} />
                <Radio label="Push Notification" name="notificationMethod" value="push" checked={radioValue === 'push'} onChange={(e) => setRadioValue(e.target.value)} />
            </div>
        </ComponentWrapper>
         <ComponentWrapper title="Range Slider">
            <div className="w-full">
                <RangeSlider label="Volume" value={sliderValue} onChange={(e) => setSliderValue(e.target.value)} />
            </div>
        </ComponentWrapper>
        <ComponentWrapper title="Select">
             <Select 
                label="Location"
                name="location"
                options={[
                    { value: 'us', label: 'United States' },
                    { value: 'ca', label: 'Canada' },
                    { value: 'mx', label: 'Mexico' },
                ]}
            />
        </ComponentWrapper>
        <ComponentWrapper title="Textarea">
            <div className="w-full">
                <Textarea label="Your message" name="message" placeholder="Enter your message here..." />
            </div>
        </ComponentWrapper>
        <ComponentWrapper title="Toggle">
             <Toggle label="Enable Notifications" enabled={toggleEnabled} setEnabled={setToggleEnabled} />
        </ComponentWrapper>
        <ComponentWrapper title="Date Picker">
            <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
        </ComponentWrapper>
      </ComponentSection>
      
      <ComponentSection title="Navigation">
        <ComponentWrapper title="Breadcrumb">
            <Breadcrumb crumbs={breadcrumbCrumbs} />
        </ComponentWrapper>
        <ComponentWrapper title="Pagination">
            <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} />
        </ComponentWrapper>
         <ComponentWrapper title="Tabs">
            <Tabs tabs={tabItems} activeTab={activeTab} setActiveTab={setActiveTab} />
        </ComponentWrapper>
      </ComponentSection>
      
      <ComponentSection title="Overlays">
        <ComponentWrapper title="Accordion">
            <div className="w-full max-w-lg space-y-2">
                <Accordion title="What is your refund policy?" defaultExpanded={true}>
                    <p className="p-4 text-sm text-SG-text-muted">If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.</p>
                </Accordion>
                <Accordion title="Do you offer technical support?" defaultExpanded={false}>
                     <p className="p-4 text-sm text-SG-text-muted">No.</p>
                </Accordion>
            </div>
        </ComponentWrapper>
        <ComponentWrapper title="Dropdown">
            <Dropdown buttonText="Options" items={dropdownItems} />
        </ComponentWrapper>
         <ComponentWrapper title="Modal">
            <div className="flex gap-4">
                <Button onClick={() => setModalState({ open: true, variant: 'danger' })}>Danger Modal</Button>
                 <Button variant="primary" onClick={() => setModalState({ open: true, variant: 'info' })}>Info Modal</Button>
            </div>
            <ConfirmationModal
                open={modalState.open}
                setOpen={(isOpen) => setModalState({ ...modalState, open: isOpen })}
                title="Confirm Action"
                message="Are you sure you want to do this? This action cannot be undone."
                confirmText="Confirm"
                onConfirm={() => console.log('Confirmed!')}
                variant={modalState.variant}
            />
        </ComponentWrapper>
      </ComponentSection>


      <ComponentSection title="Data Display">
        <ComponentWrapper title="Avatar">
            <Avatar alt="Anika Calzoni" size="sm" />
            <Avatar alt="Lincoln Vetrovs" size="md" />
            <Avatar alt="Justin Ekstrom" size="lg" />
            <Avatar alt="Ann Rhiel Madsen" size="xl" />
        </ComponentWrapper>
        <ComponentWrapper title="Avatar List">
            <AvatarList avatars={avatarListItems} />
        </ComponentWrapper>
        <ComponentWrapper title="Badge">
            <Badge label="Primary" color="primary" />
            <Badge label="Gray" color="gray" />
            <Badge label="Success" color="success" />
            <Badge label="Warning" color="warning" />
            <Badge label="Error" color="error" />
        </ComponentWrapper>
        <ComponentWrapper title="Progress Bar">
            <div className="w-full space-y-4">
                <ProgressBar progress={75} color="primary" />
                <ProgressBar progress={50} color="success" size="sm" />
            </div>
        </ComponentWrapper>
        <ComponentWrapper title="Spinner">
            <Spinner size="sm" />
            <Spinner size="md" color="gray" />
            <Spinner size="lg" />
        </ComponentWrapper>
        <ComponentWrapper title="Tooltip">
            <Tooltip content="This is a tooltip">
                <Button>Hover me (top)</Button>
            </Tooltip>
             <Tooltip content="This is another tooltip" position="bottom">
                <Button>Hover me (bottom)</Button>
            </Tooltip>
        </ComponentWrapper>
        <ComponentWrapper title="Table">
            <div className="w-full">
                <Table headers={tableHeaders} data={tableData} />
            </div>
        </ComponentWrapper>
      </ComponentSection>

    </div>
  );
} 