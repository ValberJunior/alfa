
const WavesBottom = () => {
  return (

     <section data-aos="fade-down"
      data-aos-easing="ease-in"
      data-aos-duration="500">

            <svg
          height="100%"
          width="100%"
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <defs>
            <linearGradient id="gradient">
              <stop offset="5%" stopColor="#002bdc88"></stop>
              <stop offset="95%" stopColor="#32ded488"></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,133 0,133 C 205.71428571428572,171 822.8571428571429,152 1440,133 C 1440,133 1440,400 1440,400 Z"
            stroke="none"
            // stroke-width={"0"}
            fill="url(#gradient)"
            className="transition-all duration-300 ease-in-out delay-150"
          ></path>
          <defs>
            <linearGradient id="gradient">
              <stop offset="5%" stopColor={"#002bdcff"}></stop>
              <stop offset="95%" stopColor={"#32ded4ff"}></stop>
            </linearGradient>
          </defs>
          <path
            d="M 0,400 C 0,400 0,266 0,266 C 205.71428571428572,342 822.8571428571429,304 1440,266 C 1440,266 1440,400 1440,400 Z"
            stroke="none"
            // stroke-width={"0"}
            fill="url(#gradient)"
            className="transition-all duration-300 ease-in-out delay-150"
          ></path>
        </svg>
      </section>
  );
}

export default WavesBottom