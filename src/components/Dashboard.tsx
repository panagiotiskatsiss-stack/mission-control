'use client';

import StatCard from './StatCard';
import ToolWidget from './ToolWidget';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Mission Control</h1>
        <p className="text-slate-400">Real-time status & operations</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Leads Scraped"
          value="12,450"
          subtitle="This week"
          trend="+2,100 today"
          icon="📊"
        />
        <StatCard
          title="SMS Sent"
          value="8,920"
          subtitle="This week"
          trend="+1,200 today"
          icon="💬"
        />
        <StatCard
          title="Appointments"
          value="142"
          subtitle="Booked"
          trend="+18 this week"
          icon="📅"
        />
        <StatCard
          title="Conversion Rate"
          value="6.2%"
          subtitle="SMS → Call"
          trend="+0.3% vs last week"
          icon="📈"
        />
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ToolWidget
          title="Lead Scraper"
          description="Scrape bathroom remodelers from Google Maps"
          status="Running"
          action="View Details"
        />
        <ToolWidget
          title="SMS Campaign"
          description="Send SMS to leads and track responses"
          status="Ready"
          action="Launch Campaign"
        />
        <ToolWidget
          title="Appointment Booking"
          description="Auto-book calls on Cal.com"
          status="Ready"
          action="Configure"
        />
        <ToolWidget
          title="AI Model Router"
          description="Optimize costs across 5+ AI models"
          status="Configured"
          action="View Status"
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-slate-900 border border-slate-700 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700">
            <span className="text-slate-300">Lead scraper completed batch #42</span>
            <span className="text-xs text-slate-500">5m ago</span>
          </div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700">
            <span className="text-slate-300">SMS campaign sent 1,200 messages</span>
            <span className="text-xs text-slate-500">1h ago</span>
          </div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-700">
            <span className="text-slate-300">12 appointments confirmed</span>
            <span className="text-xs text-slate-500">3h ago</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-300">System health check passed</span>
            <span className="text-xs text-slate-500">1d ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
