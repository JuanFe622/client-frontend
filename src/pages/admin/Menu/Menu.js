import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigate = useNavigate();
  const pendientesRef = useRef(null);
  const listosRef = useRef(null);

  const moveSelectedItems = (from, to) => {
    const selectedItems = Array.from(from.selectedOptions);
    const selectedValues = selectedItems.map((option) => option.value);

    if (selectedValues.length > 0) {
      const newFrom = Array.from(from.options).filter(
        (option) => !selectedValues.includes(option.value)
      );
      const newTo = [...Array.from(to.options), ...selectedItems];

      Array.from(from.options).forEach((option) => {
        option.selected = false;
      });

      Array.from(to.options).forEach((option) => {
        option.selected = false;
      });

      newFrom.forEach((option) => {
        from.add(option);
      });

      newTo.forEach((option) => {
        to.add(option);
      });
    }
  };

  const handleMoveToPendientes = () => {
    moveSelectedItems(listosRef.current, pendientesRef.current);
  };

  const handleMoveToListos = () => {
    moveSelectedItems(pendientesRef.current, listosRef.current);
  };
  return (
    <div className="Container">
      <h1>Fases de la Metodología</h1>
      <div className="datos">
        <form>
          <div className="form-group">
            <label>Fases:</label>
            <select>
              <option value="">Escoge una fase</option>
              <option value="">Fase 1</option>
              <option value="">Fase 2</option>
              <option value="">Fase 3</option>
            </select>
          </div>
          <div className="form-group">
            <label>Entregables:</label>
            <div className="select-container">
              <select size={4} ref={pendientesRef}>
                <option value="">Entregables Pendientes</option>
                <option value="">Entregable 1</option>
                <option value="">Entregable 2</option>
                <option value="">Entregable 3</option>
              </select>
              <div className="arrow-buttons">
                <button type="button" onClick={handleMoveToListos}>
                  &gt;
                </button>
                <button type="button" onClick={handleMoveToPendientes}>
                  &lt;
                </button>
              </div>
              <select size={4} ref={listosRef}>
                <option value="">Entregables Listos</option>
                
              </select>
            </div>
          </div>

          <div className="form-group form-buttons">
            <input type="button" value="Continuar" onClick={() => navigate("/admin/services")}/>
            <input type="reset" value="Limpiar" />
          </div>
        </form>
      </div>
    </div>
  );
};
