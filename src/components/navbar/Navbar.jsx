import "./_navbar.scss";
import Menu from "../../assets/menu.gif";
import Logo from "../../assets/Alfa com letras.png";
import { FaWhatsapp } from "react-icons/fa";



const NavbarSection = () => {


  return (
    <>



        <nav className='navbar navbar-expand-sm navbar-light bg-light'>

            <div className='container-md'>
                {/* <!--My Logo--> */}
                <img src={Logo} alt='logo Alfa Assessoria' type='image/png' width='80px'/>
                

                {/* <!--My button - mobile version--> */}
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#menu'>
                    <img src={Menu} width='40px' alt="nobile button version"/>
                </button>

                {/* <!--My menu navbar--> */}
                <div className='collapse navbar-collapse justify-content-end' id='menu' >
                    <ul className='navbar-nav text-center pt-sm-3'>
                        <li className='nav-item'><a href='/#' className='nav-link active '>Home</a></li>
                        <li className='nav-item'><a href='/#about' className='nav-link '>Sobre</a></li>
                        <li className='nav-item'><a href='/#plans' className='nav-link '>Planos</a></li>
                        <li className='nav-item'><a href='/#contact' className='nav-link '>Contato</a></li>
                        <li className='nav-item'><a href="https://wa.me/5521993967172" rel="noopener noreferrer" target="_blank" ><button className="btn btn-info text-light">Fale Conosco <FaWhatsapp/></button></a></li>
                    </ul>
                </div>

            </div>
            
        </nav>


    </>
  )
}

export default NavbarSection;







