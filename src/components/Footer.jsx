import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {new Date().getFullYear()} - Sistema de cálculo de cortinas metálicas
      </p>
    </footer>
  )
}

export default Footer
