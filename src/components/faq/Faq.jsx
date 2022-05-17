import "./_faq.scss";
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react'
import { Accordion } from "react-bootstrap";

function Faq() {

  return (
    <section className="faqs"
    data-aos="zoom-out-up"
    data-aos-easing="ease-in"
    data-aos-duration="1000">
        
        <h2 className="faqs__title">Dúvidas Frequentes</h2>
       
        <article className="faqs__container" >

                <Accordion flush>

                     <Accordion.Item eventKey="0"  className="faqs__container-item" >
                        <Accordion.Header>Precisa Prestar Vestibular para fazer Medicina na Argentina?</Accordion.Header>
                            <Accordion.Body>
                                         A Argentina adota o sistema de ensino europeu, no qual não existe vestibular. Como o acesso ao ensino superior público é ilimitado, ou seja, tem vagas para todos, não há concorrência entre os candidatos.
                            </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1"  className="faqs__container-item">
                        <Accordion.Header >Além de Medicina, o que mais posso cursar?</Accordion.Header>
                            <Accordion.Body>
                            Além de medicina, faculdades públicas e privadas oferecem cursos em todas as áreas, as mais buscadas são: Arquitetura, Direito, Engenharia Civil, Fisioterapia, Medicina Veterinária e Odontologia...
                            </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2"  className="faqs__container-item">
                        <Accordion.Header >Qual o método de ensino das faculdades argentinas?</Accordion.Header>
                            <Accordion.Body>
                            As faculdades privadas tem o mesmo método das faculdades Brasileiras. Já a UNR adota o método PBL ou Problem-based learning, que é uma prática pedagógica empregada em muitas escolas médicas. Enquanto existem muitas variantes da metodologia, a abordagem inclui a apresentação de um problema para um pequeno grupo, que iniciará uma discussão durante algumas sessões.
                            </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3"  className="faqs__container-item">
                        <Accordion.Header >Eu preciso falar espanhol fluente de imediato?</Accordion.Header>
                            <Accordion.Body>
                            Devido a grande quantidade de alunos estrangeiros nas salas de aula, os professores das Universidades já estão acostumados com a dificuldade na compreensão de alguns estudantes. Nessa fase de adaptação é importante entender pelo menos o básico da língua para poder assistir às aulas, e para isso, há cursos muito bons e que trabalham, de forma intensiva, a língua.
                            </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4"  className="faqs__container-item">
                        <Accordion.Header >Qual o custo de vida de morar em Rosário?</Accordion.Header>
                            <Accordion.Body>
                            Acesse <a href='https://www.expatistan.com/pt/custo-de-vida/rosario'>aqui</a> e fique por dentro do custo de vida
                            </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5"  className="faqs__container-item">
                        <Accordion.Header >Em que países o diploma é válido?</Accordion.Header>
                            <Accordion.Body>
                            Todo o Mercosul reconhece os diplomas dos países que adentram seu grupo, mas cada país possui um estilo de prova para validar comprovadamente o diploma do formado.
                            Isso acontece pelo meio do ARCU-SUL que é o Sistema de Acreditação Regional de Cursos de Graduação do Mercosul, um projeto que visa a revalidação facilitada, possivelmente automática, de diplomas entre universidades conveniadas do Brasil, da Argentina, do Paraguai, do Uruguai, da Bolívia e do Chile.<br/>
                            Tecnicamente o diploma é reconhecido em muitos países, a questão é validar ele conforme as normas e leis do país escolhido. Uma dessas outras opções é a Espanha onde o diploma de medicina da Argentina tem validade sem precisar de avaliação, pois existe um acordo de reconhecimento de diploma entre Argentina e a Espanha. Para isso basta enviar as documentações e se estiverem todos de forma correta eles irão validar o seu diploma.<br/>
                            Outra questão é que após 3 anos exercendo medicina na Espanha você terá seu diploma válido para toda a Europa, pois esse é um dos regulamentos que a Espanha possui para que seu profissionais de saúde possam atuar em todo o continente. Há também a possibilidade em Portugal, onde o médico formado que possui diploma de medicina da Argentina deve pedir equivalência de grau ao presidente do Conselho Científico de uma instituição portuguesa que ministre o curso de medicina. Com a equivalência em mãos, deve solicitar o registro para a Ordem dos Médicos de Portugal.<br/>
                            Para saber sobre a validação do diploma de medicina da Argentina basta pesquisar pelo país desejado e saber quais são suas regras e o processo referente a validação desses novos profissionais para que possam exercer suas funções no sistema de saúde do local escolhido.
                            </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6"  className="faqs__container-item">
                        <Accordion.Header >Quais as formas de Pagamento que a Alfa Assessoria aceita?</Accordion.Header>
                            <Accordion.Body>
                            A Alfa Assessoria Estudantil Aceita as seguintes formas de pagamento:<br/><br/>
                            1- Pagamentos a vista via PIX, TED ou DOC. (Não aceitamos depósito via envelope)<br/>
                            2- Aceitamos cartão de crédito, Parcelando em até 12 vezes (Com a taxa da operadora).<br/>
                            3- Temos também o boleto parcelado. (Com acréscimo de 15%).
                            </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7"  className="faqs__container-item">
                        <Accordion.Header >Quais as vantagens de estudar na Argentina?</Accordion.Header>
                            <Accordion.Body>
                            A seguir, conheça 10 vantagens daqueles que preferem uma instituição argentina à brasileira, e faça sua escolha!<br/><br/>

                                1- Ensino Gratuito ou de Baixo Custo.<br/>
                                2- Melhores Instituições.<br/>
                                3- Fácil retorno ao Brasil.<br/>
                                4- Qualidade de Vida.<br/>
                                5- Diferentes Processos Seletivos.<br/>
                                6- Metodologias Diferenciadas.<br/>
                                7- Experiência.<br/>
                                8- Conhecer uma nova Cultura.<br/>
                                9- A desvalorização do Peso em relação ao Real.<br/>
                                10- Grande comunidade brasileira de estudantes.
                            </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
        </article>


    </section>
  )
}

export default Faq