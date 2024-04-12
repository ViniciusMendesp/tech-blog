

interface TextInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  
}

export function TextArea(props: TextInputProps) {
  return (
    <textarea className="p-4 border border-colors-dark-30 rounded-md h-36"  {...props} />
  );
}