import Link from 'next/link'
export const metadata = {
    title: 'Página Não Encontrada'
}

export default function NotFound(){
    return(
        <div className="h-screen flex flex-col items-center justify-center bg-cover bg-[url('../assets/bg-marvel2.png')] bg-opacity-25">
            <div className='bg-white p-3 rounded drop-shadow-md'>
                <h1 className='text-5xl text-center'>404</h1>
                <h2>Página não encontrada </h2>
                <Link
                    className='hover:text-red-900' 
                    href={'/'}
                    >
                    Voltar para HomePage
                </Link>
            </div>
        </div>
    )
}   