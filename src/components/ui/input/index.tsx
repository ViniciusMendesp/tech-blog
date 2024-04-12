

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  
}

export function TextInput(props: TextInputProps) {
  return (
    <input className="p-4 border border-colors-dark-30 rounded-md" {...props} />
  );
}