import React from "react";
import '../styles/ModalForm.css';

export function ModalForm({cliente, onchange, editar, modal}) {

  const { hideModal } = modal;
  return (
    <form className="modal-form" >
      <label htmlFor='firstname'>Nombre</label>
      <input
        type='text'
        name='firstname'
        defaultValue={ cliente.firstname}
        onChange={onchange}
      />

      <label htmlFor='lastname'>Apellidos</label>
      <input
        type='text'
        name='lastname'
        defaultValue={cliente.lastname}
        onChange={onchange}
      />

      <label htmlFor='phone'>Telefono</label>
      <input
        type='tel'
        name='phone'
        defaultValue={cliente.phone}
        onChange={onchange}
      />

      <label htmlFor='age'>Edad</label>
      <input
        type='number'
        name='age'
        defaultValue={cliente.age}
        onChange={onchange}
      />
      <div className='modal-form-actions'>
        <button className='modal-btn-editar' onClick={() => editar() } type='submit'>Editar</button>
        <button className='modal-btn-cancelar' onClick={()=> hideModal()}>Cancelar</button>
      </div>
    </form>
  );
}
