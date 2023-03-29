import './App.css';
import AddMemory from './Components/AddMemoryComponent/AddMemory';
import DashBoard from './Components/HomePageComponent/DashBoard';
import SignIn from './Components/SignInComponent/SignIn';
import SignInInfo from './Components/SignInComponent/SignInInfo';
import SignUpInfo from './Components/SignUpComponent/SignUp';

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
