import { useState } from "react";

import { Modal } from "./Modal";

export function ButtonWithConfirmation({
  children,
  confirmText,
  confirmButtonText,
  style,
  onClick,
}: {
  children: React.ReactNode;
  confirmText: string;
  confirmButtonText?: string;
  style?: React.CSSProperties;
  onClick: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)} style={style}>
        {children}
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h3>確認</h3>
        <p>{confirmText}</p>
        <button onClick={onClick}>{confirmButtonText}</button>
      </Modal>
    </div>
  );
}
