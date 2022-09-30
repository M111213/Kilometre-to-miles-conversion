import {useState} from 'react';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';


function Converter({ kilometre }){

  function convert(kilometre){
    return (kilometre/ 1.609);
  }

  return<>{convert(kilometre)}</>
}

const person = prompt(" Enter your name");
if (person == null || person == "") {
  alert( "You cancelled the prompt.");
} else {
  alert( "Hello! " + person + ", welcome in kilometres to miles converter system");
} 

function KmToMiles() {
  const [kilometre, setKilometre] = useState();
  function handlechange(j){
    setKilometre(j.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='box'>
          <h4>Kilometre to Miles Converter</h4>
       <input type="text" placeholder='Enter Kilometre here' value={kilometre} onChange ={handlechange} />
          <p>{kilometre} is kilometre {<Converter kilometre={ kilometre }/>} is miles </p>
          </div>
      </header>
    </div>
  );
}

export default KmToMiles;
