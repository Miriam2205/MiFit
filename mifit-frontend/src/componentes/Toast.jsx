import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/feedback.css';

export const Toast = ({ isVisible, message, type = 'success', onClose, duration = 2500 }) => {
  useEffect(() => {
    if (!isVisible || !message) return undefined;

    const timer = window.setTimeout(() => {
      onClose();
    }, duration);

    return () => window.clearTimeout(timer);
  }, [duration, isVisible, message, onClose]);

  if (!isVisible || !message) return null;

  return (
    <div className={`toast toast-${type}`} role="status" aria-live="polite">
      <span>{message}</span>
      <button type="button" className="toast-close" onClick={onClose} aria-label="Cerrar mensaje">
        ×
      </button>
    </div>
  );
};

Toast.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'info']),
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
};

export default Toast;
