'use client';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-mono text-4xl font-bold tracking-tighter mb-2">MISSION CONTROL</h1>
        <p className="text-gray-400">Autonomous business automation — scraping, SMS, booking, AI routing</p>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 gap-4">
        <div className="border border-gray-700 rounded-lg p-6 bg-gray-900/50">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-mono uppercase tracking-wide text-gray-400 mb-1">System Status</h2>
              <p className="text-2xl font-bold">NOT CONFIGURED</p>
            </div>
            <div className="text-4xl">⚙️</div>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Select a task from the sidebar to begin configuration.
          </p>
        </div>
      </div>

      {/* Getting Started */}
      <div className="border-l-4 border-l-orange-500 bg-orange-950/30 p-6 rounded-r-lg">
        <h2 className="font-mono font-bold text-orange-300 mb-3 uppercase text-sm tracking-wide">Next Steps</h2>
        <ol className="space-y-2 text-sm text-gray-300">
          <li>1. Fix Mission Control formatting ← You are here</li>
          <li>2. Build lead scraper (scraper.py, database.py, config.py)</li>
          <li>3. Set up Twilio SMS integration</li>
          <li>4. Configure Cal.com appointment booking</li>
          <li>5. Set up AI model router (multi-model cost optimization)</li>
        </ol>
      </div>

      {/* Deployment Info */}
      <div className="border border-gray-700 rounded-lg p-6 bg-gray-900/50">
        <h2 className="font-mono font-bold text-cyan-300 mb-3 uppercase text-sm tracking-wide">Deployment</h2>
        <div className="space-y-2 text-sm text-gray-300">
          <p><span className="text-cyan-400">URL:</span> https://mission-control-cagyj0wpd-panos-projects-181d4028.vercel.app</p>
          <p><span className="text-cyan-400">GitHub:</span> panagiotiskatsiss-stack/mission-control</p>
          <p><span className="text-cyan-400">Status:</span> <span className="text-green-400">Live</span></p>
        </div>
      </div>
    </div>
  );
}
