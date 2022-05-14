import "./styles.scss";
import { PLANS } from "../../Data/data";
import Icons from "../../assets/opt.gif";
import { WavesTop, PlanCard, Button, WavesBottom} from "../../components";

const Plans = () => {

    const SIMPLE = PLANS[0];
    const PREMIUM = PLANS[1];

  return (
    <section className="plans">

        <WavesTop/>

        <article className="plans__container">

        <h2 className="plans__container-title">Nossos Pacotes</h2>

                <div className="plans__container-content content">
                    
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

                </div>

        </article>
      
        <WavesBottom/>

    </section>
  )
}

export default Plans