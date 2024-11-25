"use client";

import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export function ContextProvider({ children }) {
  const [active, setActive] = useState("همه");

  return (
    <MenuContext.Provider value={{ active, setActive }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {
  return useContext(MenuContext);
}
