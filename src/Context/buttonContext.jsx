import React, { createContext, useState } from "react";

export const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [isBtnClick, setBtnClick] = useState(0);
  return (
    <ButtonContext.Provider value={{ isBtnClick, setBtnClick }}>
      {children}
    </ButtonContext.Provider>
  );
};
