import React from "react";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
  name?: string;
  className?: string

  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const AuthInput = ({
  value,
  onChange,
  placeholder,
  type,
  name,
  onBlur,
  className
}: InputProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      name={name}
      onBlur={onBlur}
      className={className}
    />
  );
};

export default AuthInput;
