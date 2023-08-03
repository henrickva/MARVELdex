import Image from "next/image"
import Link from "next/link"
export default function Card({character}){
    character.id
    return(
        <div className="w-full bg-base-200 shadow-lg flex justify-between p-2  rounded-lg">
            <Image 
                className="rounded-lg"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                height={200} 
                width={100} 
                alt='character photo'/>
            <div className="flex flex-col justify-around items-center">
                <h1>Nome do personagem:<br/> {character.name}</h1>
                <Link 
                    className="bg-marvel-red p-2 rounded-xl text-white hover:opacity-80"
                    href={`/character/${character.id}`}>
                    Saiba Mais
                </Link>
            </div>
        </div>
    )
}