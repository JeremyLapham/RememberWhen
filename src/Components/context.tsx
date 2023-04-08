import { createContext } from 'react';

interface MyContextType {
    username: string;
    setUser: (username: string) => void;
    memoryItems: [];
    setMemoryItems: (memoryItems: object) => void;
  }
  
  const MyContext = createContext<MyContextType>({ username: '', setUser: () => {}, memoryItems: [], setMemoryItems: () => {} });
  
  export default MyContext;