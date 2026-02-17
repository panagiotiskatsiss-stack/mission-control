'use client';

import TaskPanel from './TaskPanel';
import LogoutButton from './LogoutButton';

export default function Navigation() {
  return (
    <nav className="w-80 border-r border-gray-700 bg-gray-950 flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <div className="border-b border-gray-700 p-6">
        <div className="font-mono font-bold text-2xl tracking-tighter mb-1">
          ⚡ HERMES
        </div>
        <p className="text-xs text-gray-500 uppercase tracking-wide">MISSION CONTROL</p>
      </div>

      {/* Task Panel - Scrollable */}
      <div className="flex-1 overflow-y-auto p-6">
        <TaskPanel />
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 p-6 space-y-3">
        <p className="flex items-center gap-2 text-xs text-gray-500">
          <span className="inline-block w-2 h-2 bg-cyan-500 rounded-full"></span>
          ONLINE
        </p>
        <LogoutButton />
      </div>
    </nav>
  );
}
