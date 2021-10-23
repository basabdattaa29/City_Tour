import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routes } from './Component/Router/Routes';
import { A } from './UseContext/A';
import React,{useState} from 'react';
import Drawer from './Component1/Miu';

//step1
export const userDetailContext= React.createContext(null);

function App() {
  //step2
  const[userDetails,setuserDetails]=useState({
    name:"Abcder",
    age:30
  });
  return (
    //step3 contextAPI
    <div>
    <userDetailContext.Provider value={userDetails}>
    <A/>
    </userDetailContext.Provider>
{/* <Routes/> */}
<Drawer/>
    </div>
  );
}

export default App;
