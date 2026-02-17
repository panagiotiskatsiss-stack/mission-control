'use client';

import { useState } from 'react';
import Dashboard from '@/components/Dashboard';
import Navigation from '@/components/Navigation';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: '#0f0f0f' }}>
      {/* Sidebar Navigation */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content - Asymmetrical Layout */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header Bar with diagonal accent */}
        <div 
          className="border-b"
          style={{
            borderColor: '#3a3a3a',
            background: 'linear-gradient(135deg, rgba(15,15,15,1) 0%, rgba(26,26,26,0.5) 100%)',
            backdropFilter: 'blur(10px)',
            paddingBottom: '1rem',
          }}
        >
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}>
                HERMES
              </h2>
              <p style={{ color: '#808080', fontSize: '0.875rem' }}>Autonomous Business Automation</p>
            </div>
            <div style={{
              fontSize: '2rem',
              opacity: 0.6,
            }}>
              ⚡
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            {activeTab === 'dashboard' && <Dashboard />}
          </div>
        </div>
      </div>
    </div>
  );
}
