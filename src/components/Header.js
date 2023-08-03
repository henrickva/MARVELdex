import Link from "next/link";

export default function Header(){
    return(
        <div className="flex justify-center items-center bg-marvel-red text-white">
            <main className="container flex justify-between m-2">
                <Link 
                    href='/'
                    className="font-bold text-2xl"
                >
                    MARVELdex
                </Link>
                <ul className="flex items-center">
                    <li className="px-2 hover:text-black"><Link href='/'>Inicio</Link></li>
                    <li className="px-2 hover:text-black"><Link href='/sobre'>Sobre</Link></li>
                </ul>
            </main>
        </div>
    )
}