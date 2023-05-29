import React from 'react'
import '../../../scss/map.scss'

export const Users = () => {
  return (
    <div className='Container'>
      <h1>Resumen</h1>
      <div className='datos'>
        <form>
          <div className='form-group'>
            <label>Asignatura:</label>
            <select>
              <option value=''>Escoge una asignatura</option>
              <option value=''>Asignatura 1</option>
              <option value=''>Asignatura 2</option>
              <option value=''>Asignatura 3</option>
              <option value=''>Asignatura 4</option>
            </select>
          </div>
          <div className='form-group'>
            <label>Nombre Metodología:</label>
            <select>
              <option value=''>Escoge una metodología</option>
              <option value=''>Metodología 1</option>
              <option value=''>Metodología 2</option>
              <option value=''>Metodología 3</option>
              <option value=''>Metodología 4</option>
            </select>
          </div>
          <div className='form-group'>
            <label>Número de Fases:</label>
            <select>
              <option value=''>Escoge un número de fases</option>
              <option value=''>1</option>
              <option value=''>2</option>
              <option value=''>3</option>
              <option value=''>4</option>
              <option value=''>5</option>
            </select>
          </div>
          <div className='form-group'>
            <label>Entregables:</label>
            <select size={4}>
              <option value=''>Lista de Entregables</option>
              <option value=''>Entregable 1</option>
              <option value=''>Entregable 2</option>
              <option value=''>Entregable 3</option>
            </select>

            <div className='form-group form-buttons2'>
                  <input type="button" value="Guardar"/>
                  <br></br>
                  <input type="reset" value="Limpiar" />
            </div>
          </div>
        </form>
    </div>
  </div>
  )
}
