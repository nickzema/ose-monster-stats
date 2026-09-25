import { useEffect } from "react";
import type { ReactNode } from "react";

interface Props {
  title: ReactNode;
  onClose: () => void;
  footer?: ReactNode;
  wide?: boolean;
  children?: ReactNode;
}

export default function Modal({ title, onClose, footer, wide, children }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={`modal-box${wide ? " wide" : ""}`}>
        <div className="modal-head">
          <p className="modal-title">{title}</p>
          <button className="modal-close" title="Close" onClick={onClose}>&times;</button>
        </div>
        {children && <div className="modal-body">{children}</div>}
        {footer && <div className="modal-actions">{footer}</div>}
      </div>
    </div>
  );
}

export function BrandFooter() {
  return (
    <div className="brand-footer">
      <img src="/zemaria-icon.png" alt="" />
      <span>Another Zemaria product</span>
    </div>
  );
}
