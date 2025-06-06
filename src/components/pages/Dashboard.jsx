import { 
  ChartBarIcon, 
  UsersIcon, 
  BriefcaseIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';

const stats = [
  { 
    name: 'Total Workers', 
    value: '2,651', 
    change: '+4.75%', 
    changeType: 'positive',
    icon: UsersIcon 
  },
  { 
    name: 'Active Projects', 
    value: '42', 
    change: '+2.4%', 
    changeType: 'positive',
    icon: BriefcaseIcon 
  },
  { 
    name: 'Avg. Response Time', 
    value: '2.4h', 
    change: '-0.3h', 
    changeType: 'positive',
    icon: ClockIcon 
  },
  { 
    name: 'Monthly Growth', 
    value: '12.5%', 
    change: '+2.2%', 
    changeType: 'positive',
    icon: ChartBarIcon 
  },
];

const recentActivity = [
  {
    id: 1,
    user: 'Sarah Thompson',
    type: 'Worker Update',
    description: 'Updated contact information',
    date: '3 mins ago',
  },
  {
    id: 2,
    user: 'Michael Chen',
    type: 'New Project',
    description: 'Created project "Global Expansion 2024"',
    date: '2 hours ago',
  },
  {
    id: 3,
    user: 'Emily Rodriguez',
    type: 'Document Upload',
    description: 'Uploaded new compliance documents',
    date: '4 hours ago',
  },
  {
    id: 4,
    user: 'James Wilson',
    type: 'Status Change',
    description: 'Changed project status to "In Progress"',
    date: '5 hours ago',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dashboard() {
  return (
    <div className="col-span-12">
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
 
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          {/* Stats */}
          <div className="mt-8">
            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.name}
                  className="relative overflow-hidden rounded-lg bg-SG-bg-content px-4 pb-12 pt-5  sm:px-6 sm:pt-6"
                >
                  <dt>
                    <div className="absolute rounded-md bg-SG-buttons-cta-primary/10 p-3">
                      <stat.icon className="h-6 w-6 text-SG-buttons-cta-primary" aria-hidden="true" />
                    </div>
                    <p className="ml-16 truncate text-sm font-medium text-SG-text-secondary">{stat.name}</p>
                  </dt>
                  <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                    <p className="text-2xl font-semibold text-SG-text-primary">{stat.value}</p>
                    <p
                      className={classNames(
                        stat.changeType === 'positive' ? 'text-SG-state-success' : 'text-SG-state-error-bg',
                        'ml-2 flex items-baseline text-sm font-semibold'
                      )}
                    >
                      {stat.change}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Charts Section */}
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-lg bg-SG-bg-content ">
              <div className="p-6">
                <h3 className="text-lg font-medium leading-6 text-SG-text-primary">Worker Distribution</h3>
                <div className="mt-2 h-[300px] rounded-lg border-2 border-dashed border-SG-stroke flex items-center justify-center">
                  <p className="text-SG-text-secondary">Chart placeholder</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-SG-bg-content ">
              <div className="p-6">
                <h3 className="text-lg font-medium leading-6 text-SG-text-primary">Project Timeline</h3>
                <div className="mt-2 h-[300px] rounded-lg border-2 border-dashed border-SG-stroke flex items-center justify-center">
                  <p className="text-SG-text-secondary">Chart placeholder</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <div className="rounded-lg bg-SG-bg-content ">
              <div className="p-6">
                <h3 className="text-lg font-medium leading-6 text-SG-text-primary">Recent Activity</h3>
                <div className="mt-6 flow-root">
                  <ul role="list" className="-my-5 divide-y divide-SG-stroke">
                    {recentActivity.map((item) => (
                      <li key={item.id} className="py-5">
                        <div className="relative focus-within:ring-2 focus-within:ring-SG-brand-amethyst">
                          <h3 className="text-sm font-semibold text-SG-text-primary">
                            <span className="absolute inset-0" aria-hidden="true" />
                            {item.type}
                          </h3>
                          <p className="mt-1 text-sm text-SG-text-secondary line-clamp-2">{item.description}</p>
                          <div className="mt-2 flex items-center gap-x-2.5 text-xs text-SG-text-muted">
                            <p>{item.user}</p>
                            <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                              <circle cx={1} cy={1} r={1} />
                            </svg>
                            <p>{item.date}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 