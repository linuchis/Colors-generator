import React, { useState } from 'react';
import './styles.css';
import UploadLogo from '../../assets/Forms/upload_logo.svg';

const FileUpload = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className={`upload-container ${isDragging ? 'dragging' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        console.log("Archivos recibidos:", e.dataTransfer.files);
      }}
    >
      <div className="upload-content">
        {/* Icono de Nube con Flecha (SVG) */}
        <div className="upload-icon">
          <img src={UploadLogo} alt="Upload Icon" />
        </div>
        <p className="upload-text">Drag an image here or upload a file</p>
      </div>
    </div>
  );
};

export default FileUpload;