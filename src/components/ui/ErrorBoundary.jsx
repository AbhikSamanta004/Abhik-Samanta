import React from 'react';

/**
 * ErrorBoundary
 * Catches render errors and shows a readable message
 * instead of a silent white page.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('Portfolio render error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          background: '#080c14',
          color: '#f1f5f9',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'monospace',
          padding: '2rem',
          gap: '1rem',
        }}>
          <div style={{ fontSize: '2rem' }}>⚠️</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#6366f1' }}>
            Something went wrong
          </div>
          <pre style={{
            background: '#0d1220',
            border: '1px solid rgba(99,102,241,0.3)',
            borderRadius: '10px',
            padding: '1rem 1.5rem',
            fontSize: '0.8rem',
            color: '#94a3b8',
            maxWidth: '600px',
            overflowX: 'auto',
            whiteSpace: 'pre-wrap',
          }}>
            {this.state.error?.message}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: '#6366f1',
              color: '#fff',
              border: 'none',
              padding: '10px 24px',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              cursor: 'pointer',
            }}
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
