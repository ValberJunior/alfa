import "./_contact.scss";
import { Button, WavesFooter } from "../../components";
import { FaRegEnvelope } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";


const Contact = () => {
  return (
    <section className="contact">
      <span id="contact"/>
       <h2 className="contact__title" >
           Entre em contato <FaRegEnvelope className="text-info"/>
       </h2> 
       
       <article className="contact__container">


            <form className="comtact__container content">

                  <fieldset className="content__data">
                    <div className="content__data-inputs">
                      <label for="name">Digite seu nome</label>
                      <input type="text" name="name" id="name"/>
                    </div>

                    <div className="content__data-inputs">
                      <label for="email">Digite seu Email</label>
                      <input type="email" name="email" id="name" />
                    </div>

                    <div className="content__data-inputs">
                      <label for="course">Selecione o curso</label>
                      <select name='course'>
                          <option selected>Selecione o curso</option>
                          <option value="AQ">Arquitetura</option>
                          <option value="DT">Direito</option>
                          <option value="EG">Engenharia Civil</option>
                          <option value="FS">Fisioterapia</option>
                          <option value="MD">Medicina</option>
                          <option value="MV">Medicina Veterinária</option>
                          <option value="OD">Odontologia</option>
                          <option value="OT">Outro</option>
                      </select>
                    </div>
                  </fieldset>

                  <fieldset className="content__message">
                       <label for="subject">Digite o Assunto</label>
                       <input type="text" name="subject"  id="subject"/>
                      <label for="message">Escreva sua mensagem</label>
                      <textarea name="message" id="message" rows="5"></textarea>
                  </fieldset>

                <div className="content__button">
                    <Button type="submit" name="subscribe"
                     >
                       Enviar 
                     </Button>
                </div>

            </form>

       </article>

       <WavesFooter/>

    </section>
  )
}

export default Contact