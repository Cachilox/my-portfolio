import heroImg from "../../assets/images/hero.svg";
import CountUp from "react-countup";
import CV from "../../assets/data/Mariano_Alvarez_CV.pdf";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* ========== Hero left content ========== */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor dark:text-white font-[600] text-[17px]"
            >
              Hola Bienvenido
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor dark:text-white font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              Soy Mariano Alvarez <br /> Full Stack Developer
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a
                href={CV}
                download
                className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"
              >
                Descargar CV <i className="ri-article-fill text-[1.1rem]"></i>
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor dark:text-white mt-8 font-[500] text-[16px] sm:pl-14 sm:pr-10 leading-7 "
            >
              Con enfoque en front-end, especializado en React.js, y experiencia
              en desarrollo tanto front-end como back-end, mis principales
              intereses radican en crear soluciones innovadoras y funcionales
              que satisfagan las necesidades de los usuarios. Busco
              oportunidades que me permitan adquirir experiencia profesional y
              seguir mejorando como desarrollador web.
            </p>

            <div className="flex items-center gap-9 mt-10">
              <span className="text-smallTextColor dark:text-white text-[1.1rem] font-[600]">
                Sígueme:
              </span>
              <span>
                <a
                  href="https://github.com/Cachilox"
                  target="_blank"
                  className="text-smallTextColor hover:text-slate-900 text-[1.3rem] active:relative active:top-[2px] font-[600]"
                >
                  <i className="ri-github-fill dark:text-black"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://twitter.com/CachiloDev"
                  target="_blank"
                  className="text-smallTextColor hover:text-blue-600 active:relative active:top-[2px] text-[1.3rem] font-[600]"
                >
                  <i className="ri-twitter-fill dark:text-blue-600"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/cachilo/"
                  target="_blank"
                  className="text-smallTextColor hover:text-blue-500 active:relative active:top-[2px] text-[1.3rem] font-[600]"
                >
                  <i className="ri-linkedin-box-fill dark:text-blue-700"></i>
                </a>
              </span>
            </div>
          </div>
          {/* Hero left end */}
          {/* ========= Hero img ========= */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img width={320} src={heroImg} alt="image preview" />
            </figure>
          </div>
          {/* ========= Hero img end ========= */}
          {/* Hero content right */}
          <div className="md:basis-1/5 flex justify-center text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor dark:text-white font-[700] text-[32px]">
                <CountUp start={0} end={1} duration={2} prefix="+" />
              </h2>
              <h4 className="text-headingColor dark:text-white font-[600] text-[18px]">
                Años de experiencia
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor dark:text-white font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor dark:text-white font-[600] text-[18px]">
                Ganas de aprender
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor dark:text-white font-[700] text-[32px]">
                <CountUp start={0} end={8} duration={2} prefix="+" />
              </h2>
              <h4 className="text-headingColor dark:text-white font-[600] text-[18px]">
                Proyectos completados
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
