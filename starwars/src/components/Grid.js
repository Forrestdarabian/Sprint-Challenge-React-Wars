import React from "react"; 
// // import styled from 'styled-components';


// // const StyledH1 = styled.h1`
// // color: teal;
// // border: 5px solid red;
// // background-color: silver;
// // `
// // const Styledinfo = styled.p`
// // color: white;
// // `
function StarWars(props){
//   console.log(props);
  return(
<div>
  <h1>{props.name}</h1>
  <img src={props.url} />
  <p>
  {props.homeworld}
  </p>
</div>
  );
}

export default StarWars