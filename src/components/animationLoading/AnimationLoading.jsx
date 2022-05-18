import "./_animationLoading.scss";
import AlfaLogo from "../../assets/Alfa.png";

const AnimationLoading = () => {
  return (
    <section className="animation">
        <img src={AlfaLogo} alt="loading animation for screen" className="animation__logo" data-aos="zoom-out"/>
    </section>
  )
}

export default AnimationLoading