import { createContext } from 'react';

interface MyContextType {
  username: string;
  setUser: (username: string) => void;
  usersId: number;
  setUsersId: (usersId: number) => void;
  memoryItems: [];
  setMemoryItems: (memoryItems: object) => void;
  moreMemoryClicked: boolean;
  setMoreMemoryClicked: (moreMemoryClicked: boolean) => void;
}

export const MyContext = createContext<MyContextType>({
  username: '', setUser: () => { },
  memoryItems: [], setMemoryItems: () => { },
  usersId: 0, setUsersId: () => { },
  moreMemoryClicked: false, setMoreMemoryClicked: () => { }
});

export const resetContext = (setUser: { (username: string): void; (arg0: string): void; }, 
setUsersId: { (usersId: number): void; (arg0: number): void; }, 
setMemoryItems: { (memoryItems: object): void; (arg0: never[]): void; },
setMoreMemoryClicked: { (moreMemoryClicked: boolean): void; (arg0: boolean): void; }) => {
  setUser('');
  setMemoryItems([]);
  setUsersId(0);
  setMoreMemoryClicked(false);
}
