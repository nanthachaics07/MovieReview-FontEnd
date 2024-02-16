import React, { createContext, useState, useContext } from 'react';

interface AuthContextType {
  jwtToken: string;
  setJwtToken: React.Dispatch<React.SetStateAction<string>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC = ({ children }) => {
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [jwtToken, setJwtToken] = useState<string>(''); // Initialize with an empty string

  console.log("jwtToken in AuthContext : = ", jwtToken);

  return (
    <AuthContext.Provider value={{ jwtToken, setJwtToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
