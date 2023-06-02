import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import AdsComponent from './AdsComponent';
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
      <div id='contenedor' className='w-1/2 mx-auto my-12 max-sm:w-full max-sm:px-10' >
        <div className="title mb-4">
          <h1 className='font-bold text-xl'>Datos de a quien va dirigido</h1>
          <p>En esta sección ingresa los datos de la persona a quien va dirigido el certificado de honorabilidad</p>
        </div>
        
        <div id="firstForm" className="grid grid-cols-2 grid-rows-2 mb-7 gap-4 max-sm:grid-cols-1">
          <section>
            <label htmlFor="NombreDestino" className='text-sm'>Nombres y Apellidos</label><br />
            <input className='text-sm border border-gray-400 px-1 py-2 rounded-md w-4/5 mt-2' type="text" name="NombreDestino" id="NombreDestino" value={nombreDestino} onChange={handleNombreDestinoChange} />
          </section>
          <section>
            <label htmlFor="CedulaDestino" className='text-sm'>Cédula de identidad</label><br />
            <input className='text-sm border border-gray-400 px-1 py-2 rounded-md w-full mt-2 max-sm:w-4/5' type="number" name="CedulaDestino" id="CedulaDestino" value={cedulaDestino} onChange={handleCedulaDestinoChange}/>

          </section>
          <section>
            <label htmlFor="yearsDestino" className='text-sm'>Años que se llevan conociendo</label><br />
            <input className='text-sm border border-gray-400 px-1 py-2 rounded-md w-4/5 mt-2' type="number" name="yearsDestino" id="yearsDestino" value={yearsDestino} onChange={handleYearsDestinoChange} />
          </section>
        </div>

        <hr />
      <div className="title mt-5 mb-4">
          <h1 className='font-bold text-xl'>Firma del Certificado de Honorabilidad</h1>
          <p>Ingresa los datos de la persona que certifica</p>
      </div>

      <div id="secondForm" className="grid grid-cols-2 grid-rows-3 gap-4 max-sm:grid-cols-1">
        <section>
          <label htmlFor="NombreFirma" className='text-sm'>Nombres y Apellidos</label><br />
          <input className='text-sm border border-gray-400 px-1 py-2 rounded-md w-4/5 mt-2' type="text" name="NombreFirma" id="NombreFirma" value={nombreFirma} onChange={handleNombreFirmaChange} />
        </section>
        <section>
        <label htmlFor="CedulaFirma" className='text-sm'>Cédula de identidad</label><br />
          <input className='text-sm border border-gray-400 px-1 py-2 rounded-md w-full mt-2 max-sm:w-4/5' type="number" name="CedulaFirma" id="CedulaFirma" value={cedulaFirma} onChange={handleCedulaFirmaChange}/>
        </section>
        <section>
          <label htmlFor="Empresa" className='text-sm'>Empresa</label><br />
          <input className='text-sm border border-gray-400 px-1 py-2 rounded-md w-4/5 mt-2' type="text" name="Empresa" id="Empresa" value={empresa} onChange={handleEmpresaChange} />
        </section>
        <section>
        <label htmlFor="Cargo" className='text-sm'>Cargo</label><br />
          <input className='text-sm border border-gray-400 px-1 py-2 rounded-md w-full mt-2 max-sm:w-4/5' type="text" name="Cargo" id="Cargo" value={cargo} 
          onChange={handleCargoChange}/>
        </section>
        <section>
        <label htmlFor="Telefono" className='text-sm'>Teléfono</label><br />
          <input className='text-sm border border-gray-400 px-1 py-2 rounded-md w-4/5 mt-2' type="number" name="Telefono" id="Telefono" value={telefono}  onChange={handleTelefonoChange}/>
        </section>
      </div>

      <div className='my-6 mx-auto flex items-center' style={{backgroundColor:'#F3F4F6',width:'300px',height:'250px'}}>
        <AdsComponent dataAdSlot='1726104819' />
      </div>
      <Link to="generar-certificado-honorabilidad/previsualizar" state={form}>
      <button className='bg-blue-600 text-white py-2 px-4 rounded w-full mx-auto font-medium'>Generar Certificado</button>
        </Link>
      </div>
    );
  };

export default Formulario
