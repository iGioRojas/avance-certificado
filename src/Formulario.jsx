import { useState } from 'react'
import {Link} from 'react-router-dom';

import './Formulario.css'

const Formulario = () => {
    const [nombreDestino, setNombreDestino] = useState('');
    const [cedulaDestino, setCedulaDestino] = useState('');
    const [yearsDestino, setYearsDestino] = useState('');
    const [nombreFirma, setNombreFirma] = useState('');
    const [cedulaFirma, setCedulaFirma] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');
  
    const handleNombreDestinoChange = (event) => {
      setNombreDestino(event.target.value);
    };
  
    const handleCedulaDestinoChange = (event) => {
      setCedulaDestino(event.target.value);
    };

    const handleYearsDestinoChange = (event) => {
      setYearsDestino(event.target.value);
    };
  
    const handleNombreFirmaChange = (event) => {
      setNombreFirma(event.target.value);
    };
    const handleCedulaFirmaChange = (event) => {
      setCedulaFirma(event.target.value);
    };
  
    const handleEmpresaChange = (event) => {
      setEmpresa(event.target.value);
    };

    const handleCargoChange = (event) => {
      setCargo(event.target.value);
    };
  
    const handleTelefonoChange = (event) => {
      setTelefono(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes hacer algo con los valores del formulario, como enviarlos a un servidor
      console.log('Nombre:', nombreDestino);
      console.log('Cedula:', cedulaDestino);
      console.log('Años:', yearsDestino);
      console.log('Cedula:', cedulaFirma);
      console.log('Nombre:', nombreFirma);
      console.log('Empresa:', empresa);
      console.log('Cargo:', cargo);
      console.log('Telefono',telefono);
    };

    let form = {
      nombreDestino:nombreDestino,
      cedulaDestino:cedulaDestino,
      yearsDestino:yearsDestino,
      nombreFirma:nombreFirma,
      cedulaFirma:cedulaFirma,
      empresa:empresa,
      cargo:cargo,
      telefono:telefono
    }
  
    return (
      <div id='contenedor' className='w-1/2 mx-auto my-12' >
        <div className="title mb-4">
          <h1 className='font-bold text-xl'>Datos de a quien va dirigido</h1>
          <p>En esta sección ingresa los datos de la persona a quien va dirigido el certificado de honorabilidad</p>
        </div>
        
        <div id="firstForm" className="grid grid-cols-2 grid-rows-2 mb-7 gap-4 max-sm:grid-cols-1">
          <section>
            <label htmlFor="NombreDestino" className='font-bold'>Nombres y Apellidos</label><br />
            <input className='border border-gray-400 px-1 py-2 rounded-md w-4/5 mt-2' type="text" name="NombreDestino" id="NombreDestino" value={nombreDestino} onChange={handleNombreDestinoChange} />
          </section>
          <section>
            <label htmlFor="CedulaDestino" className='font-bold'>Cédula de identidad</label><br />
            <input className='border border-gray-400 px-1 py-2 rounded-md w-full mt-2 max-sm:w-4/5' type="text" name="CedulaDestino" id="CedulaDestino" value={cedulaDestino} onChange={handleCedulaDestinoChange}/>

          </section>
          <section>
            <label htmlFor="yearsDestino" className='font-bold'>Años que se llevan conociendo</label><br />
            <input className='border border-gray-400 px-1 py-2 rounded-md w-4/5 mt-2' type="text" name="yearsDestino" id="yearsDestino" value={yearsDestino} onChange={handleYearsDestinoChange} />
          </section>
        </div>

        <hr />
      <div className="title mt-5 mb-4">
          <h1 className='font-bold text-xl'>Firma del Certificado de Honorabilidad</h1>
          <p>Ingresa los datos de la persona que certifica</p>
      </div>

      <div id="secondForm" className="grid grid-cols-2 grid-rows-3 gap-4 max-sm:grid-cols-1">
        <section>
          <label htmlFor="NombreFirma" className='font-bold'>Nombres y Apellidos</label><br />
          <input className='border border-gray-400 px-1 py-2 rounded-md w-4/5 mt-2' type="text" name="NombreFirma" id="NombreFirma" value={nombreFirma} onChange={handleNombreFirmaChange} />
        </section>
        <section>
        <label htmlFor="CedulaFirma" className='font-bold'>Cédula de identidad</label><br />
          <input className='border border-gray-400 px-1 py-2 rounded-md w-full mt-2 max-sm:w-4/5' type="text" name="CedulaFirma" id="CedulaFirma" value={cedulaFirma} onChange={handleCedulaFirmaChange}/>
        </section>
        <section>
          <label htmlFor="Empresa" className='font-bold'>Empresa</label><br />
          <input className='border border-gray-400 px-1 py-2 rounded-md w-4/5 mt-2' type="text" name="Empresa" id="Empresa" value={empresa} onChange={handleEmpresaChange} />
        </section>
        <section>
        <label htmlFor="Cargo" className='font-bold'>Cargo</label><br />
          <input className='border border-gray-400 px-1 py-2 rounded-md w-full mt-2 max-sm:w-4/5' type="text" name="Cargo" id="Cargo" value={cargo} 
          onChange={handleCargoChange}/>
        </section>
        <section>
        <label htmlFor="Telefono" className='font-bold'>Teléfono</label><br />
          <input className='border border-gray-400 px-1 py-2 rounded-md w-4/5 mt-2' type="number" name="Telefono" id="Telefono" value={telefono}  onChange={handleTelefonoChange}/>
        </section>
      </div>

      <div className='bg-emerald-500 w-100 h-80 text-center pt-10 my-10'>
        &nbsp;
        Publicidad
      </div>
      <Link to="/previsualizar" state={form}>
      <button className='bg-blue-600 text-white py-2 px-4 rounded w-full mx-auto font-medium'>Generar Certificado</button>
        </Link>
      </div>
    );
  };

export default Formulario
