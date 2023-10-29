import { FaDog } from "react-icons/fa6";

export default function Hero() {
  return (
    <section id="home" className="bg-white text-primary h-screen py-16 flex items-center justify-center">
      <div className="w-[90%] mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Serviços profissionais de passear com cães</h1>
          <p className="text-lg md:text-xl mt-4">O melhor companheiro do seu amigo peludo.</p>
          <a href="#pricing" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 mt-6 rounded-full">
            Começar
          </a>
        </div>
        <div className="hidden md:block absolute right-10 top-1/2 transform -translate-y-1/2">
          <FaDog className="text-6xl" />
        </div>
      </div>
    </section>
  )
}