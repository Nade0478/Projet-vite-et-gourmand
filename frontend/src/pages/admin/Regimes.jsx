import React, { useState } from "react";
import PlatList from "../../components/plats/PlatList";
import PlatEditor from "../../components/plats/PlatEditor";
import Modal from "../../components/ui/Modal";
import Button from "../../components/ui/Button";
import Toast from "../../components/ui/Toast";

export default function Plats() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(null);

  return (
    <div className="container mt-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold">Plats</h1>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Ajouter
        </Button>
      </div>

      {/* Liste des plats */}
      <PlatList />

      {/* Modal création */}
      <Modal open={open} onClose={() => setOpen(false)} title="Créer un plat">
        <PlatEditor
          onSubmit={() => {
            setToast({ message: "Plat créé", type: "success" });
            setOpen(false);
          }}
        />
      </Modal>

      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
