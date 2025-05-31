// components/FeatureCards.tsx

import {
    ShieldCheck,
    Scale,
    Eye,
    Handshake,
    Smartphone,
    DollarSign,
  } from "lucide-react"
  
  const features = [
    {
      title: "Segurança Garantida",
      description: "Trabalhe com proteção legal completa e apoio jurídico quando precisar.",
      icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
      bg: "bg-green-100",
    },
    {
      title: "Apoio Jurídico",
      description: "Nossa equipe legal está sempre pronta para te ajudar em qualquer situação.",
      icon: <Scale className="w-6 h-6 text-blue-800" />,
      bg: "bg-blue-100",
    },
    {
      title: "Maior Visibilidade",
      description: "Apareça na nossa plataforma e tenha acesso a mais clientes.",
      icon: <Eye className="w-6 h-6 text-yellow-600" />,
      bg: "bg-yellow-100",
    },
    {
      title: "Confiança dos Clientes",
      description: "Ser Bang significa ser reconhecido como um profissional confiável.",
      icon: <Handshake className="w-6 h-6 text-gray-800" />,
      bg: "bg-gray-200",
    },
    {
      title: "Tecnologia Avançada",
      description: "Use nossa app para gerenciar corridas e receber pagamentos de forma segura.",
      icon: <Smartphone className="w-6 h-6 text-blue-800" />,
      bg: "bg-blue-100",
    },
    {
      title: "Melhores Tarifas",
      description: "Ganha mais com nossas tarifas justas e transparentes.",
      icon: <DollarSign className="w-6 h-6 text-yellow-600" />,
      bg: "bg-yellow-100",
    },
  ]
  
  export default function FeatureCards() {
    return (
      <div className="flex flex-col items-center space-y-8 py-10">
        {/* Primeira linha com 3 cards */}
        <div className="flex flex-row gap-6">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="w-[390px] h-[228px] bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-all"
            >
              <div className={`p-3 rounded-full w-fit mb-2 ${feature.bg}`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-[18px] mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
  
        {/* Segunda linha com os outros 3 cards */}
        <div className="flex flex-row gap-6">
          {features.slice(3, 6).map((feature, index) => (
            <div
              key={index}
              className="w-[390px] h-[228px] bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition-all"
            >
              <div className={`p-3 rounded-full w-fit mb-2 ${feature.bg}`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-[18px] mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  