'use client';

interface ToolWidgetProps {
  title: string;
  description?: string;
  status?: string;
  action?: string;
  icon?: string;
}

export default function ToolWidget({ 
  title, 
  description, 
  status = 'Ready',
  action = 'View',
  icon = '⚙️',
}: ToolWidgetProps) {
  const statusColors: Record<string, string> = {
    'Running': '#ff6b35',
    'Ready': '#00d9ff',
    'Configured': '#00d9ff',
    'Error': '#ff4444',
    'Idle': '#808080',
  };

  const statusColor = statusColors[status] || '#808080';

  return (
    <div
      className="group transition-smooth relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(26,26,26,0.8) 0%, rgba(42,42,42,0.3) 100%)',
        border: '1.5px solid #3a3a3a',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        cursor: 'pointer',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = '#ff6b35';
        el.style.boxShadow = '0 12px 40px rgba(255, 107, 53, 0.2)';
        el.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = '#3a3a3a';
        el.style.boxShadow = 'none';
        el.style.transform = 'translateY(0)';
      }}
    >
      {/* Top Accent Bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '4px',
          background: `linear-gradient(90deg, ${statusColor}, transparent)`,
        }}
      />

      {/* Icon */}
      <div style={{
        fontSize: '2rem',
        marginBottom: '1rem',
        opacity: 0.8,
      }}>
        {icon}
      </div>

      {/* Title & Description */}
      <div className="flex-1">
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.25rem',
          fontWeight: 700,
          marginBottom: '0.5rem',
          color: '#ffffff',
          letterSpacing: '-0.02em',
        }}>
          {title}
        </h3>
        {description && (
          <p style={{
            color: '#b0b0b0',
            fontSize: '0.95rem',
            lineHeight: 1.5,
            marginBottom: '1.5rem',
          }}>
            {description}
          </p>
        )}
      </div>

      {/* Footer: Status & Action */}
      <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#3a3a3a' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <span
            style={{
              width: '6px',
              height: '6px',
              background: statusColor,
              borderRadius: '50%',
              animation: status === 'Running' ? 'pulse 2s ease-in-out infinite' : 'none',
            }}
          />
          <span style={{
            color: statusColor,
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}>
            {status}
          </span>
        </div>
        <button
          style={{
            color: '#ff6b35',
            fontSize: '0.875rem',
            fontWeight: 600,
            background: 'transparent',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = 'rgba(255, 107, 53, 0.1)';
            el.style.transform = 'translateX(4px)';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = 'transparent';
            el.style.transform = 'translateX(0)';
          }}
        >
          {action} <span>→</span>
        </button>
      </div>

      {/* Hover Gradient Effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 100% 0%, rgba(255, 107, 53, 0.1) 0%, transparent 60%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        }}
        className="group-hover:opacity-100"
      />
    </div>
  );
}
