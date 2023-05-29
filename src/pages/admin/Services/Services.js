import React from 'react'
import { useNavigate } from "react-router-dom";
import '../../../scss/map.scss'

export const Services = () => {
  const navigate = useNavigate();
  return (
    <div className='Container'>
        <h1>Asignaturas -{'>'} Metodología</h1>
        <div className='datos'>
            <form>
                <div className='form-group'>
                    <label>Asignatura:</label>
                    <select name='asignatura'>
                        <option value=''>Seleccione una asignatura</option>
                        <option value=''>Asignatura 1</option>
                        <option value=''>Asignatura 2</option>
                        <option value=''>Asignatura 3</option>
                        <option value=''>Asignatura 4</option>  
                    </select>
                </div>
                <div className='form-group'>
                    <label>Tipo Metodología:</label>
                    <select name='tipo_met'>
                        <option value=''>Seleccione un tipo de metodología</option>
                        <option value=''>Metodología 1</option>
                        <option value=''>Metodología 2</option>
                        <option value=''>Metodología 3</option>
                        <option value=''>Metodología 4</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Periodo Academico:</label>
                    <select name='periodo_acad'>
                        <option value=''>Seleccione un periodo academico</option>
                        <option value=''>202X - 01</option>
                        <option value=''>202X - 02</option>
                        <option value=''>202X - 03</option>
                    </select>

                    <label>Año Vigente:</label>
                    <input type='number' name='year_vigente' min={2021} max={2025} value={2023} disabled/>
                </div>
                <div className='form-group form-buttons'>
                  <input type="button" value="Continuar" onClick={() => navigate("/admin/users")}/>
                  <input type="reset" value="Limpiar" />
                </div>
            </form>
    </div>
  </div>
  )
}
