import { useState } from 'react'
import './Results.css'

function Results({ results }) {
  const [materiales, setMateriales] = useState(results.materiales)

  const handleCantidadChange = (id, newCantidad) => {
    const cantidad = parseFloat(newCantidad)
    if (!isNaN(cantidad) && cantidad >= 0) {
      setMateriales(prev =>
        prev.map(m => m.id === id ? { ...m, cantidad } : m)
      )
    }
  }

  return (
    <div className="results-container">
      <h2 className="results-title">Resultados del Cálculo</h2>
      
      <div className="measurements-info">
        <div className="measurement-item">
          <span className="measurement-label">Ancho:</span>
          <span className="measurement-value">{results.ancho} m</span>
        </div>
        <div className="measurement-item">
          <span className="measurement-label">Alto:</span>
          <span className="measurement-value">{results.alto} m</span>
        </div>
        <div className="measurement-item peso">
          <span className="measurement-label">Peso Estimado:</span>
          <span className="measurement-value">{results.peso} kg</span>
        </div>
      </div>

      <div className="table-container">
        <table className="materials-table">
          <thead>
            <tr>
              <th>Material</th>
              <th>Cantidad</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            {materiales.map((material) => (
              <tr key={material.id}>
                <td className="material-name">{material.nombre}</td>
                <td className="material-cantidad">
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={material.cantidad}
                    onChange={(e) => handleCantidadChange(material.id, e.target.value)}
                    className="cantidad-input"
                  />
                </td>
                <td className="material-detalle">{material.detalle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="success-message">
        Cálculo completado. Puede editar las cantidades manualmente.
      </div>
    </div>
  )
}

export default Results
