import React, { useState, useEffect} from 'react';
import axios from "axios"
import './App.css';
import StarWars1 from "./components/Grid.js"
import Map from "./components/Map.js"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 const [persondata, setData] = useState();
    useEffect(() => {
      console.log("first render")
    axios.get('https://swapi.co/api/people/')
    .then(res => {
      console.log(res.data);
      setData(res.data.results);
    });
    }, [])
    if(!persondata){
     return <h1>Loading...</h1>
    }else{
      return (
        <div>
        {persondata.map((person, index) => <Map person={person} key={index}/>)};
        </div>
      );
    }
  
}



export default App;
