
import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-primary py-4">
      <div className="container flex flex-col items-center justify-center w-[90%] mx-auto max-w-5xl">
        <div className="mb-4">
          <h3 className="text-2xl font-bold">Connect with us on social media</h3>
        </div>
        <div className="flex space-x-4 mb-4">
          <a href="#" className="text-4xl text-blue-500 hover:text-blue-600 transition">
            <FaFacebook />
          </a>
          <a href="#" className="text-4xl text-green-500 hover:text-green-600 transition">
            <FaWhatsapp />
          </a>
          <a href="#" className="text-4xl text-pink-500 hover:text-pink-600 transition">
            <FaInstagram />
          </a>
        </div>
        <div className="mb-4">
          <p>© {new Date().getFullYear()} Dog Walker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}