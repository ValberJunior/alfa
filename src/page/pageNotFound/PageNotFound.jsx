import "./_pageNotFound.scss";
import { Link } from "react-router-dom";
import Erro from "../../assets/erro.gif";
import { BiHomeAlt } from "react-icons/bi";


const PageNotFound = () => {
  return (
    <section className="pageNotFound">
        <article className="pageNotFound__content">

            <img src={Erro} alt="Erro image - page not found 404" className="pageNotFound__content-img"/>
   
                <Link to="/" className="pageNotFound__content-link"><BiHomeAlt/></Link>
      

        </article>
    </section>
  )
}

export default PageNotFound

