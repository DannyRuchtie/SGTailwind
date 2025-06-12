import { useState } from 'react';
import {
  AcademicCapIcon, AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon, ArchiveBoxArrowDownIcon, ArchiveBoxIcon, ArchiveBoxXMarkIcon,
  ArrowDownCircleIcon, ArrowDownIcon, ArrowDownLeftIcon, ArrowDownOnSquareIcon, ArrowDownOnSquareStackIcon, ArrowDownRightIcon,
  ArrowDownTrayIcon, ArrowLeftCircleIcon, ArrowLeftIcon, ArrowLeftOnRectangleIcon, ArrowLongDownIcon, ArrowLongLeftIcon,
  ArrowLongRightIcon, ArrowLongUpIcon, ArrowPathIcon, ArrowPathRoundedSquareIcon, ArrowRightCircleIcon, ArrowRightIcon,
  ArrowRightOnRectangleIcon, ArrowSmallDownIcon, ArrowSmallLeftIcon, ArrowSmallRightIcon, ArrowSmallUpIcon, ArrowTopRightOnSquareIcon,
  ArrowTrendingDownIcon, ArrowTrendingUpIcon, ArrowUpCircleIcon, ArrowUpIcon, ArrowUpLeftIcon, ArrowUpOnSquareIcon,
  ArrowUpOnSquareStackIcon, ArrowUpRightIcon, ArrowUpTrayIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon, ArrowsRightLeftIcon,
  ArrowsUpDownIcon, AtSymbolIcon, BackspaceIcon, BackwardIcon, BanknotesIcon, Bars2Icon, Bars3BottomLeftIcon,
  Bars3BottomRightIcon, Bars3CenterLeftIcon, Bars3Icon, Bars4Icon, BarsArrowDownIcon, BarsArrowUpIcon, Battery0Icon,
  Battery100Icon, Battery50Icon, BeakerIcon, BellAlertIcon, BellIcon, BellSlashIcon, BellSnoozeIcon,
  BoltIcon, BoltSlashIcon, BookOpenIcon, BookmarkIcon, BookmarkSlashIcon, BookmarkSquareIcon, BriefcaseIcon, BugAntIcon,
  BuildingLibraryIcon, BuildingOffice2Icon, BuildingOfficeIcon, BuildingStorefrontIcon, CakeIcon, CalculatorIcon,
  CalendarDaysIcon, CalendarIcon, CameraIcon, ChartBarIcon, ChartBarSquareIcon, ChartPieIcon, ChatBubbleBottomCenterIcon,
  ChatBubbleBottomCenterTextIcon, ChatBubbleLeftEllipsisIcon, ChatBubbleLeftRightIcon, ChatBubbleOvalLeftEllipsisIcon,
  ChatBubbleOvalLeftIcon, CheckBadgeIcon, CheckCircleIcon, CheckIcon, ChevronDoubleDownIcon, ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon, ChevronDoubleUpIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpDownIcon,
  ChevronUpIcon, CircleStackIcon, ClipboardDocumentCheckIcon, ClipboardDocumentIcon, ClipboardDocumentListIcon,
  ClockIcon, CloudArrowDownIcon, CloudArrowUpIcon, CloudIcon, CodeBracketIcon, CodeBracketSquareIcon, Cog6ToothIcon,
  Cog8ToothIcon, CogIcon, CommandLineIcon, ComputerDesktopIcon, CpuChipIcon, CreditCardIcon, CubeIcon, CubeTransparentIcon,
  CurrencyBangladeshiIcon, CurrencyDollarIcon, CurrencyEuroIcon, CurrencyPoundIcon, CurrencyRupeeIcon, CurrencyYenIcon,
  CursorArrowRaysIcon, CursorArrowRippleIcon, DevicePhoneMobileIcon, DeviceTabletIcon, DocumentArrowDownIcon,
  DocumentArrowUpIcon, DocumentChartBarIcon, DocumentCheckIcon, DocumentDuplicateIcon, DocumentMagnifyingGlassIcon,
  DocumentMinusIcon, DocumentPlusIcon, DocumentTextIcon, DocumentIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon,
  EllipsisVerticalIcon, EnvelopeIcon, EnvelopeOpenIcon, ExclamationCircleIcon, ExclamationTriangleIcon, EyeDropperIcon,
  EyeIcon, EyeSlashIcon, FaceFrownIcon, FaceSmileIcon, FilmIcon, FingerPrintIcon, FireIcon, FlagIcon, FolderArrowDownIcon,
  FolderIcon, FolderMinusIcon, FolderOpenIcon, FolderPlusIcon, ForwardIcon, FunnelIcon, GifIcon, GiftIcon, GiftTopIcon,
  GlobeAltIcon, GlobeAmericasIcon, GlobeAsiaAustraliaIcon, GlobeEuropeAfricaIcon, HandRaisedIcon, HandThumbDownIcon,
  HandThumbUpIcon, HashtagIcon, HeartIcon, HomeIcon, HomeModernIcon, IdentificationIcon, InboxArrowDownIcon, InboxIcon,
  InboxStackIcon, InformationCircleIcon, KeyIcon, LanguageIcon, LifebuoyIcon, LightBulbIcon, LinkIcon, ListBulletIcon,
  LockClosedIcon, LockOpenIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, MagnifyingGlassMinusIcon,
  MagnifyingGlassPlusIcon, MapIcon, MapPinIcon, MegaphoneIcon, MicrophoneIcon, MinusCircleIcon, MinusIcon, MinusSmallIcon,
  MoonIcon, MusicalNoteIcon, NewspaperIcon, NoSymbolIcon, PaintBrushIcon, PaperAirplaneIcon, PaperClipIcon, PauseCircleIcon,
  PauseIcon, PencilIcon, PencilSquareIcon, PhoneArrowDownLeftIcon, PhoneArrowUpRightIcon, PhoneIcon, PhoneXMarkIcon,
  PhotoIcon, PlayCircleIcon, PlayIcon, PlayPauseIcon, PlusCircleIcon, PlusIcon, PlusSmallIcon, PowerIcon, PresentationChartBarIcon,
  PresentationChartLineIcon, PrinterIcon, PuzzlePieceIcon, QrCodeIcon, QuestionMarkCircleIcon, QueueListIcon, RadioIcon,
  ReceiptPercentIcon, ReceiptRefundIcon, RectangleGroupIcon, RectangleStackIcon, RocketLaunchIcon, RssIcon, ScaleIcon,
  ScissorsIcon, ServerIcon, ServerStackIcon, ShareIcon, ShieldCheckIcon, ShieldExclamationIcon, ShoppingBagIcon,
  ShoppingCartIcon, SignalIcon, SignalSlashIcon, SparklesIcon, SpeakerWaveIcon, SpeakerXMarkIcon, Square2StackIcon,
  Square3Stack3DIcon, Squares2X2Icon, SquaresPlusIcon, StarIcon, StopCircleIcon, StopIcon, SunIcon, SwatchIcon,
  TableCellsIcon, TagIcon, TicketIcon, TrashIcon, TrophyIcon, TruckIcon, TvIcon, UserCircleIcon, UserGroupIcon,
  UserIcon, UserMinusIcon, UserPlusIcon, UsersIcon, VariableIcon, VideoCameraIcon, VideoCameraSlashIcon, ViewColumnsIcon,
  ViewfinderCircleIcon, WalletIcon, WifiIcon, WindowIcon, WrenchIcon, WrenchScrewdriverIcon, XCircleIcon, XMarkIcon
} from '@heroicons/react/24/outline';

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
import ListFooterCTA from '../ui/list/ListFooterCTA';

