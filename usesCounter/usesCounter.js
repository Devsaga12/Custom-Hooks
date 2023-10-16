import { useState } from "react";

export const usesCounter = (initValue = 10) => {
  //TODO:valor inicial refledado en otro componente
  const [counter, setcounter] = useState(initValue);

  const aumento = (value = 1) => {
    setcounter(counter + value);
  };

  const menor = (value = 1) => {
    setcounter(counter - value);
  };

  const rest = () => {
    setcounter(initValue);
  };

  return {
    counter,
    aumento,
    rest,
    menor,
  };
};
