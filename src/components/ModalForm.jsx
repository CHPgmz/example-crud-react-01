import React, { useState } from "react";
import '../styles/ModalForm.css';

export function ModalForm({cliente, editar, modal}) {
  const [client, setClient] = useState(cliente);
  const {hideModal} = modal;

  const handleChange = (e) => {
    const {name, value} = e.target;
    setClient({...client, [name]: value});
    //console.log(client);
  }

  const handleSumit = (e) => {
    e.preventDefault();
    editar(client);
    console.log(client);
  }
  return (
    <form className="modal-form" onSubmit={handleSumit}>
      <label htmlFor='firstname'>Nombre</label>
      <input
        type='text'
        name='firstname'
        value={client.firstname}
        onChange={handleChange}
      />

      <label htmlFor='lastname'>Apellidos</label>
      <input
        type='text'
        name='lastname'
        value={client.lastname}
        onChange={handleChange}
      />

      <label htmlFor='phone'>Telefono</label>
      <input
        type='tel'
        name='phone'
        value={client.phone}
        onChange={handleChange}
      />

      <label htmlFor='age'>Edad</label>
      <input
        type='number'
        name='age'
        value={client.age}
        onChange={handleChange}
      />
      <div className='modal-form-actions'>
        <button className='modal-btn-editar'  type='submit'>Editar</button>
        <button className='modal-btn-cancelar' onClick={()=> hideModal()} type="reset">Cancelar</button>
      </div>
    </form>
  );
}
