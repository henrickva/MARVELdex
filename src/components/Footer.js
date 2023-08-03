import Link from "next/link";

export default function Footer(){
    return(
        <section className="bg-zinc-900 flex flex-col justify-center items-center p-6 text-white">
            <p className="font-bold text-2xl m-4">MARVELdex</p>
            <p className="flex flex-col text-center">Projeto densenvolvido com a API da Marvel que pode ser acessada 
                <Link
                    className="underline hover:text-marvel-red" 
                    target='_blank' 
                    href='https://developer.marvel.com/'>
                     clicando aqui
                </Link>
            </p>
            <p className="mt-2">Desenvolvido por <Link className="hover:text-marvel-red" href='https://github.com/henrickva'>henrickva</Link></p>
            
        </section>
    )
}