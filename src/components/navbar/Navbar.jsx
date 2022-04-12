import "./styles.scss";
import Menu from "../../assets/menu.gif";
import { useState } from "react";


const Navbar = () => {

  const [show, setShow] = useState(false);

  const NavbarMenu = ()=>{
    return(
      <ul className="navbar__menu">
          <li className="navbar__menu-item">Home</li>
          <li className="navbar__menu-item">Sobre</li>
          <li className="navbar__menu-item">Planos</li>
          <li className="navbar__menu-item">Contato</li>
      </ul>
    )
  }

  const MenuMobile = ()=>{
    return(
      <ul className="navbar__menu-mobile-opts">
      <li className="navbar__menu-mobile-items">Home</li>
      <li className="navbar__menu-mobile-items">Sobre</li>
      <li className="navbar__menu-mobile-items">Planos</li>
      <li className="navbar__menu-mobile-items">Contato</li>
      </ul>
    )
  }

  return (
    <>

      <navbar className="navbar">

      <div className="navbar__menu-mobile">
        {show?MenuMobile():null}
      </div>

          {NavbarMenu()}

      </navbar>

      <button className="navbar__menu-button" onClick={()=>{setShow(!show)}} >
        <img src={Menu} className="menu"/>
      </button>


    </>
  )
}

export default Navbar;