import './index.css';


const Citas = ({ setCitas, citas }) => {
    const eliminarCitas = (gid) => {
        citas = citas.filter(cita => cita.id != gid);
        setCitas([...citas]);
    }

  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>

      {citas.map((cita, index) => (
        <div className="cita" key={index}>
          <p>Mascota: <span>{cita.nombre}</span></p> 
          <p>Dueño: <span>{cita.propietario}</span></p>
          <p>Fecha: <span>{cita.fecha}</span></p>
          <p>Hora: <span>{cita.hora}</span></p>
          <p>Síntomas: <span>{cita.sintomas}</span></p>
          <button className="button eliminar u-full-width" onClick= {(e) => { eliminarCitas(cita.id) }} >Eliminar X </button>
        </div>
      ))}
    </div>
  );
};


export default Citas;