/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { FormEvent, useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const credentials = {
    SERVICE_ID: import.meta.env.VITE_SERVICE_ID as string,
    TEMPLATE_ID: import.meta.env.VITE_TEMPLATE_ID as string,
    PUBLIC_KEY: import.meta.env.VITE_PUBLIC_KEY as string,
  };

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    from_name: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      setIsSending(true);
      emailjs
        .sendForm(
          credentials.SERVICE_ID,
          credentials.TEMPLATE_ID,
          form.current,
          credentials.PUBLIC_KEY
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
            clearForm();
            setIsSending(false);
            toast.success("Mensaje enviado correctamente!", {
              position: "bottom-left",
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          },
          (error: EmailJSResponseStatus) => {
            console.log(error.text);
            setIsSending(false);
          }
        );
    }
  };

  const clearForm = () => {
    setFormData({
      user_name: "",
      user_email: "",
      from_name: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor dark:text-white text-[2rem] font-[700] mb-8">
          Contáctame
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <h3 className="text-[1.3rem] dark:text-white font-[500] text-center mb-5">
              Háblame
            </h3>
            <div className="grid gap-y-4 max-w-[16rem] m-auto mb-8">
              <div className="flex flex-col bg-indigo-100 border border-solid border-gray-300 dark:text-white dark:bg-gray-800 rounded-xl text-center">
                <i className="ri-mail-send-line text-[2rem]"></i>
                <h3 className="text-[1.3rem] font-[700]">Email</h3>
                <span className="text-gray-500">
                  marianoalvarez01@hotmail.com
                </span>
                <a
                  href="mailto:marianoalvarez01@hotmail.com"
                  className="text-gray-500 dark:text-gray-300 text-lg mb-1"
                >
                  Escríbeme <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
            <div className="grid gap-y-4 max-w-[16rem] m-auto">
              <div className="flex flex-col bg-indigo-100 border border-solid border-gray-300 dark:text-white dark:bg-gray-800 rounded-xl text-center">
                <i className="ri-whatsapp-line text-[2rem]"></i>
                <h3 className="text-[1.3rem] font-[700]">Whatsapp</h3>
                <span className="text-gray-500">(+54) 9 3834352835</span>
                <a
                  href="https://api.whatsapp.com/send?phone=5493834352835"
                  target="_blank"
                  className="text-gray-500 dark:text-gray-300 text-lg mb-1"
                >
                  Escríbeme <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full mt-20 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 border border-gray-300 rounded-xl dark:bg-gray-800 px-4 lg:px-8 py-8">
            <form ref={form} onSubmit={sendEmail} className="w-full ">
              <div className="mb-5">
                <input
                  type="text"
                  name="user_name"
                  required
                  value={formData.user_name}
                  onChange={handleChange}
                  placeholder="Ingresa tu nombre"
                  className="w-full p-3 focus:outline-none rounded-[5px] border border-gray-400"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  name="user_email"
                  required
                  value={formData.user_email}
                  onChange={handleChange}
                  placeholder="Ingresa tu email"
                  className="w-full p-3 focus:outline-none rounded-[5px] border border-gray-400"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Asunto"
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full p-3 focus:outline-none rounded-[5px] border border-gray-400"
                />
              </div>

              <div className="mb-5">
                <textarea
                  rows={3}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Escribe tu mensaje"
                  className="w-full min-h-[100px] max-h-[120px] p-3 focus:outline-none rounded-[5px] border border-gray-400"
                />
              </div>

              <input
                className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-150"
                type="submit"
                value={isSending ? "Enviando..." : "Enviar mensaje"}
                disabled={isSending}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
