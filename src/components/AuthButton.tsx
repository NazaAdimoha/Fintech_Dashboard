interface ButtonProps {
  onClick?: () => void;
  text: string;
  className?: string;
}

const AuthButton = ({ onClick, text, className }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default AuthButton;
