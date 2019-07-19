import React, { useState, useEffect} from 'react';
import axios from "axios"
import './App.css';
import StarWars from "./components/Grid.js"
import styled from 'styled-components';


const StyledP1 = styled.p`
color: red;
`
const StyledP2 = styled.p`
color: green;
`
const StyledP3 = styled.p`
color: blue;
`
const StyledP4 = styled.p`
color: orange;
`
const StyledP5 = styled.p`
color: purple;
`
const StyledP6 = styled.p`
color: yellow;
`
const StyledP7 = styled.p`
color: brown;
`
const StyledP8 = styled.p`
color: cyan;
`
const StyledH3 = styled.h3`
color: white;
`
const StyledH1 = styled.h1`
color: red;
border: 5px solid blue;
background-color: gray;
`
const StyledDiv = styled.div`
background-color: black;
`

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
    // const items = App.map(item => <li>{item}</li> );
  return (
    // {data.map((number, index) => (
    //   <button number={number} key={index}/>
    // ))};
    
    <StyledDiv className="App">
      <StyledH1 className="Header">React Wars</StyledH1>
      <StyledP1>Welcome! Here you can find every Star Wars character!</StyledP1>
      <StyledP2>...May the Force be with you!</StyledP2>

      <StarWars title={data.name}
      url={data.url}
      explanation={data.homeworld}/>
      <StyledH3>Now Some Facts!</StyledH3>
      <StyledP3>1. Luke Skywalker was almost a girl
 </StyledP3>
      <StyledP4>2. Yoda was almost a monkey in a mask
 </StyledP4>
      <StyledP5>3. Han Solo died in the original script
 </StyledP5>
      <StyledP6>4. It took four men to portray one Vader
 </StyledP6>
      <StyledP7>5. The opening text crawl took 3 hours to shoot
 </StyledP7>
 <StyledP8>All facts provided by https://www.rd.com/culture/star-wars-facts/</StyledP8>
      
    </StyledDiv>
  );
}



export default App;
