import styled from "styled-components";

export const BackgroundCon = styled.div`
background-color: black;
  min-height: 100vh;
  /* height: fit-content;
  width: 100%;
  min-width: 320px; */
  display: grid;
  /* grid-template-areas:  'navbar'
                        'content'
                        'footer'; */
  grid-template-rows: 10% auto 10%;
  margin: 0;
  
`;

export const ContentCon = styled.div`
  background-color: yellow;
`
