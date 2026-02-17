'use client';

interface Task {
  id: string;
  title: string;
  status: 'in-progress' | 'blocked' | 'ready';
  priority: 'high' | 'medium' | 'low';
  description?: string;
}

export default function TaskPanel() {
  const tasks: Task[] = [
    {
      id: 'mc-ui',
      title: 'Mission Control UI',
      status: 'in-progress',
      priority: 'high',
      description: 'Rebuild dashboard with proper formatting'
    },
    {
      id: 'lead-scraper',
      title: 'Lead Scraper Build',
      status: 'ready',
      priority: 'high',
      description: 'Create scraper.py, database.py, config.py'
    },
    {
      id: 'sms-twilio',
      title: 'Twilio SMS Setup',
      status: 'ready',
      priority: 'high',
      description: 'Integrate Twilio API for SMS campaigns'
    },
    {
      id: 'cal-booking',
      title: 'Cal.com Integration',
      status: 'ready',
      priority: 'medium',
      description: 'Auto-book qualified leads'
    },
    {
      id: 'ai-router',
      title: 'AI Model Router',
      status: 'ready',
      priority: 'medium',
      description: 'Route tasks across Nano, Flash, Sonnet'
    },
    {
      id: 'phase3-security',
      title: 'Security Phase 3',
      status: 'blocked',
      priority: 'medium',
      description: 'TLS + centralized logging'
    },
  ];

  const statusColors = {
    'in-progress': 'border-l-4 border-l-orange-500 bg-orange-950/20',
    'ready': 'border-l-4 border-l-cyan-500 bg-cyan-950/20',
    'blocked': 'border-l-4 border-l-gray-600 bg-gray-950/20',
  };

  const statusBadges = {
    'in-progress': 'bg-orange-900/40 text-orange-300 border border-orange-700',
    'ready': 'bg-cyan-900/40 text-cyan-300 border border-cyan-700',
    'blocked': 'bg-gray-800/40 text-gray-400 border border-gray-700',
  };

  const priorityDots = {
    'high': '🔴',
    'medium': '🟡',
    'low': '🟢',
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-sm font-mono font-bold tracking-wider uppercase text-gray-300 mb-4">
          IN PROGRESS
        </h2>
        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`p-3 rounded-sm transition-all hover:shadow-lg cursor-pointer ${statusColors[task.status]}`}
            >
              <div className="flex items-start gap-2">
                <span className="text-lg mt-0.5">{priorityDots[task.priority]}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-mono text-sm font-semibold text-gray-100 truncate">
                      {task.title}
                    </h3>
                  </div>
                  {task.description && (
                    <p className="text-xs text-gray-400 line-clamp-2">
                      {task.description}
                    </p>
                  )}
                  <div className="mt-2">
                    <span className={`text-xs font-mono px-2 py-1 rounded-sm inline-block ${statusBadges[task.status]}`}>
                      {task.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
