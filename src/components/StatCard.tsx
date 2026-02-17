'use client';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  trend: string;
  icon: string;
}

export default function StatCard({ title, value, subtitle, trend, icon }: StatCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-slate-400 text-sm font-medium">{title}</p>
          <h3 className="text-3xl font-bold text-white mt-1">{value}</h3>
        </div>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs text-slate-500">{subtitle}</p>
        <p className="text-xs text-green-400">{trend}</p>
      </div>
    </div>
  );
}
