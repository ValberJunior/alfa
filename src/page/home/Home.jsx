import "./_home.scss";
import { About, AnimationLoading, Carousel, Contact, Faq, Footer, Header, KnowMore, Plans, Waves } from '../../components';
import { useEffect, useState } from 'react';
import { AiFillUpCircle } from "react-icons/ai";

//animation
import Aos from "aos";
import "aos/dist/aos.css";




const Home = () => {

  const [visible, setVisible] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

        //animation
        useEffect(()=>{
          // setTimeout(()=>{
          //   setIsLoading(false)
          // },2500);
          Aos.init({duration: 2500});
        },[]);

        const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 1000){
          setVisible(true);

        }
        else if (scrolled <= 1000){
          setVisible(false)
        }
      };

      window.addEventListener('scroll', toggleVisible);


  return (
    <>
              {/* {isLoading?
           (<AnimationLoading style={{display: isLoading ? 'inline' : 'none'}} />)
           :( */}
             <>
              <Header/>
              <Carousel/>
              <Waves/>
              <KnowMore/>
              <Plans/>
              <About/>
              <Faq/>
              <Contact/>
              <Footer/>
              <a
                href="#"
                style={{opacity: visible ? '0.4' : '0'}}
                  className="top">
                    <AiFillUpCircle/>
              </a>
            </>
      {/* )} */}
    </>
  )
}

export default Home