import './App.css';
import AddMemory from './Components/AddMemoryComponent/AddMemory.tsx';
import DashBoard from './Components/HomePageComponent/DashBoard.tsx';
import SignIn from './Components/SignInComponent/SignIn.tsx';
import SignInInfo from './Components/SignInComponent/SignInInfo.tsx';
import SignUpInfo from './Components/SignUpComponent/SignUp.tsx';

function App() {
  return (
    <div className='body'>
      {/* <SignIn /> */}
      {/* <SignInInfo /> */}
      {/* <SignUpInfo /> */}
      {/* <DashBoard /> */}
      <AddMemory />
    </div>
  );
}

export default App;
