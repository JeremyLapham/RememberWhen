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
import MyContext from './Components/context';

export default function App() {
  const [username, setUsername] = useState('');
  const [memoryItems, setMemory] = useState<[]>([]);

  const setUser = (newUsername: string) => {
    setUsername(newUsername);
  };

  const setMemoryItems = (moreMemory: any) => {
    setMemory(moreMemory);
  }

  return (
    <div className='body'>
      <MyContext.Provider value={{ username, setUser, memoryItems, setMemoryItems }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/SignInInfo' element={<SignInInfo />} />
            <Route path='/SignUp' element={<SignUpInfo />} />
            <Route path='/DashBoard' element={<DashBoard />} />
            <Route path='/AddMemory' element={<AddMemory />} />
            <Route path='/AddFolder' element={<AddFolder />} />
            <Route path='/ClickedMemory' element={<ClickedFolder />} />
            <Route path='/Settings' element={<Logout />} />
            <Route path='/Memory' element={<ShownMemory />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}