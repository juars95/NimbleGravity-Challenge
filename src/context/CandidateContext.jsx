import { createContext, useContext } from "react";
import { useCandidateData } from "../hooks/useCandidateData";

const CandidateContext = createContext(null);

export function CandidateProvider({ children }) {
  const candidateData = useCandidateData();

  return (
    <CandidateContext.Provider value={candidateData}>
      {children}
    </CandidateContext.Provider>
  );
}

export function useCandidateContext() {
  const context = useContext(CandidateContext);
  if (!context) {
    throw new Error("useCandidateContext must be used within a CandidateProvider");
  }
  return context;
}
