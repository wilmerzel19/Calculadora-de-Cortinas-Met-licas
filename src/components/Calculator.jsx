import { useState } from 'react'
import './Calculator.css'

function Calculator({ onCalculate }) {
  const [ancho, setAncho] = useState('')
  const [alto, setAlto] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const anchoNum = parseFloat(ancho)
    const altoNum = parseFloat(alto)

    if (isNaN(anchoNum) || isNaN(altoNum) || anchoNum <= 0 || altoNum <= 0) {
      setError('Por favor, ingrese medidas válidas mayores a 0')
      return
    }

    setError('')
    onCalculate(anchoNum, altoNum)
  }

  return (
    <div className="calculator-card">
      <h2 className="calculator-title">Ingrese las Medidas</h2>
      <form onSubmit={handleSubmit} className="calculator-form">
        <div className="form-group">
          <label htmlFor="ancho" className="form-label">
            Ancho (metros)
          </label>
          <input
            type="number"
            id="ancho"
            step="0.01"
            placeholder="Ej: 3.00"
            value={ancho}
            onChange={(e) => setAncho(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="alto" className="form-label">
            Alto (metros)
          </label>
          <input
            type="number"
            id="alto"
            step="0.01"
            placeholder="Ej: 2.50"
            value={alto}
            onChange={(e) => setAlto(e.target.value)}
            className="form-input"
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="calculate-button">
          Calcular Materiales
        </button>
      </form>
    </div>
  )
}

export default Calculator
