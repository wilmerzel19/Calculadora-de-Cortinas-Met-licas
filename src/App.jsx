import { useState } from 'react'
import Header from './components/Header'
import Calculator from './components/Calculator'
import Results from './components/Results'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [results, setResults] = useState(null)

  const handleCalculate = (ancho, alto) => {
    // Cálculos
    const angular = (ancho * 2 - 0.04).toFixed(2)
    const guias = (alto * 2 - 0.68).toFixed(2)
    const muelles = (alto + 1).toFixed(2)
    const duelas = (ancho * alto).toFixed(2)
    const tubo = ancho.toFixed(2)
    const peso = (ancho * alto * 21).toFixed(2)

    const materiales = [
      { id: 1, nombre: "Tubo redondo", cantidad: 1, detalle: `${tubo} m` },
      { id: 2, nombre: "Angular 1 1/2 * 1/8", cantidad: 2, detalle: `${angular} m c/u` },
      { id: 3, nombre: "Guías 2*1*2*3/32", cantidad: 2, detalle: `${guias} m c/u` },
      { id: 4, nombre: "Muelles", cantidad: 1, detalle: `${muelles} m` },
      { id: 5, nombre: "Platos 34*34", cantidad: 2, detalle: "34x34 cm" },
      { id: 6, nombre: "Tambores", cantidad: 2, detalle: "unidad" },
      { id: 7, nombre: "Pernos cab, hexg. 3/8*3 eje", cantidad: 2, detalle: "2" },
      { id: 8, nombre: "Pernos cab, hexg. 3/8*1 machuelo", cantidad: 3, detalle: "piezas" },
      { id: 9, nombre: "Pernos cab, redon. 3/8*1 faldon", cantidad: 7, detalle: "piezas" },
      { id: 10, nombre: "Perno spander", cantidad: 10, detalle: "piezas" },
      { id: 11, nombre: "Arandelas", cantidad: 9, detalle: "piezas" },
      { id: 12, nombre: "Angular 1 *1/8 topes", cantidad: 2, detalle: "4 cm c/u" },
      { id: 13, nombre: "Tubo cuadrado 1/2×1/2 baston", cantidad: 1, detalle: "1 m" },
      { id: 14, nombre: "Platina 1¼×3/16 enllavadores", cantidad: 1, detalle: "60cm" },
      { id: 15, nombre: "Platina 1×1/8 ganchos", cantidad: 1, detalle: "40 cm" },
      { id: 16, nombre: "Varilla lisa 1/4", cantidad: 1, detalle: "30 cm" },
      { id: 17, nombre: "Varilla corrugada 3/8", cantidad: 1, detalle: "15 cm" },
      { id: 18, nombre: "Haladera", cantidad: 1, detalle: "unidad" },
      { id: 19, nombre: "Duelas galvanizadas", cantidad: 1, detalle: `${duelas} m²` }
    ]

    setResults({ materiales, peso, ancho, alto })
  }

  return (
    <>
      <Header />
      <main className="main-container">
        <Calculator onCalculate={handleCalculate} />
        {results && <Results results={results} />}
      </main>
      <Footer />
    </>
  )
}

export default App
