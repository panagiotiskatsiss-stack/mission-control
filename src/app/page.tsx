'use client';

import Dashboard from '@/components/Dashboard';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-950 text-white">
      {/* Sidebar */}
      <Navigation />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header Bar */}
        <div className="border-b border-gray-700 bg-gray-900/50 backdrop-blur-sm px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-mono text-xl font-bold tracking-tight">DASHBOARD</h2>
              <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">System status & operations</p>
            </div>
            <div className="text-3xl opacity-50">⚡</div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-8">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}
