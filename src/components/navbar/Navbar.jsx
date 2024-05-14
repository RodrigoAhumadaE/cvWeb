import ColorPicker from "../../utils/ColorPicker";
import './navbar.css';

export default function Navbar() {
  return(
    <nav className="navbar">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://vitejs.dev">
          <img src="https://vitejs.dev/logo.svg" alt="Vite Logo" className="navbar-logo" width={"30px"} height={"auto"} />
        </a>
      </div>
      <div className="navbar-links">
        <a className="navbar-item" href="/">Información Personal</a>
        <a className="navbar-item" href="/about">Perfil</a>
        <a className="navbar-item" href="/contact">Experiencia</a>
        <a className="navbar-item" href="/contact">Formación Academica</a>
        <a className="navbar-item" href="/contact">Habilidades</a>
        <a className="navbar-item" href="/contact">Información Adicional</a>
      </div>
        <ColorPicker />
    </nav>
  )
}