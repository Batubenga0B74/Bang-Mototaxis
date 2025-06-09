"use client"

import NextStepCard from "@/component/NextStepCard"
import { api } from "@/service/api"
import { useState, useEffect } from "react"
import { useTransition } from "react"

export default function RegisterMotors() {
    const [email, setemail] = useState("")
    const [BI, setBI] = useState("")
    const [marca_moto, setmarca_moto] = useState("")
    const [telefone, settelefone] = useState("")
    const [matricula, setmatricula] = useState("")
    const [nome, setnome] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [tipoMensagem, setTipoMensagem] = useState<"sucesso" | "erro" | "">("")
    const [isPending, startTransition] = useTransition()

    useEffect(() => {
        if (mensagem) {
            const timeout = setTimeout(() => {
                setMensagem("")
                setTipoMensagem("")
            }, 2000)
            return () => clearTimeout(timeout)
        }
    }, [mensagem])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!nome || !email || !marca_moto || !telefone || !matricula || !BI) {
            setMensagem("❌ Preencha todos os campos obrigatórios.")
            setTipoMensagem("erro")
            return
        }

        try {
            const res = await api.post("/register/create", {
                nome,
                email,
                marca_moto,
                telefone,
                matricula,
                BI
            })

            if (res.status === 200 || res.status === 201) {
                setMensagem("✅ Formulário enviado com sucesso!")
                setTipoMensagem("sucesso")
                //função que faz o reload quando os dados são enviados
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            } else {
                setMensagem(`❌ Erro ao enviar: ${res.statusText}`)
                setTipoMensagem("erro")
            }
        } catch (error: any) {
            console.error("Erro ao enviar:", error)
            setMensagem("❌ Erro ao enviar o formulário.")
            setTipoMensagem("erro")
        }
    }

    return (
        <div className="w-full h-screen bg-[#142b63] justify-center items-center flex flex-col gap-4 relative">
            {/* Mensagem flutuante */}
            {mensagem && (
                <div className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-xl shadow-lg transition-all duration-300 text-white text-sm font-semibold
                    ${tipoMensagem === "sucesso" ? "bg-green-500" : "bg-red-500"}`}>
                    {mensagem}
                </div>
            )}

            <div className="w-[620px] flex flex-col items-center gap-4">
                <h2 className="text-4xl font-bold text-white">
                    Torne-se um <span className="text-[#f4be0b]">Bang</span>
                </h2>
                <p className="w-[520px] text-center text-[#c2cadbe5]">
                    Preencha os dados abaixo para começar sua jornada como mototaxista legalizado
                </p>
            </div>

            <main className="w-[600px] bg-white rounded-4xl flex flex-col items-center px-4 py-2 gap-4">
                <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
                    <div className="flex w-full">
                        <div className="w-1/2 flex flex-col gap-4">
                            <div className="p-4">
                                <label className="text-blue-600">Nome completo*</label>
                                <input
                                    type="text"
                                    value={nome}
                                    onChange={(e) => setnome(e.target.value)}
                                    placeholder="Digite seu nome completo"
                                    id="Nome"
                                    className="border w-full h-10 px-2 rounded-xl" />
                            </div>
                            <div className="p-4">
                                <label className="text-orange-300">Número da Matrícula*</label>
                                <input
                                    type="text"
                                    value={matricula}
                                    onChange={(e) => setmatricula(e.target.value)}
                                    placeholder="Ex: LD-00-00AA"
                                    id="Matricula"
                                    className="border w-full h-10 px-2 rounded-xl" />
                            </div>
                            <div className="p-4">
                                <label className="text-green-600">Número de Telefone*</label>
                                <input
                                    type="text"
                                    value={telefone}
                                    onChange={(e) => settelefone(e.target.value)}
                                    placeholder="900 000 000"
                                    id="telefony"
                                    className="border w-full h-10 px-2 rounded-xl" />
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-4">
                            <div className="p-4">
                                <label className="text-green-600">Marca da Moto *</label>
                                <input
                                    type="text"
                                    value={marca_moto}
                                    onChange={(e) => setmarca_moto(e.target.value)}
                                    placeholder="Ex: Honda, Yamaha, Suzuki"
                                    id="Moto"
                                    className="border w-full h-10 px-2 rounded-xl" />
                            </div>
                            <div className="p-4">
                                <label className="text-blue-800">Número do BI *</label>
                                <input
                                    type="text"
                                    value={BI}
                                    onChange={(e) => setBI(e.target.value)}
                                    placeholder="Digite o número do seu BI"
                                    id="Bi"
                                    className="border w-full h-10 px-2 rounded-xl" />
                            </div>
                            <div className="p-4">
                                <label className="text-orange-400">Email *</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    placeholder="seu@email.com"
                                    id="emaill"
                                    className="border w-full h-10 px-2 rounded-xl" />
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        id="btn"
                        className="w-full h-10 bg-yellow-600 text-white rounded-3xl cursor-pointer hover:bg-yellow-500 transition">
                        {isPending ? "Enviando..." : "Enviar"}
                    </button>
                </form>
                <div className="w-full bg-yellow-50 h-[100px] rounded-2xl">
                    <NextStepCard />
                </div>
            </main>
        </div>
    )
}
