'use client';

interface ToolWidgetProps {
  title: string;
  description: string;
  status: string;
  action: string;
}

export default function ToolWidget({ title, description, status, action }: ToolWidgetProps) {
  const statusColor = {
    Running: 'bg-green-900 text-green-300',
    Ready: 'bg-blue-900 text-blue-300',
    Configured: 'bg-purple-900 text-purple-300',
  }[status] || 'bg-slate-800 text-slate-300';

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-sm text-slate-400 mt-1">{description}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-700">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>
          {status}
        </span>
        <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
          {action} →
        </button>
      </div>
    </div>
  );
}
