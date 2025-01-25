import React from "react";

type ButtonProps = {
  onClick: () => void;
  label: string;
};

const MyButton: React.FC<ButtonProps> = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default MyButton;
