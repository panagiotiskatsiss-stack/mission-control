'use client';

interface StatCardProps {
  title: string;
  value?: string;
  subtitle?: string;
  trend?: string;
  icon?: string;
  status?: 'ready' | 'running' | 'error' | 'unconfigured';
}

export default function StatCard({ 
  title, 
  value, 
  subtitle, 
  trend, 
  icon,
  status = 'ready'
}: StatCardProps) {
  const statusColors = {
    ready: '#00d9ff',
    running: '#ff6b35',
    error: '#ff4444',
    unconfigured: '#808080',
  };

  return (
    <div
      className="group transition-smooth"
      style={{
        background: 'linear-gradient(135deg, rgba(26,26,26,0.8) 0%, rgba(26,26,26,0.4) 100%)',
        border: '1px solid #3a3a3a',
        borderRadius: '0.5rem',
        padding: '1.5rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = '#ff6b35';
        el.style.boxShadow = '0 8px 32px rgba(255, 107, 53, 0.15)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = '#3a3a3a';
        el.style.boxShadow = 'none';
      }}
    >
      {/* Top Accent Line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '3px',
          background: `linear-gradient(90deg, ${statusColors[status]}, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <p style={{
              color: '#808080',
              fontSize: '0.875rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>
              {title}
            </p>
          </div>
          {icon && <span style={{ fontSize: '1.5rem' }}>{icon}</span>}
        </div>

        {/* Value */}
        {value ? (
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '1rem',
            color: '#ffffff',
            letterSpacing: '-0.02em',
          }}>
            {value}
          </h3>
        ) : null}

        {/* Subtitle & Trend */}
        {(subtitle || trend) && (
          <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#3a3a3a' }}>
            <p style={{
              color: '#808080',
              fontSize: '0.875rem',
            }}>
              {subtitle}
            </p>
            {trend && (
              <p style={{
                color: '#00d9ff',
                fontSize: '0.875rem',
                fontWeight: 600,
              }}>
                {trend}
              </p>
            )}
          </div>
        )}

        {/* Status Indicator (if no value) */}
        {!value && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginTop: '1rem',
          }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                background: statusColors[status],
                borderRadius: '50%',
                animation: status === 'running' ? 'pulse 2s ease-in-out infinite' : 'none',
              }}
            />
            <span style={{
              color: statusColors[status],
              fontSize: '0.875rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </span>
          </div>
        )}
      </div>

      {/* Gradient Background on Hover */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 100% 100%, rgba(255, 107, 53, 0.05) 0%, transparent 70%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        }}
        className="group-hover:opacity-100"
      />
    </div>
  );
}
