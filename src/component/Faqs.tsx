'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Como funciona o cadastro na plataforma Bang?",
    answer: "O cadastro é simples e rápido. Você preenche seus dados pessoais, informações da moto e documentos necessários. Nossa equipe analisa e aprova em até 48 horas.",
  },
  {
    question: "Quais são os requisitos para ser um mototaxista Bang?",
    answer: "Você precisa ter uma CNH categoria A, moto em boas condições, documentos atualizados e experiência como mototaxista.",
  },
  {
    question: "Existe alguma taxa para se cadastrar?",
    answer: "Não. O cadastro na plataforma Bang é totalmente gratuito.",
  },
  {
    question: "Como recebo os pagamentos das corridas?",
    answer: "Os pagamentos são feitos semanalmente via transferência bancária, com base nas corridas concluídas.",
  },
  {
    question: "A Bang oferece seguro para os mototaxistas?",
    answer: "Sim, oferecemos seguro contra acidentes durante as corridas, garantindo mais segurança para você e seus passageiros.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-yellow-600 mb-8">
        Perguntas Frequentes
      </h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border rounded-lg mb-4 bg-white shadow-sm transition duration-200"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex justify-between items-center p-4 font-semibold text-left"
          >
            <span>{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="text-blue-600" />
            ) : (
              <ChevronDown className="text-blue-600" />
            )}
          </button>

          <AnimatePresence initial={true}>
            {openIndex === index && (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden px-4 pb-4 text-gray-700"
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
}
