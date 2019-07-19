import React from "react"; 
import styled from 'styled-components';


const StyledH1 = styled.h1`
color: teal;
border: 5px solid red;
background-color: silver;
`
const Styledinfo = styled.p`
color: white;
`
function StarWars(props){
//   console.log(props);
  return(
<div>
  <StyledH1>{props.name}</StyledH1>
  <img src={props.url} alt= 'starwarspic'/>
  <Styledinfo>
  {props.homeworld}
  </Styledinfo>
</div>
  );
}

export default StarWars