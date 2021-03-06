import "./_pageNotFound.scss";
import { Header } from "../../components";
import { Link } from "react-router-dom";
import Erro from "../../assets/erro.gif";
import { BiHomeAlt } from "react-icons/bi";


const PageNotFound = () => {
  return (

    <>
            <Header/>
            <section className="pageNotFound">
                  <article className="pageNotFound__content">

                      <img src={Erro} alt="Erro page 404, go back to home" className="pageNotFound__content-img"/>
            
                          <Link to="/" className="pageNotFound__content-link"><BiHomeAlt/></Link>
                

                  </article>
            </section>
    </>
  )
}

export default PageNotFound

