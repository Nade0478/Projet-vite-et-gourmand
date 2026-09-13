import React from "react";

export default function Loader({ size = 32 }) {
  return (
    <div className="d-flex justify-content-center align-items-center py-4">
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: size, height: size }}
      >
        <span className="visually-hidden">Chargement...</span>
      </div>
    </div>
  );
}
