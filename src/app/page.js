import { getCharacter } from "@/api"
import Image from "next/image"
import Card from "@/components/Card"
import logoMarvel from '@/assets/logoMarvel.png'

export default async function Home() {

  const characters = await getCharacter()

  return (
    <div className="flex justify-center items-center">

    <section className="container text-center">
      <div className="h-screen text-marvel-red flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">MARVELdex</h1>
        <p className="my-2 max-w-4xl">
         Abaixo você pode conferir alguns personagens da Marvel e interagir com os cards para saber mais sobre cada personagem apenas clicando em saiba mais :)
        </p>
        <Image src={logoMarvel} alt='logo da marvel' width={500} height={240} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 my-10">
      {characters.results.map((character)=>(
        <>
          <Card key={character.id} character={character} />
        </>
      ))}
      </div>
    </section>
    </div>
  )
}
