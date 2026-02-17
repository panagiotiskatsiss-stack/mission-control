'use client';

import LogoutButton from './LogoutButton';

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
    <nav 
      className="w-64 flex flex-col border-r"
      style={{
        background: '#1a1a1a',
        borderColor: '#3a3a3a',
        paddingTop: '2rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      }}
    >
      {/* Header */}
      <div className="mb-8 pb-6 border-b" style={{ borderColor: '#3a3a3a' }}>
        <div 
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em',
          }}
        >
          ⚡ HERMES
        </div>
        <p style={{ color: '#808080', fontSize: '0.75rem', letterSpacing: '0.05em' }}>MISSION CONTROL</p>
      </div>

      {/* Nav Items */}
      <div className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className="w-full text-left transition-smooth-fast group"
            style={{
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              background: activeTab === item.id ? '#ff6b35' : 'transparent',
              color: activeTab === item.id ? '#0f0f0f' : '#b0b0b0',
              fontWeight: activeTab === item.id ? 600 : 500,
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Hover Effect Background */}
            <span
              className="absolute inset-0 transition-smooth"
              style={{
                background: activeTab === item.id ? 'transparent' : 'rgba(255, 107, 53, 0.1)',
                opacity: activeTab === item.id ? 0 : 0,
                borderRadius: '0.5rem',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== item.id) {
                  e.currentTarget.style.opacity = '1';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0';
              }}
            />
            <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span>{item.icon}</span>
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div 
        className="border-t pt-4 space-y-3"
        style={{
          borderColor: '#3a3a3a',
          paddingBottom: '1.5rem',
        }}
      >
        <div 
          style={{
            fontSize: '0.75rem',
            color: '#808080',
            letterSpacing: '0.05em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span 
            style={{
              width: '6px',
              height: '6px',
              background: '#00d9ff',
              borderRadius: '50%',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          ONLINE
        </div>
        <LogoutButton />
      </div>
    </nav>
  );
}
