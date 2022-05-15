import "./styles.scss";
import Menu from "../../assets/menu.gif";
import { useState } from "react";


const Navbar = () => {

  const [show, setShow] = useState(false);

  const NavbarMenu = ()=>{
    return(
      <ul className="navbar__menu">
          <li className="navbar__menu-item"><a href="#" className="navbar__menu-item-link">Home</a></li>
         <li className="navbar__menu-item"> <a href="#about" className="navbar__menu-item-link">Sobre</a></li>
          <li className="navbar__menu-item"> <a href="#plans" className="navbar__menu-item-link">Planos</a></li>
          <li className="navbar__menu-item"><a href="#contact" className="navbar__menu-item-link">Contato</a></li>
      </ul>
    )
  }

  const MenuMobile = ()=>{
    return(
      <ul className={`navbar__menu-mobile-opts ${(show == false)?null: "navbar__menu-mobile-opts-show"}`}>
      <li className="navbar__menu-mobile-items">Home</li>
      <li className="navbar__menu-mobile-items">Sobre</li>
      <li className="navbar__menu-mobile-items">Planos</li>
      <li className="navbar__menu-mobile-items">Contato</li>
      </ul>
    )
  };

  const HandleMenu = ()=>{
   setShow(!show);
  }

  return (
    <>



      <nav className="navbar">

          {NavbarMenu()}

          <div className="navbar__menu-mobile">
    
        {MenuMobile()}
      </div>

      </nav>

      <button className="navbar__menu-button" onClick={HandleMenu} >
        <img src={Menu} className="menu"/>
      </button>


    </>
  )
}

export default Navbar;