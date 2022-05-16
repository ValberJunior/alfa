import "./_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">

        <section className="footer__content">  

                  
                  <article  className="footer__content university">
                    <h4 className="university__title">Faculdades:</h4>
                    <a className="university__link" href='https://uai.edu.ar/' rel="noreferrer" target="_blank">UAI</a>
                    <a className="university__link" href='https://iunir.edu.ar/'  rel="noreferrer" target="_blank">IUNIR</a>
                    <a className="university__link" href='https://unr.edu.ar/'  rel="noreferrer"  target="_blank">UNR</a>
                  </article>

                  <article className="footer__content map">
                    <h4 className="map__title">Mapa:</h4>
                    <a className="map__link" href='#'><i className="fas fa-map-marked-alt"></i> Localização</a>
                  </article>


                  <article className="footer__content adress">
                    <p className="adress__item" ><i className="fas fa-map-marker-alt"></i> Castellanos 588</p>
                    <p className="adress__item"><i className="fas fa-phone-alt"></i> 55(21)993967172</p>
                    <p className="adress__item"> <i className="fas fa-envelope"></i> alfaassessoriaestudantil@gmail.com</p>
                  </article>


        </section>

        
        <section className="footer__socialMedia">
          <a className="footer__socialMedia-link" href='https://www.facebook.com/Alfaassessoriaestudantil'   rel="noreferrer" target="_blank"><i className="fab fa-facebook-square"></i></a>
          <a className="footer__socialMedia-link" href='https://www.instagram.com/alfaestudantil/'  rel="noreferrer"  target="_blank"><i className="fab fa-instagram"></i></a>
          <a className="footer__socialMedia-link" href='mailto:alfaassessoriaestudantil@gmail.com'  rel="noreferrer" target="_blank"><i className="far fa-envelope"></i></a>
          <a className="footer__socialMedia-link" href='https://api.whatsapp.com/message/TWL6D4PXQ46BB1'  rel="noreferrer" target="_blank"><i className="fab fa-whatsapp"></i></a>
      </section>

      <section className="footer__copyright">
          <span className="footer__copyright-text"><i className="far fa-copyright me-2"></i>  Todos Os Direitos Reservados 2021 - Desenvolvido por Valber Júnior</span>
      </section>

    </footer>
  )
}

export default Footer