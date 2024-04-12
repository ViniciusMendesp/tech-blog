import Image from "next/image";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import Imagem from '/public/image.svg';
export function Head() {
  return (  
  <Container className="bg-colors-dark-50 md:flex md:flex-col md:items-center lg:flex-row-reverse lg:justify-between lg:w-full">
      <div className="flex items-center justify-center">
        <Image src={Imagem} alt="Um homem feliz" className="w-60 h-60 lg:w-[400px] lg:h-[460px]" />
      </div>
    <div className="flex flex-col gap-3 lg:gap-8 lg:items-start" >
      <div className="text-center lg:text-start flex flex-col gap-6 md:w-96">
          <h1 className="font-bold text-2xl lg:text-4xl text-colors-dark-10">Encontre os <span className="text-colors-brand">melhores artigos</span> de programação em um só lugar</h1>
          <p className="text-colors-dark-10 lg:text-2xl">
          Explore o topo da programação em um só lugar! Seu destino único para dicas e tendências atuais.
          </p>
      </div>
      <Button>Buscar Artigos</Button>
    </div>
  </Container>
  )
}