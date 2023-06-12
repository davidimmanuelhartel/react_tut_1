import React from "react";
import onClick from "react";

interface Props {
  onClick: () => void;
  children: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
}

const Button = ({ onClick, children, color = "primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
