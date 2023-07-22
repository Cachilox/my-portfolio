/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryColor: "#176B87",
        headingColor: "#081e21",
        smallTextColor: "#001C30",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
