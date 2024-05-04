
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import LandingPage from './components/Screens/LandingPage/LandingPage';
import MyNotes from './components/Screens/MyNotes/MyNotes';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dashboard/>} >
      <Route path="myNotes" element={<MyNotes/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path="*" element={""}/>
    </Route>
      {/* <Route path="/dashboard" component={<LandingPage/>} />
      <Route path="/myNotes" component={<MyNotes/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
