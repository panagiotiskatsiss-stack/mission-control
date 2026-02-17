'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        router.push('/');
      } else {
        setError('Invalid password');
      }
    } catch (err) {
      setError('Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: '#0f0f0f',
      }}
    >
      {/* Animated background gradients */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 217, 255, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="w-full max-w-md relative z-10">
        {/* Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(26,26,26,0.9) 0%, rgba(26,26,26,0.6) 100%)',
            border: '1px solid #3a3a3a',
            borderRadius: '1rem',
            padding: '2rem',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                fontWeight: 700,
                marginBottom: '0.5rem',
                letterSpacing: '-0.02em',
              }}
            >
              ⚡ HERMES
            </h1>
            <p
              style={{
                color: '#b0b0b0',
                fontSize: '0.95rem',
                letterSpacing: '0.05em',
              }}
            >
              MISSION CONTROL
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#b0b0b0',
                  marginBottom: '0.75rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="•••••••••••"
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  background: '#1a1a1a',
                  border: '1px solid #3a3a3a',
                  borderRadius: '0.5rem',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-body)',
                  transition: 'all 0.2s ease',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#ff6b35';
                  e.currentTarget.style.boxShadow = '0 0 0 2px rgba(255, 107, 53, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#3a3a3a';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                required
                disabled={loading}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div
                style={{
                  background: 'rgba(255, 68, 68, 0.1)',
                  border: '1px solid #ff4444',
                  borderRadius: '0.5rem',
                  padding: '0.75rem 1rem',
                  fontSize: '0.875rem',
                  color: '#ff8888',
                }}
              >
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                background: loading ? '#808080' : '#ff6b35',
                color: loading ? '#b0b0b0' : '#0f0f0f',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                padding: '0.875rem 1rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontSize: '1rem',
                cursor: loading ? 'default' : 'pointer',
                transition: 'all 0.2s ease',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.currentTarget.style.background = '#ff8c42';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 107, 53, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (!loading) {
                  e.currentTarget.style.background = '#ff6b35';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              {loading ? 'Authenticating...' : 'Enter Mission Control'}
            </button>
          </form>

          {/* Footer */}
          <p
            style={{
              fontSize: '0.75rem',
              color: '#808080',
              textAlign: 'center',
              marginTop: '2rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Authorized Personnel Only
          </p>
        </div>

        {/* Accent line */}
        <div
          style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #ff6b35, transparent)',
            marginTop: '2rem',
            opacity: 0.5,
          }}
        />
      </div>
    </div>
  );
}
