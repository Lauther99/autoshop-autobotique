import React from 'react';
import { 
  HiOutlineInformationCircle, 
  HiOutlineCheckCircle, 
  HiOutlineExclamationCircle, 
  HiOutlineExclamationTriangle,
  HiXMark 
} from "react-icons/hi2"; // Usando Heroicons 2
import './toast_modules.css';

type ToastType = 'info' | 'success' | 'error' | 'warning';

interface ToastProps {
  title: string;
  message: string;
  type: ToastType;
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({ title, message, type, onClose }) => {
  
  // Mapeo de iconos según el tipo
  const getIcon = () => {
    switch (type) {
      case 'success': return <HiOutlineCheckCircle />;
      case 'error': return <HiOutlineExclamationCircle />;
      case 'warning': return <HiOutlineExclamationTriangle />;
      case 'info': 
      default: return <HiOutlineInformationCircle />;
    }
  };

  return (
    <div className={`toast-container toast-${type}`}>
      {/* Barra lateral decorativa */}
      <div className="toast-indicator" />

      {/* Icono Principal */}
      <div className="toast-icon-wrapper">
        {getIcon()}
      </div>

      {/* Contenido de texto */}
      <div className="toast-content">
        <h4 className="toast-title">{title}</h4>
        <p className="toast-message">{message}</p>
      </div>

      {/* Botón de cerrar */}
      <button className="toast-close-btn" onClick={onClose} aria-label="Close">
        <HiXMark size={20} />
      </button>
    </div>
  );
};

export default Toast;