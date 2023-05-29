import React from 'react'
import { useNavigate } from "react-router-dom";
import '../../../scss/map.scss'

export const Clients = () => {
  const navigate = useNavigate();
  return (
    <div className="Container">
      <h1>Metodología</h1>
      <div className="datos">
        <form>
          <div className="form-group">
            <label>Nombre Metodología:</label>
            <input type="text" name="name_met" placeholder="Nombre Metodología" />
          </div>

          <div className="form-group">
            <label>Numero de Fases:</label>
            <input type="number" name="num_fases" min={0} max={5} />
          </div>

          <div className="form-group">
            <label>Nombre de la Fase:</label>
            <input type="text" name="name_fase" placeholder="Nombre de la Fase" />
          </div>

          <div className='form-group form-buttons'>
            <input type="button" value="Continuar" onClick={() => navigate("/admin/menu")}/>
            <input type="reset" value="Limpiar" />
          </div>
        </form>
      </div>
    </div>
  )
}