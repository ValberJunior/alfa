import { useState } from "react";
import "./_carousel.scss";
import  Banner  from "../../assets/1.png";
import  Banner2  from "../../assets/2.png";

const SHOW = "section__carousel-banner section__carousel-banner-show";
const HIDE = "section__carousel-banner section__carousel-banner-hide";


const Carousel = () => {

  const [loop, setLoop ] = useState(false);

  const carouselLoop = ()=>{
      setTimeout(
        ()=>{
          setLoop(!loop);
        }, 8000
      )
  }

  return (
    <section className="section__carousel">

      {carouselLoop()}
      
      <img src={Banner} alt="Study Medicine in Argentina" className={loop?SHOW:HIDE}/>
      <img src={Banner2} alt="Study Medicine without entrance exams" className={loop?HIDE:SHOW}/>
      

    </section>
  );
};

export default Carousel;