'use client';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'scraper', label: 'Lead Scraper', icon: '🕷️' },
    { id: 'sms', label: 'SMS Campaigns', icon: '💬' },
    { id: 'booking', label: 'Bookings', icon: '📅' },
    { id: 'models', label: 'AI Models', icon: '🤖' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <nav className="w-64 bg-slate-900 border-r border-slate-700 p-6 flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">⚡ Hermes</h1>
        <p className="text-sm text-slate-400">Mission Control</p>
      </div>

      {/* Nav Items */}
      <div className="space-y-2 flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
              activeTab === item.id
                ? 'bg-blue-600 text-white'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="text-xs text-slate-500 border-t border-slate-700 pt-4">
        <p>Connected • Ready</p>
      </div>
    </nav>
  );
}
