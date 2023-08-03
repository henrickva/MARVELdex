import { detailCharacter} from "@/api"
import Image from "next/image"
import Link from "next/link"

export default async function Descubra({params}){

    const {id} = params
    const characters = await detailCharacter(id)
    const {thumbnail, name, description} = characters.results[0]

    return(
        <div className="flex justify-center items-center">

        <div className="container flex flex-col gap-5 items-center justify-center my-10">
            <Image
                className="rounded-lg"
                src={`${thumbnail.path}.${thumbnail.extension}`}
                width={500}
                height={400}
                alt={`${name}`}
                />
            <div className="bg-zinc-900 p-4 rounded-lg text-white">
                <h1 className="text-center font-bold">{name}</h1>
                <p className="my-2 max-w-4xl text-center">{description}</p>
            </div>

            <Link 
                className="bg-marvel-red p-2 rounded-lg text-white"
                href='/'
            >
                Voltar para tela inicial
            </Link>
        </div>
        </div>
    )
}