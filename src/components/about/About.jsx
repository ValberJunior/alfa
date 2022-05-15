import { TEXTS } from "../../Data/data";
import LogoAlfa from "../../assets/icone.png";
import "./styles.scss";


const About = () => {

const Text = TEXTS[1];    

  return (
    <section className="about" id="about">
        <article className="about__content">
            <img src={LogoAlfa} alt="logo Alfa Assessoria" className="about__content-img"/>

            <div className="about__content-desc desc">
                <h2 className="desc__title" >{Text.title}</h2>
                <p className="desc__text" >{Text.desc}</p>
                <h4 className="desc__subtitle" >{Text.subtitle}</h4>
            </div>

        </article>
    </section>
  )
}

export default About