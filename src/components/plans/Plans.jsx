import "./styles.scss";

import React from 'react'
import Button from "../button/Button";
import PlanCard from "../planCard/PlanCard";
import { PLANS } from "../../Data/data";
import Icons from "../../assets/opt.gif";


const Plans = () => {

    const SIMPLE = PLANS[0];
    const PREMIUM = PLANS[1];

  return (
    <section className="plans">

        <h2 className="plans__title">Nossos Pacotes</h2>

       <article className="plans__container content">
            
            {/* Simple */}
            <PlanCard>
                <h3 className="content__titleCard">{SIMPLE.title}</h3>
                <ul className="content__list">
                    {SIMPLE.options.map(item=>{
                        return(
                            <li key={item.key}>
                            <img src={Icons}  className="content__list-icon" alt="icon"/>
                            {item.opt}</li>
                        )
                    })}
                </ul>
                <a href={SIMPLE.link}>
                    <Button>
                        Saiba mais
                    </Button>
                </a>
            </PlanCard>

            {/* Premium */}
            <PlanCard>
                <h3 className="content__titleCard" >{PREMIUM.title}</h3>
                <ul className="content__list" >
                    {PREMIUM.options.map(item=>{
                        return(
                            <li key={item.key}>
                                <img src={Icons}  className="content__list-icon" alt="icon"/>
                                {item.opt}
                            </li>
                        )
                    })}
                </ul>
                <a href={PREMIUM.link}>
                    <Button>
                        Saiba mais
                    </Button>
                </a>
            </PlanCard>

       </article>
    </section>
  )
}

export default Plans