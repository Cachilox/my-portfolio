const Frontend = () => {
  return (
    <div
      data-aos="fade-zoom-in"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="bg-slate-100 border border-gray-400 py-6 px-8 min-w-[330px] rounded-[1.25rem] lg:py-8 lg:px-16 lg:min-w-[350px]"
    >
      <h3 className="text-headingColor text-center font-[600] text-[1.4rem] mb-5">
        Frontend developer
      </h3>

      <div className="flex justify-center gap-x-8">
        <div className="grid items-start gap-y-4">
          <div className="flex gap-x-2">
            <i className="ri-checkbox-circle-line text-[1.2rem] text-green-500"></i>
            <div>
              <h3 className="text-[1.1rem] font-[600] leading-[25px]">HTML</h3>
              <span className="text-[0.90rem] text-gray-500">Avanzado</span>
            </div>
          </div>

          <div className="flex gap-x-2">
            <i className="ri-checkbox-circle-line text-[1.2rem] text-green-500"></i>

            <div>
              <h3 className="text-[1.1rem] font-[600] leading-[25px]">CSS</h3>
              <span className="text-[0.9rem] text-gray-500">Intermedio</span>
            </div>
          </div>

          <div className="flex gap-x-2">
            <i className="ri-checkbox-circle-line text-[1.2rem] text-green-500"></i>

            <div>
              <h3 className="text-[1.1rem] font-[600] leading-[25px]">Sass</h3>
              <span className="text-[0.9rem] text-gray-500">Intermedio</span>
            </div>
          </div>

          <div className="flex gap-x-2">
            <i className="ri-checkbox-circle-line text-[1.2rem] text-green-500"></i>

            <div>
              <h3 className="text-[1.1rem] font-[600] leading-[25px]">
                Tailwindcss
              </h3>
              <span className="text-[0.9rem] text-gray-500">Básico</span>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-y-4">
          <div className="flex gap-x-2">
            <i className="ri-checkbox-circle-line text-[1.2rem] text-green-500"></i>

            <div>
              <h3 className="text-[1.1rem] font-[600] leading-[25px]">React</h3>
              <span className="text-[0.9rem] text-gray-500">Avanzado</span>
            </div>
          </div>

          <div className="flex gap-x-2">
            <i className="ri-checkbox-circle-line text-[1.2rem] text-green-500"></i>

            <div>
              <h3 className="text-[1.1rem] font-[600] leading-[25px]">
                JavaScript
              </h3>
              <span className="text-[0.90rem] text-gray-500">Avanzado</span>
            </div>
          </div>

          <div className="flex gap-x-2">
            <i className="ri-checkbox-circle-line text-[1.2rem] text-green-500"></i>

            <div>
              <h3 className="text-[1.1rem] font-[600] leading-[25px]">
                TypeScript
              </h3>
              <span className="text-[0.9rem] text-gray-500">Intermedio</span>
            </div>
          </div>

          <div className="flex gap-x-2">
            <i className="ri-checkbox-circle-line text-[1.2rem] text-green-500"></i>

            <div>
              <h3 className="text-[1.1rem] font-[600] leading-[25px]">Redux</h3>
              <span className="text-[0.9rem] text-gray-500">Intermedio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
