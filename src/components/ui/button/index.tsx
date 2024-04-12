interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return <button className="bg-colors-brand hover:bg-colors-brand/90 duration-200 py-3 px-8 rounded-md uppercase text-colors-dark-60 font-roboto font-medium">{children}</button>
}