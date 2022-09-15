import "../styles/ClientesTodo.css";
import {TablaClientes} from "./TablaClientes";

export const ClientesTodo = ({
  operations
}) => {

  const {cliente: clientes} = operations;
  //  console.log(clientes.length);
  if (clientes.length !== 0) {
    return (
      <div className='cnt-clientes'>
        <h1 id='clt'>Clientes Registrados</h1>
        <section className='clientes-todo'>
          <TablaClientes
            operations={operations}
          />
        </section>
      </div>
    );
  } else {
    return (
      <div className='cnt-clientes'>
        <h1 id='clt'>Clientes Registrados</h1>
        <section className='clientes-todo'>
          <p>Sin clientes Registrados</p>
        </section>
      </div>
    );
  }
};

