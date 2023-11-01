import { FaDog } from "react-icons/fa6";

export default function Hero() {
  return (
    <section id="home" className="bg-white  text-primary py-16 flex items-center justify-center">
      <div className="w-[90%] mx-auto max-w-5xl relative flex flex-col justify-center items-center py-24">
        <h1 className="text-center text-4xl md:text-6xl font-bold">Serviço profissional de passeio com cães</h1>
        <p className="text-center text-lg md:text-xl mt-4">O melhor companheiro do seu amigo peludo.</p>
        <a href="#contact" className="bg-primary text-white w-fit text-center font-semibold py-2 px-4 mt-6 rounded-md">
          Começar
        </a>
        <div className="hidden md:block absolute right-10 top-1/2 transform -translate-y-1/2">
          <FaDog className="text-6xl" />
        </div>
      </div>
    </section>
  )
}