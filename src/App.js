import React, { Component } from 'react';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
import Navbar from "./Components/navbar/Navbar";
// function App() {
//   return (
//     <div>
//       <MainPage style={{float: "left"}}/>
//     </div>
//   );
// }




class App extends Component {

  render() {

    return (
      <>
        <div>
            <MainPage/>
        </div>
      </>
       
    )
    
  }
}

export default App;
