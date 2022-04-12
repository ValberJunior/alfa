import "./styles.scss";
import Logo from "../../assets/Alfa com letras.png"
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <header className="header">
        <div className="header__wrapper">
              <img src={Logo}
              className="header__logo"
              alt="Logo da Alfa Assessoria"
              arial-label="Logo Alfa Assessoria Estudantil"/>

              <Navbar/>
        </div>
    </header>
  )
}

export default Header