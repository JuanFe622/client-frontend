import React from "react";
import { useNavigate } from "react-router-dom";
import '../../../scss/map.scss'

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="Container">
      <h1>Asignaturas</h1>
      <div className="datos">
        <form>
          <div className="form-group">
            <label>Código asignatura:</label>
            <input
              type="text"
              name="cod_asig"
              placeholder="Código asignatura"
            />
          </div>

          <div className="form-group">
            <label>Nombre asignatura:</label>
            <input
              type="text"
              name="name_asig"
              placeholder="Nombre asignatura"
            />
          </div>

          <div className="form-group">
            <label>Numero de Creditos:</label>
            <input type="number" name="num_creditos" min={0} max={4} />
          </div>

          <div className='form-group form-buttons'>
            <input type="button" value="Continuar" onClick={() => navigate("/admin/clients")}/>
            <input type="reset" value="Limpiar" />
          </div>
        </form>
      </div>
    </div>
  );
};
