import "./_knowMore.scss";
import Button from "../button/Button";
import { TEXTS } from "../../Data/data";
import Image1 from "../../assets/image1.png"

const KnowMore = () => {

const Text = TEXTS[0]

  return (
    <section className="knowmore">
        <article className="knowmore__container content">
            <img src={Image1} alt="" className="content__img"/>
            <div className="content__desc">
                <h2 className="content__desc-title">{Text.title}</h2>
                <p className="content__desc-text">{Text.desc}</p>
     
                    <a href={Text.link} className="content__desc-link">
                        <Button>
                            Saiba mais  <i className="fa-solid fa-angles-right"></i>
                        </Button>
                    </a>

            </div>
        </article>
        
    </section>
  )
}

export default KnowMore