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
    description: "En este proyecto, desarrollamos una app tipo marketplace con un equipo de desarrollo ágil con sprints semanales en la cual se desarrolló las siguientes features: (CRUD de productos, auth, filtros combinados, ordenamientos, envío de mail transaccionales, reviews, carrito de compras, dashboard admin, chat bot, subida de imágenes, pasarela de pagos, etc…) .",
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
    siteUrl: "https://www.youtube.com/watch?v=XQNHgjvIK84",
    repository: "https://github.com/Cachilox/facil-market-proyect",
  },
  {
    id: 2,
    imgUrl: portfolioImg02,
    category: "Web App",
    title: "Electro Shop",
    description: "Este proyecto fue realizado durante mi periodo de estudio en el curso de React en CoderHouse. Los usuarios pueden iniciar sesión/registrarse. Desde el índice, pueden navegar por todo el catálogo de productos. Desde el detalle del producto, pueden agregar productos al carrito luego ir a la vista de pago y enviar el pedido con sus datos. y cuando la compra se completa exitosamente, se redirige al usuario a su orden de compra y ver los productos adquiridos.",
    technologies: ["JavaScript", "React", "Sass", "Firebase"],
    siteUrl: "https://electroshop.vercel.app/",
    repository: "https://github.com/Cachilox/Ecommerce-ElectroShop",
  },
  {
    id: 3,
    imgUrl: portfolioImg03,
    category: "Web App",
    title: "Henry Dogs",
    description: "Diseñar y desarrollar una App de perros que incluía: búsquedas, filtrados, ordenamientos y creación.",
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
    description: "Este proyecto fue realizado durante el curso de Javascript de CoderHouse, principalmente aprendiendo estructuras de datos y conceptos básicos del lenguaje. La idea del proyecto en sí es desarrollar un simulador de algún servicio, en este caso crear un simulador de productos donde se pueda agregar al carrito, eliminar, confirmar compra, etc.",
    technologies: ["JavaScript", "HTML5", "Sass"],
    siteUrl: "https://cachilox.github.io/ecommerce-sneakers/",
    repository: "https://github.com/Cachilox/ecommerce-sneakers",
  },
  {
    id: 5,
    imgUrl: portfolioImg05,
    category: "Landing page",
    title: "Easybank",
    description: "desarrollar una landing page de un desafío de codificación de Frontend mentor.",
    technologies: ["JavaScript", "HTML5", "Sass"],
    siteUrl: "https://cachilox.github.io/Easybank-landing-page/",
    repository: "https://github.com/Cachilox/Easybank-landing-page",
  },
  {
    id: 6,
    imgUrl: portfolioImg06,
    category: "Web App",
    title: "Mi portafolio",
    description: "",
    technologies: ["TypeScript", "React", "Tailwindcss"],
    siteUrl: "/",
    repository: "https://github.com/Cachilox/my-portfolio",
  },
];

export default proyects;
