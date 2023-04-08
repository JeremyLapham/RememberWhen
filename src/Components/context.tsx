import { createContext } from 'react';

interface MyContextType {
    username: string;
    setUser: (username: string) => void;
  }
  
  const MyContext = createContext<MyContextType>({ username: '', setUser: () => {} });
  
  export default MyContext;