import React from 'react';

/**
 * PUBLIC_INTERFACE
 * ErrorBoundary - Catches render errors and displays a friendly message.
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
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error:', error, info);
  }
  handleReload = () => {
    window.location.reload();
  };
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-outer">
          <div className="error-card">
            <h3 className="error-title">⚠️ Something went wrong</h3>
            <p className="helper">An unexpected error occurred while rendering the page.</p>
            <div className="error-actions">
              <button className="btn" onClick={this.handleReload}>Reload</button>
              <a className="btn secondary" href="/">Go Home</a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
