import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../styles/Formulario.css";

export const Formulario = ({
  clientes, guardarCliente
}) => {
  const [cliente, setCliente] = useState({
    id: "",
    firstname: "",
    lastname: "",
    phone: "",
    age: "",
  });

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      id: "",
      firstname: "",
      lastname: "",
      phone: "",
      age: "",
    },
  });

  const onSubmit = data => {
    data.id = clientes.length + 1;
    guardarCliente(data);
  };
  
  useEffect(()=> {
    if(formState.isSubmitSuccessful){
      reset();
    }
  }, [formState, onSubmit, reset]);

  return (
    <div className='cnt-form'>
      <h2 id='title-form'>Formulario</h2>
      <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor=''>Nombre</label>
        <input
          type='text'
          name='firstname'
          {...register("firstname", { required: true })}
          defaultValue={cliente.firstname}
        />

        <label htmlFor='lastname'>Apellidos</label>
        <input
          type='text'
          name='lastname'
          {...register("lastname", {required: true})}
          defaultValue={cliente.lastname}
        />

        <label htmlFor='phone'>Telefono</label>
        <input
          type='tel'
          name='phone'
          {...register("phone", { required:true })}
          defaultValue={cliente.phone}
        />

        <label htmlFor='age'>Edad</label>
        <input
          type='number'
          name='age'
          {...register("age", { required: true })}
          defaultValue={cliente.age}
        />

        <div className='options-form'>
          <button id='save' type='submit'>
            Guardar
          </button>
          <button
            id='cancel'
            type='reset'
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
