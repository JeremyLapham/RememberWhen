import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddMemory from './Components/AddMemoryComponent/AddMemory';
import DashBoard from './Components/HomePageComponent/DashBoard';
import SignIn from './Components/SignInComponent/SignIn';
import SignInInfo from './Components/SignInComponent/SignInInfo';
import SignUpInfo from './Components/SignUpComponent/SignUp';
import AddFolder from './Components/AddFolderComponent/AddFolder';
import ClickedFolder from './Components/ClickedFolder/ClickedFolder';
import Logout from './Components/Logout/Logout';
import ShownMemory from './Components/ShownMemory/ShownMemory';
import { MyContext } from './Components/context';

export default function App() {
  const [username, setUsername] = useState('');
  const [memoryItems, setMemory] = useState<[]>([]);
  const [usersId, setUserId] = useState(0);
  const [moreMemoryClicked, setClicked] = useState(false);
  const [selectedMemory, setMemoryClick] = useState({});
  const [folders, setFold] = useState([]);
  const [folderId, setFoldId] = useState(0);
  const [folderName, setFoldName] = useState('');
  const [selectedFolder, setFolderSelect] = useState([]);

  const setUser = (newUsername: string) => {
    setUsername(newUsername);
  };
  const setMemoryItems = (moreMemory: any) => {
    setMemory(moreMemory);
  };
  const setUsersId = (Id: number) => {
    setUserId(Id);
  };
  const setMoreMemoryClicked = (clicked: any) => {
    setClicked(clicked);
  };
  const setSelectedMemory = (memory: any) => {
    setMemoryClick(memory);
  };
  const setFolders = (Fold: any) => {
    setFold(Fold);
  };
  const setFolderId = (Fold: number) => {
    setFoldId(Fold);
  };
  const setFolderName = (Fold: string) => {
    setFoldName(Fold);
  };
  const setSelectedFolder = (Fold: []) => {
    setFolderSelect(Fold);
  };

  return (
    <div className='body'>
      <MyContext.Provider value={{ username, setUser, memoryItems, setMemoryItems, usersId, setUsersId, moreMemoryClicked, setMoreMemoryClicked, selectedMemory, setSelectedMemory, folders, setFolders, folderId, setFolderId, folderName, setFolderName,selectedFolder, setSelectedFolder}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/SignInInfo' element={<SignInInfo />} />
            <Route path='/SignUp' element={<SignUpInfo />} />
            <Route path='/DashBoard' element={<DashBoard />} />
            <Route path='/AddMemory' element={<AddMemory />} />
            <Route path='/AddFolder' element={<AddFolder />} />
            <Route path='/ClickedFolder' element={<ClickedFolder />} />
            <Route path='/Settings' element={<Logout />} />
            <Route path='/Memory' element={<ShownMemory />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}