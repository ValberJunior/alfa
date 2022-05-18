import "./_knowMore.scss";
import Button from "../button/Button";
import { TEXTS } from "../../Data/data";
import Image1 from "../../assets/image1.png";
import { FaWhatsapp } from "react-icons/fa";

const KnowMore = () => {

const Text = TEXTS[0]

  return (
    <section className="knowmore">
        <article className="knowmore__container content">
            <img src={Image1} alt="medicine student" loading="lazy" className="content__img"
                data-aos="fade-right"/>
            <div className="content__desc" data-aos="fade-up">
                <h2 className="content__desc-title">{Text.title}</h2>
                <p className="content__desc-text">{Text.desc}</p>
     
                    <a href={Text.link} className="content__desc-link">
                        <Button>
                            Fale Conosco  <FaWhatsapp/>
                        </Button>
                    </a>

            </div>
        </article>
        
    </section>
  )
}

export default KnowMore