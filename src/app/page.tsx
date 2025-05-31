import Counter from "@/component/FeactureCount";
import FeatureCards from "@/component/FeatureCards";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full">
      <main className="w-full h-[320px] bg-[#142b63] justify-center items-center flex">
          <div className="w-[720px] h-full items-center justify-center flex flex-col gap-4">
            <h2 className="text-6xl font-bold text-white">Torne- se um  <span className="text-[#f4be0b]">Bang</span></h2>
            <p className="w-[590px] justify-center items-center flex flex-col text-center text-[#c2cadbe5]">Junte- se à maior plataforma de mototaxistas legalizados de Angola . Trabalhe com segurança, confiança e apoio jurídico completo .</p>
            <Link href="#" className="w-[190px] h-[40px] bg-[#e80] items-center justify-center flex rounded-full text-white font-bold text-xs">começar Agora</Link>

          </div>
        
      </main>
      <section className=" w-full h-[800px] py-10">
          <div className="w-full items-center justify-center flex">
            <h2 className="text-2xl font-bold ">Por que ser um <span className="text-[#089575]">Mototaxista Bang ?</span> </h2>
          </div>
        <FeatureCards/>
      </section>
      <Counter/>
      
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
       
      
      </footer>
    </div>
  );
}
