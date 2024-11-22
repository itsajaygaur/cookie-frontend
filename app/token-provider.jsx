'use client';

import { createContext, useContext, ReactNode } from 'react';


const TokenContext = createContext({ token: null });

export const TokenProvider = ({ 
  token, 
  children 
}) => {
  return (
    <TokenContext.Provider value={{ token }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  return useContext(TokenContext);
};