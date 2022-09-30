import { useState } from "react";
import { ModalForm } from "./ModalForm";
import { ModalEditar } from "./Modal";

export const TablaClientes = ({ operations }) => {
  
  const {cliente: clientes,
    modalEditar,
    modalEliminar,
    seleccionarCliente,
    clienteSelect,
    editar,
    eliminarCliente
  } = operations;
  
  return (
    <>
      <table className='table-clientes'>
        <thead className='table-head'>
          <tr>
            <th className='table-id'>ID</th>
            <th className='table-cnt'>Nombre</th>
            <th className='table-cnt'>Apellidos</th>
            <th className='table-cnt'>Telefono</th>
            <th className='table-cnt'>Acciones</th>
          </tr>
        </thead>
        <tbody className='tbody'>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td className='table-id'>{cliente.id}</td>
              <td className='table-cnt'>{cliente.firstname}</td>
              <td className='table-cnt'>{cliente.lastname}</td>
              <td className='table-cnt'>{cliente.phone}</td>
              <td className='table-cnt table-actions'>
                <button
                  className='btn-editar'
                  onClick={() => seleccionarCliente("Editar", cliente)}
                >
                  Editar
                </button>
                <button
                  className='btn-eliminar'
                  onClick={() => seleccionarCliente("Eliminar", cliente)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalEditar
        title='Editar Datos'
        modal={modalEditar}
        caso='Editar'
      >
        <div className='contenido'>
          <ModalForm
            cliente={clienteSelect}
  //          onchange={handleChange}
            editar={editar}
            modal={modalEditar}
          />
        </div>
      </ModalEditar>

      <ModalEditar
        title='Eliminar Cliente'
        modal={modalEliminar}
        caso='Eliminar'
      >
        <div className='contenido-eliminar'>
          <button onClick={() => eliminarCliente(clienteSelect.id)}>Eliminar</button>
        </div>
      </ModalEditar>
    </>
  );
};
