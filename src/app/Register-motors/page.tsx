export default function RegisterMotors(){
    return(
        <div className="w-full h-screen bg-[#142b63] justify-center items-center flex flex-col gap-4">
              <div className="w-[620px] justify-center items-center  flex flex-col gap-4">
                <h2 className="text-4xl font-bold text-white">Torne- se um  <span className="text-[#f4be0b]">Bang</span></h2>
                <p className="w-[520px] justify-center items-center flex flex-col text-center text-[#c2cadbe5]">Preencha os dados abaixo para começar sua jornada como mototaxista legalizado</p>
             </div>
             <main className="w-[600px] h-[500px] bg-white rounded-4xl justify-between items-center flex flex-col px-4 py-2">
                <form className="flex">
                    <div className="w-1/2 h-[200px] gap-4 flex flex-col">
                        <div className="w-full h-18 items-center p-4 flex-col">
                            <label>Nome completo*</label>
                            <input type="text" placeholder="Digite seu nome completo"  className="border w-full h-8 px-2"/>
                        </div>
                        <div className="w-full h-18 items-center p-4 flex-col">
                            <label>Número da Matrícula*</label>
                            <input type="text" placeholder="Ex:LD-00-00AA" className="outline-blue-800 rounded-xs border w-full px-2 h-8" />
                        </div>
                        <div className="w-full h-18 items-center p-4 flex-col">
                            <label>Número de Telefone*</label>
                            <input type="text" placeholder="900 000 000" className="border w-full h-8 px-2" />
                        </div>
                    </div>
                    <div className="w-1/2 h-[200px] gap-4 flex flex-col">
                        <div className="w-full h-18 items-center p-4 flex-col">
                            <label>Marca da Moto *</label>
                            <input type="text" placeholder="Ex:Honda,yamaha,suziki"  className="border w-full h-8 px-2"/>
                        </div>
                        <div className="w-full h-18 items-center p-4 flex-col">
                            <label>Número do BI *</label>
                            <input type="text" placeholder="Digite o numero do seu BI" className="outline-blue-800 rounded-xs border w-full px-2 h-8" />
                        </div>
                        <div className="w-full h-18 items-center p-4 flex-col">
                            <label>Email *</label>
                            <input type="text" placeholder="seu@email.com" className="border w-full h-8 px-2" />
                        </div>
                    </div>
                </form>
                <button className="w-full h-10 bg-amber-700 rounded-3xl">Enviar</button>
                <div className="w-full bg-amber-300 h-[100px] rounded-2xl">

                </div>
             </main>
        </div>
    )
}