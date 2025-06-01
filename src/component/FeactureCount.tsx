"use client"
import CountUp from 'react-countup';
export default function Counter(){
    return(
    <div className="w-full h-[390px]   bg-[#203977]  items-center justify-center flex gap-8 flex-col py-10">

        <h2 className='text-white text-3xl font-semibold'>Números que Impressionam</h2>
      <div className="w-full h-[300px]   items-center justify-center flex gap-8 ">

            <div className="w-[500px] h-[200px] bg-[#203977] rounded-lg shadow-lg flex flex-col items-center justify-center">
            
            <CountUp
              end={25000}
              duration={4}
              decimals={1} // Sem decimais
              separator="." // Separador de milhares
              decimal="," // Separador de decimais (se houver)
              className="text-6xl font-extrabold text-yellow-300"
              enableScrollSpy={true}
              scrollSpyOnce={true}
            />
            <p className="text-sm font-medium text-gray-500 mb-2">Mototaxistas registados</p>
              </div>
              <div className="w-[500px] h-[200px]  bg-[#203977] justify-center items-center flex flex-col gap-4 rounded-lg shadow-lg ">
                  <CountUp
                  end={50000}
                  duration={5}
                  decimals={1}
                  separator='.'
                  decimal="," 
                  className="text-6xl font-extrabold text-yellow-300"
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  
                  />
                   <p className="text-sm font-medium text-gray-500 mb-2">corridas Realizadas</p>
              </div>
              <div className="w-[500px] h-[200px]  bg-[#203977] items-center justify-center flex flex-col gap-4 rounded-lg shadow-lg ">
                  <CountUp
                  end={70}
                  duration={6}
                  decimals={1}
                  separator='.'
                  decimal="," 
                  className="text-6xl font-extrabold text-yellow-300"
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  
                  />
                   <p className="text-sm font-medium text-gray-500 mb-2">satisfaçºoes dos clientes </p>
              </div>
     </div>
    </div>
    )
}