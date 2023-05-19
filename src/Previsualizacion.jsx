import { useLocation , Link} from "react-router-dom";
import html2pdf from 'html2pdf.js';

const Previsualizar = (props) => {
  const plantillaCertificado = `<div id="certificado" style="width: 800px; margin:0 auto; padding: 30px;">
                                <div style="text-align:right">%%FECHA_ACTUAL%%</div>
                                <p style="text-align:center;font-weight:bold;font-size:32px;margin-top:12px">CERTIFICADO DE HONORABILIDAD</p>
                                <p style="text-align:center; margin:15px 0">A petición verbal de la parte interesada, en debida y legal forma,</p>
                                <p style="text-align:center; margin:20px 0">CERTIFICO:</p>
                                <p style="text-align:justify;">Que, conozco al Sr/a. <span style="text-decoration: underline dotted;"><b>%%NOMBRE_DESTINO%%</b></span>, con cédula de ciudadanía número <span style="text-decoration: underline dotted;"><b>%%CEDULA_DESTINO%%</b></span>, desde hace <span style="text-decoration: underline dotted;"><b>%%ANIO_DESTINO%%</b></span> año/s atrás, tiempo durante el cual ha demostrado responsabilidad, respeto y una conducta intachable, valores que le han hecho merecedor del aprecio y consideración de quienes tenemos la oportunidad de tratarle. <br></br>
                                Es todo cuanto certificar en honor a la verdad, facultando al interesado hacer uso del presente en lo que creyere conveniente dentro de los límites legales.
                                </p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />

                                
                                <b>Atentamente</b>
                                <p>%%NOMBRE_FIRMA%%</p>
                                <p>Cédula %%CEDULA_FIRMA%%</p>
                                <p>%%EMPRESA%% / %%CARGO%%</p>
                                <br />
                                
                                <p>Celular %%CELULAR%%</p>
                                </div>`;

    const location = useLocation();
    const formulario = location.state;
    const opciones = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    };

    const punteado = {
      textDecoration: 'underline',
      textDecorationStyle: 'dotted',
    };
    const fechaActual = new Date().toLocaleDateString('es-ES', opciones);
    const reemplazos = {
      '%%FECHA_ACTUAL%%': fechaActual,
      '%%NOMBRE_DESTINO%%': formulario.nombreDestino,
      '%%CEDULA_DESTINO%%': formulario.cedulaDestino,
      '%%ANIO_DESTINO%%': formulario.yearsDestino,
      '%%NOMBRE_FIRMA%%': formulario.nombreFirma,
      '%%CEDULA_FIRMA%%': formulario.cedulaFirma,
      '%%EMPRESA%%': formulario.empresa,
      '%%CARGO%%': formulario.cargo,
      '%%CELULAR%%': formulario.telefono,
    };
    
    let plantilla = plantillaCertificado;
    for (const key in reemplazos) {
      plantilla = plantilla.replace(key, reemplazos[key]);
    }

    const handleDownloadPDF = () => {
      html2pdf()
        .from(plantilla)
        .save('documento.pdf');
    };

    const handleDownloadWord = () => {
      var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
      var postHtml = "</body></html>";
      var html = preHtml+plantilla+postHtml;
  
      var blob = new Blob(['ufeff', html], {
          type: 'application/msword'
      });
      
      var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
      
      let filename = "document.doc";
      
      var downloadLink = document.createElement("a");
  
      document.body.appendChild(downloadLink);
      
      if(navigator.msSaveOrOpenBlob ){
          navigator.msSaveOrOpenBlob(blob, filename);
      }else{
          downloadLink.href = url;
          downloadLink.download = filename;
          downloadLink.click();
      }
      
      document.body.removeChild(downloadLink);
    };

    return (
      <>
      <div id="contenedorPrevisualizar" className="bg-sky-50 p-12 overflow-x-scroll">
        <div id="certificado" className="bg-white p-8 mx-auto" style={{width:'750px'}}>
          <div className="text-right">{fechaActual}</div>
            <h1 className="text-center font-bold my-3">CERTIFICADO DE HONORABILIDAD</h1>
            <p className="text-center my-3">A petición verbal de la parte interesada, en debida y legal forma,</p>
            <p className="text-center my-5">CERTIFICO:</p>
            <p className="text-justify">Que, conozco al Sr/a. <span style={punteado}><b>{formulario.nombreDestino}</b></span>, con cédula de ciudadanía número <span style={punteado}><b>{formulario.cedulaDestino}</b></span>, desde hace <span style={punteado}><b>{formulario.yearsDestino}</b></span> año/s atrás, tiempo durante el cual ha demostrado responsabilidad, respeto y una conducta intachable, valores que le han hecho merecedor del aprecio y consideración de quienes tenemos la oportunidad de tratarle. <br></br><br></br>
          Es todo cuanto certificar en honor a la verdad, facultando al interesado hacer uso del presente en lo que creyere conveniente dentro de los límites legales.
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <b>Atentamente</b>
            <p>{formulario.nombreFirma}</p>
            <p>Cédula {formulario.cedulaFirma}</p>
            <p>{formulario.empresa +"/"+formulario.cargo}</p>
            <br />
            <br />

            <p>Celular {formulario.telefono}</p>
          </div>
        </div>        
      <div id="contenedor" className='w-1/2 mx-auto my-12'>
        <div className='bg-emerald-500 w-100 h-80 text-center pt-10 my-10'>
          &nbsp;
          Publicidad
        </div>

        <div className="flex flex-col items-center">
        <button className='bg-blue-600 text-white py-2 px-4 rounded w-1/3 font-medium mb-2 max-sm:w-full' onClick={handleDownloadWord}>Descargar en Word</button>
        <button className='bg-blue-600 text-white py-2 px-4 rounded w-1/3 font-medium my-2 max-sm:w-full' onClick={handleDownloadPDF}>Descargar en PDF</button>
        <Link to="/" className="text-blue-600 font-medium">
        Crear un nuevo certificado
          </Link>
        </div>
      </div>
      </>

    );
  };

export default Previsualizar
