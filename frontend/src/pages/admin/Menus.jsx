import React, { useState } from "react";
import MenuList from "../../components/menus/MenuList";
import MenuEditor from "../../components/menus/MenuEditor";
import Modal from "../../components/ui/Modal";
import Button from "../../components/ui/Button";
import Toast from "../../components/ui/Toast";

export default function Menus() {
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(null);

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold">Menus</h1>
        <Button variant="primary" onClick={() => setOpen(true)}>
          Ajouter
        </Button>
      </div>

      {/* Liste des menus */}
      <MenuList />

      {/* Modal création */}
      <Modal open={open} onClose={() => setOpen(false)} title="Créer un menu">
        <MenuEditor
          onSubmit={() => {
            setToast({ message: "Menu créé", type: "success" });
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
