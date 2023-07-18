import logoHenry from "../../assets/images/logo-henry.png";
import logoCoder from "../../assets/images/logo-coderhouse.png";

const Education = () => {
  return (
    <section className="overflow-x-hidden" id="education">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor dark:text-white font-[800] text-[2.4rem] mb-5">
            Educación
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor dark:text-white font-[500] text-[16px] leading-7">
            Desde 2021, me aventuré en el mundo del desarrollo web de forma
            autodidacta. Posteriormente, decidí llevar mi aprendizaje al
            siguiente nivel al inscribirme en la carrera de Desarrollo Frontend
            React en Coderhouse. Fue en ese momento cuando supe que esto era lo
            mío. Para afianzar mis conocimientos, también completé el intensivo
            Bootcamp de Soy Henry.
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* Vertical line running through the middle */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
              {/*======== Left card ======== */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div
                      data-aos="fade-left"
                      data-aos-duration="1200"
                      className="w-full sm:w-1/2 sm:pr-8"
                    >
                      <div className="bg-white p-4 mt-2 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                        <span className="text-smallTextColor dark:text-white text-[0.9rem] font-[700]">
                          mar. 2023 - jul. 2023
                        </span>
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Full stack web developer
                        </h3>

                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-[22px]">
                          Me gradué con el stack PERN después de completar el
                          intensivo programa de desarrollo web en Soy Henry.
                          Durante el bootcamp, adquirí experiencia en el diseño
                          y desarrollo de aplicaciones, lo que me proporciono
                          una visión amplia en el desarrollo de software.
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    src={logoHenry}
                    alt="logo soy henry"
                    className="rounded-full bg-yellow-300 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  ></img>
                </div>
              </div>
              {/*======== Left Card =======*/}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div
                      data-aos="fade-left"
                      data-aos-duration="1200"
                      className="w-full sm:w-1/2 sm:pl-8"
                    >
                      <div className="bg-white p-4 mt-2 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                        <span className="text-smallTextColor dark:text-white text-[0.9rem] font-[700]">
                          may. 2022 - nov. 2022
                        </span>
                        <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Carrera de Desarrollo Front End React
                        </h3>

                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-[22px]">
                          En esta carrera adquirimos habilidades para crear
                          sitios web y aprender las mejores prácticas de diseño
                          web. Aprendimos a programar con JavaScript y React Js.
                          Esto nos permite desarrollar sitios más complejos,
                          dinámicos y escalables.
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    src={logoCoder}
                    alt="logo coderhouse"
                    className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
