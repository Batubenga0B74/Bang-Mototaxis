// components/NextStepCard.tsx
export default function NextStepCard() {
    return (
      <div className="bg-white rounded-lg shadow-md  px-6 h-[100px]  overflow-hidden">
        <h2 className="flex items-center text-yellow-600 font-semibold text-sm mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Próximos Passos:
        </h2>
        <ul className="text-xs text-gray-800 leading-snug ">
          <li>• Analisaremos seus dados em até 48 horas</li>
          <li>• Entraremos em contato via WhatsApp ou telefone</li>
          <li>• Agendaremos uma visita para validação dos documentos</li>
          <li>• Você receberá seu kit Bang e poderá começar a trabalhar!</li>
        </ul>
      </div>
    );
  }
  