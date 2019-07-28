import React from "react"
import styled from 'styled-components';
import StarWars1 from "./Grid.js"



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

const Map = (props) => {
    return(
        
<StyledDiv className="App">
{/* <StyledH1 className="Header">React Wars</StyledH1>
<StyledP1>Welcome! Here you can find every Star Wars character!</StyledP1>
<StyledP2>...May the Force be with you!</StyledP2> */}

<StarWars1 name={props.person.name}/>
 <StyledP2> This character's height is {props.person.height}</StyledP2>
 <StyledP3> Their mass is {props.person.mass}</StyledP3>
 <StyledP4> Their gender is {props.person.gender}</StyledP4>
 <StyledP5> Their hair color is {props.person.hair_color}</StyledP5>
 <StyledP6> And finally, their eye color is {props.person.eye_color}</StyledP6>
{/* <StyledH3>Now Some Facts!</StyledH3> */}
 {/* <StyledP3>1. Luke Skywalker was almost a girl
</StyledP3>
<StyledP4>2. Yoda was almost a monkey in a mask
</StyledP4>
<StyledP5>3. Han Solo died in the original script
</StyledP5>
<StyledP6>4. It took four men to portray one Vader
</StyledP6>
<StyledP7>5. The opening text crawl took 3 hours to shoot
</StyledP7>
 <StyledP8>All facts provided by https://www.rd.com/culture/star-wars-facts/</StyledP8> */} */}
 </StyledDiv>

    )};

export default Map