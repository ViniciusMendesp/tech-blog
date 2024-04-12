import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { TextInput } from "@/components/ui/input";
import { TextArea } from "@/components/ui/textarea";

export function Form() {
  return (
    <Container className="lg:px-[640px] bg-colors-dark-50">
      <h1 className="font-bold text-2xl text-colors-dark-10 mb-10 ">Entre em contato</h1>
       <TextInput placeholder="Nome"/>
       <TextInput placeholder="E-mail" type="email"/>
       <TextArea placeholder="Assunto da mensagem"/>
       <Button>Entrar em contato</Button>
    </Container>
  )
}