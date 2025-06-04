import Image from "next/image";
import Logo from "../../public/images/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-[62px] flex justify-center items-center">
      <header className="h-[62px] w-[1357px] flex items-center justify-between">
        <Link href="#">
            <Image alt="logo" src={Logo} width={150} height={62} />
            {/* <img src={Logo} alt="logo"  width={150} height={62} />  */}
        </Link>
        <ul className="w-[400px] h-full flex list-none gap-6 items-center justify-center text-[#4b5563]">
          <li>início</li>
          <li>Benefícios</li>
          <li>FAQ</li>
        </ul>
        <Link href="/Register-motors" className="w-[158px] h-[40px] bg-[#dc2626] flex items-center justify-center rounded-full text-white font-bold text-xs">
            Torne-se Bang
        </Link>
      </header>
    </div>
  );
}
