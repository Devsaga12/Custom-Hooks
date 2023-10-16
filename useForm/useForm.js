import { useState } from "react";

export const useForm = ( initForm ={}) => {
  //mantener el esatdo
  const [ formState, setFormState ] = useState( initForm );

  //valor de cambio
  const inputChange = ({ target }) => {
    const { name, value } = target;

    //cambio de estado
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    const onResetForm = () =>{
      setFormState(initForm);
    }

  return {
    ...formState,
    formState,
    inputChange,
    onResetForm
  };
};
