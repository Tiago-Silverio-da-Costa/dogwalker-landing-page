
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-primary py-4">
      <div className="container flex flex-col items-center justify-center w-[90%] mx-auto max-w-5xl">
        <div className="mb-4">
          <h3 className="text-sm md:text-xl font-bold text-center">Siga o DogTrainer nas redes</h3>
        </div>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="text-3xl text-blue-500 hover:text-blue-600 transition">
            <FaFacebook />
          </a>
          <a href="#" className="text-3xl text-green-500 hover:text-green-600 transition">
            <FaWhatsapp />
          </a>
        </div>
        <div className="mb-4">
          <p className="text-sm md:text-xl text-center">© {new Date().getFullYear()} DogTrainer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}