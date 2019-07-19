import React, { useState, useEffect} from 'react';
import axios from "axios"
import './App.css';
import StarWars from "./components/Grid.js"
  // import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 const [data, setData] = useState({});
    useEffect(() => {
      console.log("first render")
    axios.get('https://swapi.co/api/people/')
    .then(res => {
      console.log(res.data);
      setData(res.data);
    });
    }, [])
  
  //   const StyledP1 = styled.p`
  //   color: red;
  // `
  // const StyledP2 = styled.p`
  // color: green;
  // `
  // const StyledP3 = styled.p`
  // color: blue;
  // `
  // const StyledP4 = styled.p`
  // color: orange;
  // `
  // const StyledP5 = styled.p`
  // color: purple;
  // `
  // const StyledP6 = styled.p`
  // color: yellow;
  // `
  // const StyledP7 = styled.p`
  // color: brown;
  // `
  // const StyledP8 = styled.p`
  // color: cyan;
  // `
  // const StyledP9 = styled.p`
  // color: crimson;
  // `
  // const StyledP10 = styled.p`
  // color: olive;
  // `
  // const StyledH3 = styled.h3`
  // color: white;
  // `
  // const StyledH1 = styled.h1`
  // color: teal;
  // border: 5px solid red;
  // background-color: silver;
  // `
  // const StyledDiv = styled.div`
  // background-color: black;
  // `

  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <p>Welcome! Here you can find every Star Wars character!</p>
      <StarWars title={data.name}
      url={data.url}
      explanation={data.homeworld}/>
    </div>
  );
}



export default App;
