import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Modal.css";
export const ModalEditar = ({title, children, modal, caso}) => {

  const { estadoModal: estado, hideModal } = modal;
  return (
    <>
      {estado && (
        <div className={(caso == 'Editar') ? 'Overlay' : 'OverlayDelete'}>
          <div className={(caso == 'Editar') ? 'container-modal' : 'container-delete'}>
            <header className='header'>
              <h3>{title}</h3>
            </header>
            <button className='close' onClick={() => hideModal()}>
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

{
  /*<div className="contenido">
    </div>*/
}
