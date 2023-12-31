import projectsData from "../../assets/data/portfolioData";
import { useRef, useEffect } from "react";

interface ModalProps {
  activeID: number | null;
  setShowModal: (value: boolean) => void;
}

const Modal = ({ activeID, setShowModal }: ModalProps) => {
  const portfolios = projectsData.find((data) => data.id === activeID);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [setShowModal]);

  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40">
      <div
        ref={modalRef}
        className="w-11/12 max-h-[530px] mt-9 overflow-y-auto scrollbar-thin scrollbar-thumb-primaryColor scrollbar-track-slate-700  md:max-w-[600px] md:w-full md:max-h-[538px] md:mt-[2.45rem] absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5"
      >
        <div>
          <figure>
            <img
              className="rounded-[8px]"
              src={portfolios?.imgUrl}
              alt={portfolios?.title}
            />
          </figure>
        </div>

        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-2">
            {portfolios?.title}
          </h2>

          <p className="text-[15px] leading-7 text-smallTextColor">
            {portfolios?.description}
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-[18px] font-[600]">
              Technologies:
            </h4>
            {portfolios?.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-300 py-1 px-2 rounded-[5px] text-[14px] leading-0"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex gap-10">
            <a
              className="bg-primaryColor text-white py-2 px-4 mt-5 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300"
              href={portfolios?.siteUrl}
              target="_blank"
            >
              Demo <i className="ri-pages-line"></i>
            </a>
            <a
              className="bg-primaryColor text-white py-2 px-4 mt-5 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300"
              href={portfolios?.repository}
              target="_blank"
            >
              Code <i className="ri-code-line"></i>
            </a>
          </div>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