// Existing Components
import Button from '../ui/buttons/Button.jsx';
import SearchInput from '../ui/SearchInput';
import Notification from '../ui/Notification';
import Tabs from '../navigation/Tabs';
import { DialogTitle } from '@headlessui/react'
import { ArrowDownTrayIcon as SolidArrowDownTrayIcon, PlusIcon as SolidPlusIcon } from '@heroicons/react/24/solid'
import MultiColumnLayoutShowcase from '../ui/layout/MultiColumnLayoutShowcase';
import Navbar from '../navigation/Navbar';


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

const IconDisplay = ({ icon: Icon, name }) => (
  <div className="flex flex-col items-center justify-start text-center w-20">
    <div className="flex items-center justify-center w-12 h-12 bg-SG-bg-secondary rounded-lg">
       <Icon className="w-6 h-6 text-SG-text-primary" />
    </div>
    <span className="mt-2 text-xs text-SG-text-muted break-words">{name}</span>
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

    const outlineIcons = [
      { icon: AcademicCapIcon, name: 'AcademicCap' }, { icon: AdjustmentsHorizontalIcon, name: 'AdjustmentsHorizontal' },
      { icon: AdjustmentsVerticalIcon, name: 'AdjustmentsVertical' }, { icon: ArchiveBoxArrowDownIcon, name: 'ArchiveBoxArrowDown' },
      { icon: ArchiveBoxIcon, name: 'ArchiveBox' }, { icon: ArchiveBoxXMarkIcon, name: 'ArchiveBoxXMark' },
      { icon: ArrowDownCircleIcon, name: 'ArrowDownCircle' }, { icon: ArrowDownIcon, name: 'ArrowDown' },
      { icon: ArrowDownLeftIcon, name: 'ArrowDownLeft' }, { icon: ArrowDownOnSquareIcon, name: 'ArrowDownOnSquare' },
      { icon: ArrowDownOnSquareStackIcon, name: 'ArrowDownOnSquareStack' }, { icon: ArrowDownRightIcon, name: 'ArrowDownRight' },
      { icon: ArrowDownTrayIcon, name: 'ArrowDownTray' }, { icon: ArrowLeftCircleIcon, name: 'ArrowLeftCircle' },
      { icon: ArrowLeftIcon, name: 'ArrowLeft' }, { icon: ArrowLeftOnRectangleIcon, name: 'ArrowLeftOnRectangle' },
      { icon: ArrowLongDownIcon, name: 'ArrowLongDown' }, { icon: ArrowLongLeftIcon, name: 'ArrowLongLeft' },
      { icon: ArrowLongRightIcon, name: 'ArrowLongRight' }, { icon: ArrowLongUpIcon, name: 'ArrowLongUp' },
      { icon: ArrowPathIcon, name: 'ArrowPath' }, { icon: ArrowPathRoundedSquareIcon, name: 'ArrowPathRoundedSquare' },
      { icon: ArrowRightCircleIcon, name: 'ArrowRightCircle' }, { icon: ArrowRightIcon, name: 'ArrowRight' },
      { icon: ArrowRightOnRectangleIcon, name: 'ArrowRightOnRectangle' }, { icon: ArrowSmallDownIcon, name: 'ArrowSmallDown' },
      { icon: ArrowSmallLeftIcon, name: 'ArrowSmallLeft' }, { icon: ArrowSmallRightIcon, name: 'ArrowSmallRight' },
      { icon: ArrowSmallUpIcon, name: 'ArrowSmallUp' }, { icon: ArrowTopRightOnSquareIcon, name: 'ArrowTopRightOnSquare' },
      { icon: ArrowTrendingDownIcon, name: 'ArrowTrendingDown' }, { icon: ArrowTrendingUpIcon, name: 'ArrowTrendingUp' },
      { icon: ArrowUpCircleIcon, name: 'ArrowUpCircle' }, { icon: ArrowUpIcon, name: 'ArrowUp' },
      { icon: ArrowUpLeftIcon, name: 'ArrowUpLeft' }, { icon: ArrowUpOnSquareIcon, name: 'ArrowUpOnSquare' },
      { icon: ArrowUpOnSquareStackIcon, name: 'ArrowUpOnSquareStack' }, { icon: ArrowUpRightIcon, name: 'ArrowUpRight' },
      { icon: ArrowUpTrayIcon, name: 'ArrowUpTray' }, { icon: ArrowsPointingInIcon, name: 'ArrowsPointingIn' },
      { icon: ArrowsPointingOutIcon, name: 'ArrowsPointingOut' }, { icon: ArrowsRightLeftIcon, name: 'ArrowsRightLeft' },
      { icon: ArrowsUpDownIcon, name: 'ArrowsUpDown' }, { icon: AtSymbolIcon, name: 'AtSymbol' },
      { icon: BackspaceIcon, name: 'Backspace' }, { icon: BackwardIcon, name: 'Backward' },
      { icon: BanknotesIcon, name: 'Banknotes' }, { icon: Bars2Icon, name: 'Bars2' },
      { icon: Bars3BottomLeftIcon, name: 'Bars3BottomLeft' }, { icon: Bars3BottomRightIcon, name: 'Bars3BottomRight' },
      { icon: Bars3CenterLeftIcon, name: 'Bars3CenterLeft' }, { icon: Bars3Icon, name: 'Bars3' },
      { icon: Bars4Icon, name: 'Bars4' }, { icon: BarsArrowDownIcon, name: 'BarsArrowDown' },
      { icon: BarsArrowUpIcon, name: 'BarsArrowUp' }, { icon: Battery0Icon, name: 'Battery0' },
      { icon: Battery100Icon, name: 'Battery100' }, { icon: Battery50Icon, name: 'Battery50' },
      { icon: BeakerIcon, name: 'Beaker' }, { icon: BellAlertIcon, name: 'BellAlert' },
      { icon: BellIcon, name: 'Bell' }, { icon: BellSlashIcon, name: 'BellSlash' },
      { icon: BellSnoozeIcon, name: 'BellSnooze' }, { icon: BoltIcon, name: 'Bolt' },
      { icon: BoltSlashIcon, name: 'BoltSlash' }, { icon: BookOpenIcon, name: 'BookOpen' },
      { icon: BookmarkIcon, name: 'Bookmark' }, { icon: BookmarkSlashIcon, name: 'BookmarkSlash' },
      { icon: BookmarkSquareIcon, name: 'BookmarkSquare' }, { icon: BriefcaseIcon, name: 'Briefcase' },
      { icon: BugAntIcon, name: 'BugAnt' }, { icon: BuildingLibraryIcon, name: 'BuildingLibrary' },
      { icon: BuildingOffice2Icon, name: 'BuildingOffice2' }, { icon: BuildingOfficeIcon, name: 'BuildingOffice' },
      { icon: BuildingStorefrontIcon, name: 'BuildingStorefront' }, { icon: CakeIcon, name: 'Cake' },
      { icon: CalculatorIcon, name: 'Calculator' }, { icon: CalendarDaysIcon, name: 'CalendarDays' },
      { icon: CalendarIcon, name: 'Calendar' }, { icon: CameraIcon, name: 'Camera' },
      { icon: ChartBarIcon, name: 'ChartBar' }, { icon: ChartBarSquareIcon, name: 'ChartBarSquare' },
      { icon: ChartPieIcon, name: 'ChartPie' }, { icon: ChatBubbleBottomCenterIcon, name: 'ChatBubbleBottomCenter' },
      { icon: ChatBubbleBottomCenterTextIcon, name: 'ChatBubbleBottomCenterText' }, { icon: ChatBubbleLeftEllipsisIcon, name: 'ChatBubbleLeftEllipsis' },
      { icon: ChatBubbleLeftRightIcon, name: 'ChatBubbleLeftRight' }, { icon: ChatBubbleOvalLeftEllipsisIcon, name: 'ChatBubbleOvalLeftEllipsis' },
      { icon: ChatBubbleOvalLeftIcon, name: 'ChatBubbleOvalLeft' }, { icon: CheckBadgeIcon, name: 'CheckBadge' },
      { icon: CheckCircleIcon, name: 'CheckCircle' }, { icon: CheckIcon, name: 'Check' },
      { icon: ChevronDoubleDownIcon, name: 'ChevronDoubleDown' }, { icon: ChevronDoubleLeftIcon, name: 'ChevronDoubleLeft' },
      { icon: ChevronDoubleRightIcon, name: 'ChevronDoubleRight' }, { icon: ChevronDoubleUpIcon, name: 'ChevronDoubleUp' },
      { icon: ChevronDownIcon, name: 'ChevronDown' }, { icon: ChevronLeftIcon, name: 'ChevronLeft' },
      { icon: ChevronRightIcon, name: 'ChevronRight' }, { icon: ChevronUpDownIcon, name: 'ChevronUpDown' },
      { icon: ChevronUpIcon, name: 'ChevronUp' }, { icon: CircleStackIcon, name: 'CircleStack' },
      { icon: ClipboardDocumentCheckIcon, name: 'ClipboardDocumentCheck' }, { icon: ClipboardDocumentIcon, name: 'ClipboardDocument' },
      { icon: ClipboardDocumentListIcon, name: 'ClipboardDocumentList' }, { icon: ClockIcon, name: 'Clock' },
      { icon: CloudArrowDownIcon, name: 'CloudArrowDown' }, { icon: CloudArrowUpIcon, name: 'CloudArrowUp' },
      { icon: CloudIcon, name: 'Cloud' }, { icon: CodeBracketIcon, name: 'CodeBracket' },
      { icon: CodeBracketSquareIcon, name: 'CodeBracketSquare' }, { icon: Cog6ToothIcon, name: 'Cog6Tooth' },
      { icon: Cog8ToothIcon, name: 'Cog8Tooth' }, { icon: CogIcon, name: 'Cog' },
      { icon: CommandLineIcon, name: 'CommandLine' }, { icon: ComputerDesktopIcon, name: 'ComputerDesktop' },
      { icon: CpuChipIcon, name: 'CpuChip' }, { icon: CreditCardIcon, name: 'CreditCard' },
      { icon: CubeIcon, name: 'Cube' }, { icon: CubeTransparentIcon, name: 'CubeTransparent' },
      { icon: CurrencyBangladeshiIcon, name: 'CurrencyBangladeshi' }, { icon: CurrencyDollarIcon, name: 'CurrencyDollar' },
      { icon: CurrencyEuroIcon, name: 'CurrencyEuro' }, { icon: CurrencyPoundIcon, name: 'CurrencyPound' },
      { icon: CurrencyRupeeIcon, name: 'CurrencyRupee' }, { icon: CurrencyYenIcon, name: 'CurrencyYen' },
      { icon: CursorArrowRaysIcon, name: 'CursorArrowRays' }, { icon: CursorArrowRippleIcon, name: 'CursorArrowRipple' },
      { icon: DevicePhoneMobileIcon, name: 'DevicePhoneMobile' }, { icon: DeviceTabletIcon, name: 'DeviceTablet' },
      { icon: DocumentArrowDownIcon, name: 'DocumentArrowDown' }, { icon: DocumentArrowUpIcon, name: 'DocumentArrowUp' },
      { icon: DocumentChartBarIcon, name: 'DocumentChartBar' }, { icon: DocumentCheckIcon, name: 'DocumentCheck' },
      { icon: DocumentDuplicateIcon, name: 'DocumentDuplicate' }, { icon: DocumentMagnifyingGlassIcon, name: 'DocumentMagnifyingGlass' },
      { icon: DocumentMinusIcon, name: 'DocumentMinus' }, { icon: DocumentPlusIcon, name: 'DocumentPlus' },
      { icon: DocumentTextIcon, name: 'DocumentText' }, { icon: DocumentIcon, name: 'Document' },
      { icon: EllipsisHorizontalCircleIcon, name: 'EllipsisHorizontalCircle' }, { icon: EllipsisHorizontalIcon, name: 'EllipsisHorizontal' },
      { icon: EllipsisVerticalIcon, name: 'EllipsisVertical' }, { icon: EnvelopeIcon, name: 'Envelope' },
      { icon: EnvelopeOpenIcon, name: 'EnvelopeOpen' }, { icon: ExclamationCircleIcon, name: 'ExclamationCircle' },
      { icon: ExclamationTriangleIcon, name: 'ExclamationTriangle' }, { icon: EyeDropperIcon, name: 'EyeDropper' },
      { icon: EyeIcon, name: 'Eye' }, { icon: EyeSlashIcon, name: 'EyeSlash' },
      { icon: FaceFrownIcon, name: 'FaceFrown' }, { icon: FaceSmileIcon, name: 'FaceSmile' },
      { icon: FilmIcon, name: 'Film' }, { icon: FingerPrintIcon, name: 'FingerPrint' },
      { icon: FireIcon, name: 'Fire' }, { icon: FlagIcon, name: 'Flag' },
      { icon: FolderArrowDownIcon, name: 'FolderArrowDown' }, { icon: FolderIcon, name: 'Folder' },
      { icon: FolderMinusIcon, name: 'FolderMinus' }, { icon: FolderOpenIcon, name: 'FolderOpen' },
      { icon: FolderPlusIcon, name: 'FolderPlus' }, { icon: ForwardIcon, name: 'Forward' },
      { icon: FunnelIcon, name: 'Funnel' }, { icon: GifIcon, name: 'Gif' },
      { icon: GiftIcon, name: 'Gift' }, { icon: GiftTopIcon, name: 'GiftTop' },
      { icon: GlobeAltIcon, name: 'GlobeAlt' }, { icon: GlobeAmericasIcon, name: 'GlobeAmericas' },
      { icon: GlobeAsiaAustraliaIcon, name: 'GlobeAsiaAustralia' }, { icon: GlobeEuropeAfricaIcon, name: 'GlobeEuropeAfrica' },
      { icon: HandRaisedIcon, name: 'HandRaised' }, { icon: HandThumbDownIcon, name: 'HandThumbDown' },
      { icon: HandThumbUpIcon, name: 'HandThumbUp' }, { icon: HashtagIcon, name: 'Hashtag' },
      { icon: HeartIcon, name: 'Heart' }, { icon: HomeIcon, name: 'Home' },
      { icon: HomeModernIcon, name: 'HomeModern' }, { icon: IdentificationIcon, name: 'Identification' },
      { icon: InboxArrowDownIcon, name: 'InboxArrowDown' }, { icon: InboxIcon, name: 'Inbox' },
      { icon: InboxStackIcon, name: 'InboxStack' }, { icon: InformationCircleIcon, name: 'InformationCircle' },
      { icon: KeyIcon, name: 'Key' }, { icon: LanguageIcon, name: 'Language' },
      { icon: LifebuoyIcon, name: 'Lifebuoy' }, { icon: LightBulbIcon, name: 'LightBulb' },
      { icon: LinkIcon, name: 'Link' }, { icon: ListBulletIcon, name: 'ListBullet' },
      { icon: LockClosedIcon, name: 'LockClosed' }, { icon: LockOpenIcon, name: 'LockOpen' },
      { icon: MagnifyingGlassCircleIcon, name: 'MagnifyingGlassCircle' }, { icon: MagnifyingGlassIcon, name: 'MagnifyingGlass' },
      { icon: MagnifyingGlassMinusIcon, name: 'MagnifyingGlassMinus' }, { icon: MagnifyingGlassPlusIcon, name: 'MagnifyingGlassPlus' },
      { icon: MapIcon, name: 'Map' }, { icon: MapPinIcon, name: 'MapPin' },
      { icon: MegaphoneIcon, name: 'Megaphone' }, { icon: MicrophoneIcon, name: 'Microphone' },
      { icon: MinusCircleIcon, name: 'MinusCircle' }, { icon: MinusIcon, name: 'Minus' },
      { icon: MinusSmallIcon, name: 'MinusSmall' }, { icon: MoonIcon, name: 'Moon' },
      { icon: MusicalNoteIcon, name: 'MusicalNote' }, { icon: NewspaperIcon, name: 'Newspaper' },
      { icon: NoSymbolIcon, name: 'NoSymbol' }, { icon: PaintBrushIcon, name: 'PaintBrush' },
      { icon: PaperAirplaneIcon, name: 'PaperAirplane' }, { icon: PaperClipIcon, name: 'PaperClip' },
      { icon: PauseCircleIcon, name: 'PauseCircle' }, { icon: PauseIcon, name: 'Pause' },
      { icon: PencilIcon, name: 'Pencil' }, { icon: PencilSquareIcon, name: 'PencilSquare' },
      { icon: PhoneArrowDownLeftIcon, name: 'PhoneArrowDownLeft' }, { icon: PhoneArrowUpRightIcon, name: 'PhoneArrowUpRight' },
      { icon: PhoneIcon, name: 'Phone' }, { icon: PhoneXMarkIcon, name: 'PhoneXMark' },
      { icon: PhotoIcon, name: 'Photo' }, { icon: PlayCircleIcon, name: 'PlayCircle' },
      { icon: PlayIcon, name: 'Play' }, { icon: PlayPauseIcon, name: 'PlayPause' },
      { icon: PlusCircleIcon, name: 'PlusCircle' }, { icon: PlusIcon, name: 'Plus' },
      { icon: PlusSmallIcon, name: 'PlusSmall' }, { icon: PowerIcon, name: 'Power' },
      { icon: PresentationChartBarIcon, name: 'PresentationChartBar' }, { icon: PresentationChartLineIcon, name: 'PresentationChartLine' },
      { icon: PrinterIcon, name: 'Printer' }, { icon: PuzzlePieceIcon, name: 'PuzzlePiece' },
      { icon: QrCodeIcon, name: 'QrCode' }, { icon: QuestionMarkCircleIcon, name: 'QuestionMarkCircle' },
      { icon: QueueListIcon, name: 'QueueList' }, { icon: RadioIcon, name: 'Radio' },
      { icon: ReceiptPercentIcon, name: 'ReceiptPercent' }, { icon: ReceiptRefundIcon, name: 'ReceiptRefund' },
      { icon: RectangleGroupIcon, name: 'RectangleGroup' }, { icon: RectangleStackIcon, name: 'RectangleStack' },
      { icon: RocketLaunchIcon, name: 'RocketLaunch' }, { icon: RssIcon, name: 'Rss' },
      { icon: ScaleIcon, name: 'Scale' }, { icon: ScissorsIcon, name: 'Scissors' },
      { icon: ServerIcon, name: 'Server' }, { icon: ServerStackIcon, name: 'ServerStack' },
      { icon: ShareIcon, name: 'Share' }, { icon: ShieldCheckIcon, name: 'ShieldCheck' },
      { icon: ShieldExclamationIcon, name: 'ShieldExclamation' }, { icon: ShoppingBagIcon, name: 'ShoppingBag' },
      { icon: ShoppingCartIcon, name: 'ShoppingCart' }, { icon: SignalIcon, name: 'Signal' },
      { icon: SignalSlashIcon, name: 'SignalSlash' }, { icon: SparklesIcon, name: 'Sparkles' },
      { icon: SpeakerWaveIcon, name: 'SpeakerWave' }, { icon: SpeakerXMarkIcon, name: 'SpeakerXMark' },
      { icon: Square2StackIcon, name: 'Square2Stack' }, { icon: Square3Stack3DIcon, name: 'Square3Stack3D' },
      { icon: Squares2X2Icon, name: 'Squares2X2' }, { icon: SquaresPlusIcon, name: 'SquaresPlus' },
      { icon: StarIcon, name: 'Star' }, { icon: StopCircleIcon, name: 'StopCircle' },
      { icon: StopIcon, name: 'Stop' }, { icon: SunIcon, name: 'Sun' },
      { icon: SwatchIcon, name: 'Swatch' }, { icon: TableCellsIcon, name: 'TableCells' },
      { icon: TagIcon, name: 'Tag' }, { icon: TicketIcon, name: 'Ticket' },
      { icon: TrashIcon, name: 'Trash' }, { icon: TrophyIcon, name: 'Trophy' },
      { icon: TruckIcon, name: 'Truck' }, { icon: TvIcon, name: 'Tv' },
      { icon: UserCircleIcon, name: 'UserCircle' }, { icon: UserGroupIcon, name: 'UserGroup' },
      { icon: UserIcon, name: 'User' }, { icon: UserMinusIcon, name: 'UserMinus' },
      { icon: UserPlusIcon, name: 'UserPlus' }, { icon: UsersIcon, name: 'Users' },
      { icon: VariableIcon, name: 'Variable' }, { icon: VideoCameraIcon, name: 'VideoCamera' },
      { icon: VideoCameraSlashIcon, name: 'VideoCameraSlash' }, { icon: ViewColumnsIcon, name: 'ViewColumns' },
      { icon: ViewfinderCircleIcon, name: 'ViewfinderCircle' }, { icon: WalletIcon, name: 'Wallet' },
      { icon: WifiIcon, name: 'Wifi' }, { icon: WindowIcon, name: 'Window' },
      { icon: WrenchIcon, name: 'Wrench' }, { icon: WrenchScrewdriverIcon, name: 'WrenchScrewdriver' },
      { icon: XCircleIcon, name: 'XCircle' }, { icon: XMarkIcon, name: 'XMark' }
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
        <ComponentWrapper title="Navbar">
          <div className="w-full">
            <Navbar setIsSlideOverOpen={() => {}} setIsNotificationPanelOpen={() => {}} />
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
                <Button size="md" icon={<SolidPlusIcon />}>Add</Button>
                <Button variant="secondary" size="md" icon={<SolidArrowDownTrayIcon />} iconPosition="right">Download</Button>
                <Button variant="tertiary" size="md" icon={<SolidPlusIcon />}>Add</Button>
                 <Button variant="secondary" size="lg" icon={<SolidPlusIcon />} aria-label="Add item" />
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
        <ComponentWrapper title="Search with Filters">
            <div className="flex items-center gap-2">
                <SearchInput placeholder="Search items..." />
                <Dropdown 
                    buttonText="Filters" 
                    items={[
                        { label: 'Filter by Name', onClick: () => {} },
                        { label: 'Filter by Date', onClick: () => {} },
                        { label: 'Filter by Status', onClick: () => {} },
                    ]}
                />
            </div>
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
          <div className="w-full">
            <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} />
          </div>
        </ComponentWrapper>
        <ComponentWrapper title="Pagination with Numbers">
          <div className="w-full">
            <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} showNumbers={true} />
          </div>
        </ComponentWrapper>
         <ComponentWrapper title="Tabs">
            <div className="w-full">
              <Tabs tabs={tabItems} activeTab={activeTab} setActiveTab={setActiveTab} />
              <div className="mt-4 p-6 bg-SG-bg-secondary rounded-lg border border-SG-stroke">
                {activeTab === 'profile' && <div>
                  <h3 className="text-lg font-medium text-SG-text-primary">Profile Information</h3>
                  <p className="mt-2 text-sm text-SG-text-secondary">This is where you can view and edit your profile details.</p>
                </div>}
                {activeTab === 'team' && <div>
                  <h3 className="text-lg font-medium text-SG-text-primary">Team Members</h3>
                  <p className="mt-2 text-sm text-SG-text-secondary">Here are the members of your team.</p>
                </div>}
                {activeTab === 'billing' && <div>
                  <h3 className="text-lg font-medium text-SG-text-primary">Billing Details</h3>
                  <p className="mt-2 text-sm text-SG-text-secondary">Manage your subscription and payment methods here.</p>
                </div>}
              </div>
            </div>
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

      <ComponentSection title="Icons">
        <ComponentWrapper title="Outline Icons">
            <div className="flex flex-wrap gap-x-6 gap-y-8">
              {outlineIcons.map(item => <IconDisplay key={item.name} icon={item.icon} name={item.name} />)}
            </div>
        </ComponentWrapper>
      </ComponentSection>

    </div>
  );
} 