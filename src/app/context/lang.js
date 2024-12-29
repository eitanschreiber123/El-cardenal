"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

// Create the context
const LangContext = createContext(undefined);

// Provider component
export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  // Function to switch the language
  const switchLang = lang => setLang(lang);

  return (
    <LangContext.Provider value={{ lang, switchLang }}>
      {children}
    </LangContext.Provider>
  );
};

// Hook for consuming the context
export const useLang = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
};