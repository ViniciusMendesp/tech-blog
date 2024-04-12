import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Articles } from "./articles";

export function Article() {
  return (
    <Container className="bg-colors-dark-60">
      <h1 className="font-bold text-2xl text-colors-dark-10 mb-10">Artigos recomendados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Articles.map((article) => (
          <Card key={article.title}  image={article.image} title={article.title} description={article.description} />
        ))}
      </div>
    </Container>
  )
}