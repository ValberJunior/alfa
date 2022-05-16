import "./_header.scss";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <header className="header">
        <div className="header__wrapper">
              <Navbar/>
        </div>
    </header>
  )
}

export default Header