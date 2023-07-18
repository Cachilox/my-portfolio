import portfolioImg01 from "../images/proyect-1.png";
import portfolioImg02 from "../images/proyect-2.png";
import portfolioImg03 from "../images/proyect-3.png";
import portfolioImg04 from "../images/proyect-4.png";
import portfolioImg05 from "../images/proyect-5.png";
import portfolioImg06 from "../images/proyect-6.png";

const proyects = [
  {
    id: 1,
    imgUrl: portfolioImg01,
    category: "Web App",
    title: "Facil Market",
    technologies: [
      "TypeScript",
      "React",
      "Redux",
      "Sass",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
    siteUrl: "https://facil-market-proyect.vercel.app/",
    repository: "https://github.com/Cachilox/facil-market-proyect",
  },
  {
    id: 2,
    imgUrl: portfolioImg02,
    category: "Web App",
    title: "Electro Shop",
    technologies: ["JavaScript", "React", "Sass", "Firebase"],
    siteUrl: "https://electroshop.vercel.app/",
    repository: "https://github.com/Cachilox/Ecommerce-ElectroShop",
  },
  {
    id: 3,
    imgUrl: portfolioImg03,
    category: "Web App",
    title: "Henry Dogs",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize",
    ],
    siteUrl: "https://pi-dogs-cachi.vercel.app/",
    repository: "https://github.com/Cachilox/PI-Dogs",
  },
  {
    id: 4,
    imgUrl: portfolioImg04,
    category: "Web App",
    title: "Sneakers",
    technologies: ["JavaScript", "HTML5", "Sass"],
    siteUrl: "https://cachilox.github.io/ecommerce-sneakers/",
    repository: "https://github.com/Cachilox/ecommerce-sneakers",
  },
  {
    id: 5,
    imgUrl: portfolioImg05,
    category: "Landing page",
    title: "Easybank",
    technologies: ["JavaScript", "HTML5", "Sass"],
    siteUrl: "https://cachilox.github.io/Easybank-landing-page/",
    repository: "https://github.com/Cachilox/Easybank-landing-page",
  },
  {
    id: 6,
    imgUrl: portfolioImg06,
    category: "Web App",
    title: "My portfolio",
    technologies: ["TypeScript", "React", "Tailwindcss"],
    siteUrl: "#",
    repository: "",
  },
];

export default proyects;
