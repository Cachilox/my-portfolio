import Frontend from "./Frontend";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h3 className="text-headingColor text-[2rem] font-[700] mb-12">
          Habilidades
        </h3>

        <div className="flex items-center justify-around flex-wrap gap-10">
          <Frontend />
          <Backend />
        </div>
      </div>
    </section>
  );
};

export default Skills;
