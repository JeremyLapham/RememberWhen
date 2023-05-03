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
  const [username, setUser] = useState('');
  const [memoryItems, setMemory] = useState<[]>([]);
  const [usersId, setUsersId] = useState(0);
  const [moreMemoryClicked, setMoreMemoryClicked] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState({});
  const [folders, setFolders] = useState([]);
  const [folderId, setFolderId] = useState(0);
  const [folderName, setFolderName] = useState('');
  const [selectedFolder, setSelectedFolder] = useState([]);
  const [folderEdit, setFolderEdit] = useState('');
  const [isEditFolder, setIsEditFolder] = useState(false);
  const [memoryEdit, setMemoryEdit] = useState({});
  const [isEditMemory, setIsMemoryEdit] = useState(false);
  const [fromAddFolder, setFromAddFolder] = useState(false);



  const setMemoryItems = (moreMemory: any) => {
    setMemory(moreMemory);
  };

  return (
    <div className='body'>
      <MyContext.Provider value={{ username, setUser, memoryItems, setMemoryItems, usersId, setUsersId, moreMemoryClicked, setMoreMemoryClicked, selectedMemory, setSelectedMemory, folders, setFolders, folderId, setFolderId, folderName, setFolderName, selectedFolder, setSelectedFolder, folderEdit, setFolderEdit, isEditFolder, setIsEditFolder, memoryEdit, setMemoryEdit, isEditMemory, setIsMemoryEdit, fromAddFolder, setFromAddFolder }}>
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