import React, {useState } from "react";
import { Header } from "./components/Header";
import "./App.css";
import { Formulario } from "./components/Formulario";
import { ClientesTodo } from "./components/ClientesTodo";
import {Clientes} from "./datos";

function useModal() {
  const [estadoModal, setEstadoModal] = useState(false);

  const activeModal = () => {
    setEstadoModal(true);
  }

  const hideModal = () => {
    setEstadoModal(false);
  }

  return {
    estadoModal,
    activeModal,
    hideModal
  }
}

function useHookCliente() {

  const modalEditar = useModal();
  const modalEliminar = useModal();
  const [cliente, setClienteNuevo] = useState(Clientes);
  const [clienteSelect, setClienteSelect] = useState({
    id: "",
    firstname: "",
    lastname: "",
    phone: "",
    age: "",
  });

  const seleccionarCliente = (caso, datos) => {
    //console.log(datos);
    setClienteSelect(datos);
    caso == "Editar"
      ? modalEditar.activeModal()
      : modalEliminar.activeModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClienteSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    //console.log(clienteSelect);
  };

  const editar = (data) => {
    let dataNueva = cliente;
    dataNueva.map((cliente) => {
      if (cliente.id === data.id) {
        cliente.firstname = data.firstname;
        cliente.lastname = data.lastname;
        cliente.phone = data.phone;
        cliente.age = data.age;
      }
    });
    setClienteNuevo(dataNueva);
    modalEditar.hideModal();
  };
  

  const addCliente = (datoEnviado) => {
    const nuevoCliente = [...cliente, datoEnviado];
    setClienteNuevo(nuevoCliente);
  };

  const eliminarCliente = (id) => {
    const dlt = cliente.filter((cnt) => cnt.id != id);
    setClienteNuevo(dlt);
    modalEliminar.hideModal();
  };
  
  return {
    modalEditar,
    modalEliminar,
    seleccionarCliente,
    clienteSelect,
    handleChange,
    editar,
    cliente,
    addCliente,
    eliminarCliente,
  }
}

function App() { 

  const clienteOperations = useHookCliente();

  return (
    <div className='App'>
      <Header />
      <div className='cnt-cliente'>
        <Formulario
          guardarCliente={clienteOperations.addCliente}
          clientes={clienteOperations.cliente}
        />

        <ClientesTodo
          operations={clienteOperations}
        />
      </div>
      {/*<ModalEditar modalOpen={modalEditar} modal={cerraModal}/> */}
    </div>
  );
}

export default App;
