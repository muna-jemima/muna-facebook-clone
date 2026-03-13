import { useState } from 'react'
import './App.css'
import Header from "./Components/Header.jsx"
import Sidebar from './Components/Sidebar.jsx';
import Feed from "./Components/Feed.jsx";



function App() {
 
// BEM naming convention

  return (
   <div className='App'>
    

    <Header/>

    <div className='app_body'>
      <Sidebar/>
      <Feed/>
    </div>

   </div>
   
  );
}

export default App
