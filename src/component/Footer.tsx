import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A1F66] to-[#06153C] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Call to Action */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para começar sua jornada Bang?
          </h2>
          <p className="mb-6 text-lg md:text-xl">
            Cadastre-se agora e comece a trabalhar como mototaxista legalizado em menos de 48 horas.
          </p>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold py-3 px-6 rounded-full shadow-md hover:opacity-90 transition">
            Assine com a bang
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-600 pt-12">
          {/* Logo e Descrição */}
          <div>
            <h3 className="text-yellow-400 font-bold text-xl mb-2">Bang</h3>
            <p className="text-sm text-gray-300">
              Legalizando e organizando mototaxistas para um transporte mais seguro e confiável.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold text-gray-200 mb-3">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Benefícios</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-gray-200 mb-3">Contato</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> contato@bang.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +244 900 000 000
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Luanda, Angola
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-600 pt-6">
          © 2024 <span className="text-yellow-400">Bang</span>. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
