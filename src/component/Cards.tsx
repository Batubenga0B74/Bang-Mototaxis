"use client"
import { useEffect, useState } from "react";
import { api } from "@/service/api";
interface CarBrand {
    nome: string;
    telefone: string;
    marca_moto:string;
    matricula:string;
  }

export default function CarBrands(){
    const [brands, setBrands] = useState<CarBrand[]>([]);
    useEffect(()=>{
        const fechetBrands = async ()=>{
            try {
               const res = await api.get<CarBrand[]>("/register/list") 
               setBrands(res.data);
            } catch (err: any) {
                console.error('Erro ao buscar marcas:', err.message); 
            }
        };
        fechetBrands()
    },[])
    
    return(
        <div className="w-full  grid grid-cols-4 gap-6 p-6">
        {brands.map((brand)=>(
        <article className=" w-[400px] h-[500px] bg-amber-50 rounded-2xl items-center gap-10 py-10 flex flex-col">
            <figure className=" w-[150px] h-[150px] bg-blue-400 rounded-full justify-center flex text-2xl font-semibold text-white items-center">
            {brand.nome
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")
            .toUpperCase()}
            </figure>
            <div className="w-full flex-col  flex h-[200px] gap-4 p-8">
                
                    <>
                    <span className="font-semibold">Nome :{brand.nome}</span>
                    <span>Marca da mota :{brand.marca_moto}</span>
                    <span> Matricula :{brand.matricula}</span>
                    <span>telefone :{brand.telefone}</span>
                    </>
                    
              
            </div>
        </article>
           ))}
           </div>
    )
}