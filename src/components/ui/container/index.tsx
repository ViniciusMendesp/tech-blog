interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <div className={`flex w-full flex-col gap-6 py-16 px-6 md:px-28 lg:px-[350px] ${className}`}>{children}</div>;
}