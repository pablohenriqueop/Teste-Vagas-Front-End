import React, { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
}

const Form = ({ children }: FormProps) => {
  return <form>{children}</form>;
};

export default Form;
