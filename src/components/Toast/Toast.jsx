import React, { useEffect, useState } from "react";
import "./Toast.css";

const ICONS = {
  success: "✅",
  error: "❌",
  warning: "⚠️",
  info: "ℹ️",
};

const Toast = ({ id, message, type = "info", onClose, duration = 3000 }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsRemoving(true);
    // Esperar a que termine la animación antes de eliminarlo del DOM
    setTimeout(() => {
      onClose(id);
    }, 300); // 300ms coincide con la duración de la animación en CSS
  };

  return (
    <div className={`toast toast-${type} ${isRemoving ? "removing" : ""}`}>
      <div className="toast-content">
        <span className="toast-icon">{ICONS[type] || ICONS.info}</span>
        <span className="toast-message">{message}</span>
      </div>
      <button className="toast-close-btn" onClick={handleClose} aria-label="Cerrar notificación">
        ✕
      </button>
    </div>
  );
};

export default Toast;
