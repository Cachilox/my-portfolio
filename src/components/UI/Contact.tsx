const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor text-[2rem] font-[700] mb-8">
          Contact me
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <h3 className="text-[1.3rem] font-[500] text-center mb-5">
              Talk to me
            </h3>
            <div className="grid gap-y-4 max-w-[16rem] m-auto mb-8">
              <div className="flex flex-col bg-indigo-100 border border-solid border-gray-300 rounded-xl text-center">
                <i className="ri-mail-send-line text-[2rem]"></i>
                <h3 className="text-[1.3rem] font-[700]">Email</h3>
                <span className="text-gray-500">marianoalvarez01@hotmail.com</span>
                <a href="mailto:marianoalvarez01@hotmail.com" className="text-gray-500 text-lg mb-1">
                  Write me <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="grid gap-y-4 max-w-[16rem] m-auto">
              <div className="flex flex-col bg-indigo-100 border border-solid border-gray-300 rounded-xl text-center">
                <i className="ri-whatsapp-line text-[2rem]"></i>
                <h3 className="text-[1.3rem] font-[700]">Whatsapp</h3>
                <span className="text-gray-500">(+54) 9 3834352835</span>
                <a href="https://api.whatsapp.com/send?phone=5493834352835" target="_blank" className="text-gray-500 text-lg mb-1">
                  Write me <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form action="#" className="w-full ">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px] border border-gray-400"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-[5px] border border-gray-400"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[5px] border border-gray-400"
                />
              </div>

              <div className="mb-5">
                <textarea
                  rows={3}
                  placeholder="Write your message"
                  className="w-full p-3 focus:outline-none rounded-[5px] border border-gray-400"
                />
              </div>

              <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
