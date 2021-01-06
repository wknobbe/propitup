import React from 'react';
import './App.css';

import MyMainComponent from './components/MyMainComponent';

function App() {
  return (
    <div className="App">
      <MyMainComponent firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      <MyMainComponent firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      <MyMainComponent firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"}/>
      <MyMainComponent firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Blonde"}/>
    </div>
  );
}

export default App;
