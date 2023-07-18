import { useState, useEffect } from "react";
import projectsData from "../../assets/data/portfolioData";
import Modal from "./Modal";

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState(projectsData);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState<null | number>(null);

  const showModalHandler = (id: number) => {
    setShowModal(true);
    setActiveID(id);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(projectsData);
    }
    if (selectTab === "web-app") {
      const filteredData = projectsData.filter(
        (item) => item.category === "Web App"
      );
      setPortfolios(filteredData);
    }
    if (selectTab === "landing-page") {
      const filteredData = projectsData.filter(
        (item) => item.category === "Landing page"
      );
      setPortfolios(filteredData);
    }
  }, [selectTab]);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor dark:text-white text-[2rem] font-[700]">
              Mis proyectos recientes
            </h3>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setSelectTab("all")}
              className="text-smallTextColor dark:text-white border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("web-app")}
              className="text-smallTextColor dark:text-white border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              Web App
            </button>
            <button
              onClick={() => setSelectTab("landing-page")}
              className="text-smallTextColor dark:text-white border border-solid border-smallTextColor py-2 px-4 rounded-[8px]"
            >
              Landing Page
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolios.map((project) => (
            <div
              key={project.id}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] relative z-[1]"
            >
              <figure>
                <img
                  className="rounded-lg"
                  src={project.imgUrl}
                  alt={project.title}
                />
              </figure>

              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block rounded-[8px]">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(project.id)}
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 
                    rounded-[8px] font-[500] ease-in duration-200"
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && <Modal activeID={activeID} setShowModal={setShowModal} />}
    </section>
  );
};

export default Portfolio;
