import emailjs from '@emailjs/browser';
import React, { useEffect, useRef, useState } from 'react';
import "./_contact.scss";
import { Button, WavesFooter } from "../../components";
import { FaRegEnvelope } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import IconDone from "../../assets/done.gif";



const Contact = () => {

  useEffect(()=>{

    setForm({name:"", email:"", course:"Selecione", subject:"", message:""});

  },[]);

  const formRef = useRef();
  const [ done, setDone ] = useState(false);
  const [form , setForm ] = useState({name:"", email:"", course:"Selecione", subject:"", message:""});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
                        process.env.REACT_APP_SERVICE_ID, 
                        process.env.REACT_APP_TEMPLATE_ID, 
                        formRef.current, 
                        process.env.REACT_APP_PUBLIC_KEY
                    )
      .then((result) => {
          console.log(result.text);
          setDone(true);
          setForm({name:"", email:"", course:"Selecione", subject:"", message:""});
          setTimeout(()=>{
            setDone(false)
          },5000);
      }, (error) => {
          console.log(error.text);
      });
};

  return (
    <section className="contact">

      <span id="contact"/>
       <h2 className="contact__title"
               data-aos="zoom-out-up"
               data-aos-easing="ease-in"
               data-aos-duration="1000">
       <AiOutlineMessage className="text-info"/> Fale conosco 
       </h2> 
       
       <article className="contact__container"
               data-aos="zoom-out-up"
               data-aos-easing="ease-in"
               data-aos-duration="1000">

            <form ref={formRef} onSubmit={(e)=>{sendEmail(e)}} className="comtact__container content">

                  <fieldset className="content__data">
                    <div className="content__data-inputs">
                      <label htmlFor="name">Digite seu nome</label>
                      <input type="text" name="name" id="name" required
                       onChange={(e)=>{setForm({...form, name: e.target.value})}}
                       value={form.name}/>
                    </div>

                    <div className="content__data-inputs">
                      <label htmlFor="email">Digite seu Email</label>
                      <input type="email" name="email" id="name"  required
                      onChange={(e)=>{setForm({...form, email: e.target.value})}}
                      value={form.email} />
                    </div>

                    <div className="content__data-inputs">
                      <label htmlFor="course">Selecione o curso</label>
                      <select name='course'  required
                      onChange={(e)=>{setForm({...form, course: e.target.value})}}
                      value={form.value}
                      defaultValue={"DEFAULT"}
                      >
                        <option value="DEFAULT">Selecione</option>
                          <option value="Arquitetura">Arquitetura</option>
                          <option value="Direito">Direito</option>
                          <option value="Engenharia Civil">Engenharia Civil</option>
                          <option value="Fisioterapia">Fisioterapia</option>
                          <option value="Medicina">Medicina</option>
                          <option value="Medicina Veterinária">Medicina Veterinária</option>
                          <option value="Odontologia">Odontologia</option>
                          <option value="Outro">Outro</option>
                      </select>
                    </div>
                  </fieldset>

                  <fieldset className="content__message">
                       <label htmlFor="subject">Digite o Assunto</label>
                       <input type="text" name="subject"  id="subject"  required
                       onChange={(e)=>{setForm({...form, subject: e.target.value})}}
                       value={form.subject}/>
                      <label htmlFor="message">Escreva sua mensagem</label>
                      <textarea name="message" id="message" rows="5" 
                      onChange={(e)=>{setForm({...form, message: e.target.value})}}
                      value={form.message}></textarea>
                  </fieldset>

                  {done?
                      <div className="content__response" role="alert">
                        Mensagem Enviada com Sucesso
                        <img src={IconDone} alt="Done Icon Response" className="content__response-done"/>
                        </div>:null}

                <div className="content__button" data-aos="zoom-in" data-aos-easing="ease-in" data-aos-duration="500">
                    <Button type="submit" name="subscribe"
                     >
                       Enviar <FaRegEnvelope/>
                     </Button>
                </div>
        

            </form>

       </article>

       <WavesFooter/>

    </section>
  )
}

export default Contact