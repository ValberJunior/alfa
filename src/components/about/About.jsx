import { TEXTS } from "../../Data/data";
import LogoAlfa from "../../assets/icone.png";
import "./_about.scss";


const About = () => {

const Text = TEXTS[1];    

  return (
    <section className="about" id="about">
        <article className="about__content"  data-aos="zoom-out-up" 
          data-aos-easing="ease-in" data-aos-duration="1000">

            <img src={LogoAlfa} alt="logo Alfa Assessoria" loading="lazy"  className="about__content-img" data-aos="zoom-in"/>

            <div className="about__content-desc desc">
                <h2 className="desc__title">{Text.title}</h2>
                <p className="desc__text" >{Text.desc}</p>
                <h4 className="desc__subtitle" >{Text.subtitle}</h4>
            </div>

        </article>
    </section>
  )
}

export default About