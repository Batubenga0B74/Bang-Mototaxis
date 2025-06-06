"use client"

import NextStepCard from "@/component/NextStepCard"
import { useState } from "react"
import { useTransition } from "react";

export default function RegisterMotors() {
    const [email, setemail] = useState<string>("")
    const [BI, setBI] = useState<string>("")
    const [MarcaMota, setMarcaMota] = useState<string>("")
    const [telefone, settelefone] = useState<string>("")
    const [Matricula, setMatricula] = useState<string>("")
    const [nome, setnome] = useState<string>("")
    const [isPending, startTransition] = useTransition()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (!nome || !email || !MarcaMota || !telefone || !Matricula || !BI) {
                alert("Preencha todos os campos")
                return
            }

            // Aqui você pode adicionar a lógica de envio para o backend
            alert("Formulário enviado com sucesso!")
        } catch (error) {
            console.error("Erro ao enviar:", error)
        }
    }

    return (
        <div className="w-full h-screen bg-[#142b63] justify-center items-center flex flex-col gap-4">
            <div className="w-[620px] justify-center items-center  flex flex-col gap-4">
                <h2 className="text-4xl font-bold text-white">Torne-se um <span className="text-[#f4be0b]">Bang</span></h2>
                <p className="w-[520px] text-center text-[#c2cadbe5]">
                    Preencha os dados abaixo para começar sua jornada como mototaxista legalizado
                </p>
            </div>
            <main className="w-[600px] h-[500px] bg-white rounded-4xl justify-between items-center flex flex-col px-4 py-2">
                <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit} method="post">
                    <div className="flex w-full">
                        <div className="w-1/2 gap-4 flex flex-col">
                            <div className="p-4">
                                <label className="text-blue-600">Nome completo*</label>
                                <input
                                    type="text"
                                    value={nome}
                                    onChange={(e) => setnome(e.target.value)}
                                    placeholder="Digite seu nome completo"
                                    className="border w-full h-10 px-2 rounded-xl" id="nome" />
                            </div>
                            <div className="p-4">
                                <label className="text-orange-300">Número da Matrícula*</label>
                                <input
                                    type="text"
                                    value={Matricula}
                                    onChange={(e) => setMatricula(e.target.value)}
                                    placeholder="Ex:LD-00-00AA"
                                    className="outline-blue-800 border w-full px-2 h-10 rounded-xl" id="Matricula" />
                            </div>
                            <div className="p-4">
                                <label className="text-green-600">Número de Telefone*</label>
                                <input
                                    type="text"
                                    value={telefone}
                                    onChange={(e) => settelefone(e.target.value)}
                                    placeholder="900 000 000"
                                    className="border w-full h-10 px-2 rounded-xl" id="telefone" />
                            </div>
                        </div>
                        <div className="w-1/2 gap-4 flex flex-col">
                            <div className="p-4">
                                <label className="text-green-600">Marca da Moto *</label>
                                <input
                                    type="text"
                                    placeholder="Ex:Honda, Yamaha, Suzuki"
                                    value={MarcaMota}
                                    onChange={(e) => setMarcaMota(e.target.value)}
                                    className="border w-full h-10 px-2 rounded-xl" id="Marca" />
                            </div>
                            <div className="p-4">
                                <label className="text-blue-800">Número do BI *</label>
                                <input
                                    type="text"
                                    placeholder="Digite o número do seu BI"
                                    value={BI}
                                    onChange={(e) => setBI(e.target.value)}
                                    className="outline-blue-800 border w-full px-2 h-10 rounded-xl" />
                            </div>
                            <div className="p-4">
                                <label className="text-orange-400">Email *</label>
                                <input
                                    type="text"
                                    placeholder="seu@email.com"
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    className="border w-full h-10 px-2 rounded-xl" />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full h-10 bg-yellow-600 text-white rounded-3xl cursor-pointer">
                        Enviar
                    </button>
                </form>

                <div className="w-full bg-yellow-50 h-[100px] rounded-2xl">
                    <NextStepCard />
                </div>
            </main>
        </div>
    )
}
