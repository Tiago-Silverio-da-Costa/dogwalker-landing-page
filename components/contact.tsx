import { FaFacebook, FaWhatsapp, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';


export default function Contact() {
  return (
    <section id="contact" className="h-screen">
      <div className="w-[90%] mx-auto max-w-5xl">
        <div className="container mx-auto p-6">
          <h1 className="text-4xl font-bold mb-8 text-center text-primary">Contato</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary text-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Entrar em contato</h2>
              <p className="mb-4">
              Se você tiver alguma dúvida, não hesite em nos contatar usando os seguintes métodos.
              </p>
              <div className="flex items-center space-x-2 mb-4">
                <FaPhone className="text-2xl" />
                <span>123-456-7890</span>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <FaEnvelope className="text-2xl" />
                <span>info@dogwalker.com</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Siga-nos nas redes sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-3xl text-blue-500 hover:underline">
                  <FaFacebook />
                </a>
                <a href="#" className="text-3xl text-green-500 hover:underline">
                  <FaWhatsapp />
                </a>
                <a href="#" className="text-3xl text-pink-500 hover:underline">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="bg-primary text-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Envie-nos uma mensagem</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                  <input type="text" id="name" name="name" className="w-full text-black px-4 py-2 rounded-md focus:ring focus:ring-blue-200 focus:outline-none" placeholder="Seu nome" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                  <input type="email" id="email" name="email" className="w-full text-black px-4 py-2 rounded-md focus:ring focus:ring-blue-200 focus:outline-none" placeholder="Seu email" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                  <textarea id="message" name="message" className="w-full text-black px-4 py-2 rounded-md focus:ring focus:ring-blue-200 focus:outline-none" placeholder="Sua mensagem" required></textarea>
                </div>
                <button type="submit" className="bg-white hover:bg-opacity-80 text-black font-semibold py-2 px-4 rounded-md">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}