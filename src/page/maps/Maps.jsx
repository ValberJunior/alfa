import "./_maps.scss";
import { Header, Footer } from "../../components";
import { useEffect } from "react";

const Maps = () => {

  useEffect(()=>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  },[]);

  return (
    <>
      <Header />
     <section className="sectionMap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6697.030303164208!2d-60.674625!3d-32.937406!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab560384c623%3A0x41a0643bdd56348a!2sCastellanos%20588%2C%20S2002MJH%20Rosario%2C%20Santa%20Fe%2C%20Argentina!5e0!3m2!1spt-BR!2sbr!4v1652790478475!5m2!1spt-BR!2sbr"
          className="sectionMap__map"
          loading="lazy"
          title="Adress Alfa Assessoria in google maps"
        />
      </section>

      <Footer />
    </>
  );
};

export default Maps;
