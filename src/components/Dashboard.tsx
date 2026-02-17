'use client';

import StatCard from './StatCard';
import ToolWidget from './ToolWidget';

export default function Dashboard() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg p-8" style={{
        background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(0, 217, 255, 0.05) 100%)',
        border: '1px solid #3a3a3a',
        borderLeft: '4px solid #ff6b35',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.5rem',
          fontWeight: 700,
          marginBottom: '0.5rem',
          letterSpacing: '-0.02em',
        }}>
          MISSION CONTROL
        </h1>
        <p style={{
          color: '#b0b0b0',
          fontSize: '1.1rem',
          marginBottom: '1.5rem',
        }}>
          Autonomous business automation platform — scraping, SMS campaigns, appointment booking, and AI-powered optimization.
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
        }}>
          <div style={{
            background: 'rgba(255, 107, 53, 0.1)',
            border: '1px solid #ff6b35',
            color: '#ff6b35',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}>
            ⚡ System Ready
          </div>
          <div style={{
            background: 'rgba(0, 217, 255, 0.1)',
            border: '1px solid #00d9ff',
            color: '#00d9ff',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            fontSize: '0.875rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}>
            📡 All Systems Online
          </div>
        </div>
      </div>

      {/* Status Cards Grid - Asymmetrical */}
      <div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em',
        }}>
          System Status
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
        }}>
          <StatCard
            title="Lead Scraper"
            status="unconfigured"
            icon="🕷️"
          />
          <StatCard
            title="SMS Campaigns"
            status="unconfigured"
            icon="💬"
          />
          <StatCard
            title="Appointment Booking"
            status="unconfigured"
            icon="📅"
          />
          <StatCard
            title="AI Model Router"
            status="unconfigured"
            icon="🤖"
          />
        </div>
      </div>

      {/* Tools Section */}
      <div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em',
        }}>
          Automation Tools
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          <ToolWidget
            icon="🕷️"
            title="Lead Scraper"
            description="Autonomous lead discovery from Google Maps and local business directories. Extract structured data (phone, name, location, reviews)."
            status="Idle"
            action="Configure"
          />
          <ToolWidget
            icon="💬"
            title="SMS Campaigns"
            description="Multi-step SMS sequences with Twilio integration. Track responses, auto-qualify leads, trigger booking flows."
            status="Idle"
            action="Setup"
          />
          <ToolWidget
            icon="📅"
            title="Cal.com Integration"
            description="Auto-book qualified leads directly into your calendar. Sync with Twilio responses for end-to-end automation."
            status="Idle"
            action="Connect"
          />
          <ToolWidget
            icon="🤖"
            title="AI Model Router"
            description="Route tasks to optimal models: GPT-5 Nano (budget), Gemini Flash (speed), Sonnet (reasoning). Save 80% on inference costs."
            status="Idle"
            action="Configure"
          />
        </div>
      </div>

      {/* Getting Started */}
      <div
        className="rounded-lg p-8"
        style={{
          background: 'linear-gradient(135deg, rgba(26,26,26,0.8) 0%, rgba(42,42,42,0.3) 100%)',
          border: '1px solid #3a3a3a',
          borderLeft: '4px solid #00d9ff',
        }}
      >
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.25rem',
          fontWeight: 700,
          marginBottom: '1rem',
          color: '#00d9ff',
          letterSpacing: '-0.02em',
        }}>
          Quick Start
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          color: '#b0b0b0',
          lineHeight: 1.8,
        }}>
          <div>
            <div style={{
              color: '#ff6b35',
              fontWeight: 700,
              marginBottom: '0.5rem',
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              1. Configure Scraper
            </div>
            <p>Set up lead extraction from target cities. Define business types, filters (reviews, population radius).</p>
          </div>
          <div>
            <div style={{
              color: '#ff6b35',
              fontWeight: 700,
              marginBottom: '0.5rem',
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              2. Launch SMS Campaign
            </div>
            <p>Connect Twilio. Create SMS templates. Set up automation flows. Start outreach to generated leads.</p>
          </div>
          <div>
            <div style={{
              color: '#ff6b35',
              fontWeight: 700,
              marginBottom: '0.5rem',
              fontSize: '0.875rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              3. Connect Cal.com
            </div>
            <p>Integrate appointment booking. Auto-book qualified leads. Track conversion from SMS → call → closed deal.</p>
          </div>
        </div>
      </div>

      {/* Metrics Placeholder */}
      <div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '1.5rem',
          letterSpacing: '-0.02em',
        }}>
          Key Metrics
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1rem',
        }}>
          <StatCard
            title="Leads This Week"
            value="—"
            subtitle="Not configured"
          />
          <StatCard
            title="SMS Conversion Rate"
            value="—"
            subtitle="Not configured"
          />
          <StatCard
            title="Appointments Booked"
            value="—"
            subtitle="Not configured"
          />
          <StatCard
            title="Model Cost/1K Tokens"
            value="—"
            subtitle="Not configured"
          />
        </div>
      </div>
    </div>
  );
}
