import { FaFacebook, FaWhatsapp, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import { BiLogoFacebook } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';

export default function Contact() {
  return (
    <section id="contact" className="">
      <div className="w-[90%] mx-auto max-w-5xl flex flex-col py-20">
        <h1 className="text-4xl font-bold mb-8 text-center text-primary">Contato</h1>
        <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
          <a href="facebook.com/dogtrainer" target="_blank" className="flex flex-col items-center">
            <BiLogoFacebook className="text-3xl text-primary" />
            <p className="mt-4 text-center uppercase font-semibold text-sm opacity-70">Siga-nos</p>
            <p className="mt-2 max-w-[12rem] text-center font-medium text-xs opacity-50">Com o gerador de texto on-line você pode processar </p>
            <p className="mt-3 text-primary  text-center font-bold text-xs">facebook.com/dogtrainer</p>
          </a>
          <a href="mailto:dogtrainer@gmail.com" className="flex flex-col items-center">
            <FaWhatsapp className="text-3xl text-primary" />
            <p className="mt-4 text-center uppercase font-semibold text-sm opacity-70">Mande Mensagem</p>
            <p className="mt-2 max-w-[12rem] text-center font-medium text-xs opacity-50">Com o gerador de texto on-line você pode processar </p>
            <p className="mt-3 text-primary  text-center font-bold text-xs">(47) 1 1111-1111</p>
          </a>
          <a href="" className="flex flex-col items-center">
            <HiOutlineMail className="text-3xl text-primary" />
            <p className="mt-4 text-center uppercase font-semibold text-sm opacity-70">Contate-nos</p>
            <p className="mt-2 max-w-[12rem] text-center font-medium text-xs opacity-50">Com o gerador de texto on-line você pode processar </p>
            <p className="mt-3 text-primary  text-center font-bold text-xs">dogtrainer@gmail.com</p>
          </a>

        </div>
      </div>
    </section>
  )
}