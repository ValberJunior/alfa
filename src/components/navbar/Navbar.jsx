import "./styles.scss";

const Navbar = () => {
  return (
    <navbar className="navbar">
        <ul className="navbar__menu">
            <li className="navbar__menu-item">Home</li>
            <li className="navbar__menu-item">Sobre</li>
            <li className="navbar__menu-item">Planos</li>
            <li className="navbar__menu-item">Contato</li>
        </ul>
    </navbar>
  )
}

export default Navbar;