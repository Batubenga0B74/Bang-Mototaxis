import Image from "next/image"
import Logo from "../../public/images/logo.png"
import Link from "next/link"
export default function Header(){
    return(
        <div className="w-ful h-[62px] justify-center items-center flex">
            <header className="h-[62px] w-[1357] items-center flex justify-between">
                <Link href="/"><Image alt="logo" src={Logo} className="w-[150px]  " /></Link> 
                <div className=" w-[400px] h-full flex list-none gap-6 items-center justify-center text-[#4b5563]" >
                    <li>início</li>
                    <li>Benefícios</li>
                    <li>FAQ</li>
                </div>
            <Link href="/Register-motors" className="w-[158px] h-[40px] bg-[#dc2626] items-center justify-center flex rounded-full text-white font-bold text-xs">Torne-se Bang</Link>

            </header>
        </div>
    )
}