interface CardProps {
  image: string
  title: string
  description: string
}

export function Card({ image, title, description }: CardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-colors-dark-40">
      <img src={image} alt={title} className="w-full h-44 object-cover rounded-t-lg" />
      <div className="flex flex-col  gap-3 px-6 py-4">
      <h2 className="font-bold text-lg text-colors-dark-10 line-clamp-2">{title}</h2>
      <p className="text-colors-dark-10">{description}</p>
      </div>
    </div>
  )
}