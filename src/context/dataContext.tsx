import { dashboardData } from "@/data/dashboardData";
import { createContext } from "react";

export const DataContext = createContext({});

export const DataContextProvider = ({children}) => {
  return (
    <DataContext.Provider value={dashboardData}>
      {children}
    </DataContext.Provider>
  )
}

