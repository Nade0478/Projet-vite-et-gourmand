import React, { useEffect } from "react";

export default function Toast({
  message,
  type = "info",
  duration = 3000,
  onClose,
}) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const variants = {
    success: "bg-success text-white",
    error: "bg-danger text-white",
    info: "bg-primary text-white",
  };

  return (
    <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1055 }}>
      <div
        className={`toast show ${variants[type]}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-body">{message}</div>
      </div>
    </div>
  );
}
