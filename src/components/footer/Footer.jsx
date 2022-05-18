import "./_footer.scss";
import { FaFacebook, FaInstagram, FaRegEnvelope, FaWhatsapp, FaUniversity, FaGlobeAmericas, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegCopyright} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

        <section className="footer__content" data-aos="fade-up">  

                  
                  <article  className="footer__content university" >
                    <h4 className="university__title">Faculdades <FaUniversity/></h4>
                    <a className="university__link" href='https://uai.edu.ar/' target="_blank" rel="noopener noreferrer">UAI</a>
                    <a className="university__link" href='https://iunir.edu.ar/'  target="_blank" rel="noopener noreferrer">IUNIR</a>
                    <a className="university__link" href='https://unr.edu.ar/'   target="_blank" rel="noopener noreferrer">UNR</a>
                  </article>

                  <article className="footer__content map">
                    <h4 className="map__title">Mapa</h4>
                    <Link to="/maps" className="map__link"> <FaGlobeAmericas/> Localização</Link>
                  </article>


                  <article className="footer__content adress">
                    <p className="adress__item" ><FaMapMarkerAlt/> Castellanos 588</p>
                    <p className="adress__item"><FaPhoneAlt/> 55(21)993967172</p>
                    <p className="adress__item"> <FaEnvelope/> alfaassessoriaestudantil@gmail.com</p>
                  </article>


        </section>

        
        <section className="footer__socialMedia" data-aos="fade-up">
          <a className="footer__socialMedia-link" href='https://www.facebook.com/Alfaassessoriaestudantil'   rel="noopener noreferrer" target="_blank"><FaFacebook/></a>
          <a className="footer__socialMedia-link" href='https://www.instagram.com/alfaestudantil/'  rel="noopener noreferrer"  target="_blank"><FaInstagram/></a>
          <a className="footer__socialMedia-link" href='mailto:alfaassessoriaestudantil@gmail.com'  rel="noopener noreferrer" target="_blank"><FaRegEnvelope/></a>
          <a className="footer__socialMedia-link" href='https://api.whatsapp.com/message/TWL6D4PXQ46BB1'  rel="noopener noreferrer" target="_blank"><FaWhatsapp/></a>
      </section>

      <section className="footer__copyright">
          <span className="footer__copyright-text"><FaRegCopyright/> Todos Os Direitos Reservados - Alfa Assessoria Estudantil - CNPJ 45.483.300/0001-07</span>
      </section>

    </footer>
  )
}

export default Footer