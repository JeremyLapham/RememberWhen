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
  selectedMemory: any;
  setSelectedMemory: (selectedMemory: any) => void;
  folders: any;
  setFolders: (folders: any) => void;
  folderId: number;
  setFolderId: (folderId: number) => void;
  folderName: string;
  setFolderName: (folderName: string) => void;
  selectedFolder: any;
  setSelectedFolder: (selectedFolder: any) => void;
}

export const MyContext = createContext<MyContextType>({
 username: '', setUser: () => { },
 memoryItems: [], setMemoryItems: () => { },
 usersId: 0, setUsersId: () => { },
 moreMemoryClicked: false, setMoreMemoryClicked: () => { },
 selectedMemory: {}, setSelectedMemory: () => {},
 folders: [], setFolders: () => {},
 folderId: 0, setFolderId: () => {},
 folderName: '', setFolderName: () => {},
 selectedFolder: {}, setSelectedFolder: () => {}
});

export const resetContext = (
  setUser: { (username: string): void; (arg0: string): void; },
  setUsersId: { (usersId: number): void; (arg0: number): void; },
  setMemoryItems: { (memoryItems: object): void; (arg0: never[]): void; },
  setMoreMemoryClicked: { (moreMemoryClicked: boolean): void; (arg0: boolean): void; },
  setFolders: (arg0: never[]) => void) => {
  setUser('');
  setMemoryItems([]);
  setUsersId(0);
  setMoreMemoryClicked(false);
  setFolders([])
}
