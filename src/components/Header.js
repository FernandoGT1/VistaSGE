import React from 'react';
import './Headers.css';

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">SGE | UT</div>
        <nav>
          <ul>
            <li><a href="#">Gestión de Estadía</a></li>
            <li><a href="#">Proyecto</a></li>
            <li><a href="#">Calendario</a></li>
            <li><a href="#">Documentos</a></li>
            <li><a href="#">Control de Documentos</a></li>
          </ul>
        </nav>
        <div className="profile-circle"></div>
      </div>
      <div className="student-header">
        <div className="header-text">Control de Documento del Alumno</div>
      </div>
      <div className="student-info">
        <div className="input-section">
          <label htmlFor="matricula">Matrícula del Alumno:</label>
          <input type="text" id="matricula" name="matricula" />
        </div>
        <div className="input-section">
          <label htmlFor="nombre">Nombre del Alumno:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
      </div>
      <div className="project-section">
        <div className="project-objective">
          <h3>Objetivos general del Proyecto</h3>
          <textarea rows="4" cols="50"></textarea>
        </div>
        <div className="edit">
          <span role="img" aria-label="pencil">✏️</span> Editar
        </div>
        <div className="download">
          Descargar
        </div>
      </div>
    </div>
  );
};

export default Header;
