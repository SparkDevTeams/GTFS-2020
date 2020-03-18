import React, { Component } from 'react';
import './App.css';
import MainPage from './Components/MainPage/MainPage';
//TODO Get Approval to Remove
import Navbar from "./Components/navbar/Navbar";
// function App() {
//   return (
//     <div>
//       <MainPage style={{float: "left"}}/>
//     </div>
//   );
// }



//TODO Get Approval to convert to functional component
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
