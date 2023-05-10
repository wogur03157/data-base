import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;
const Main = styled.table`
  max-width: 70vw;
  width: 100%;
  height: 100px;
  border: 1px solid coral;
`
const Head = styled.div`
display: flex;
justify-content: space-around;
background-color: coral;
`
const HeadText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  flex: 1;
  text-align: center;
`;
const Body = styled.div`
display: flex;
justify-content: space-around;

&:hover{
  background: rgba(0, 0, 0, 0.1);
}
`;
const BodyText = styled.p`
font-size: 1rem;
flex: 1;
text-align: center;
`;
const BodyWrap = styled.div`
display: flex;
flex-direction: column-reverse;
`
export {Container, Main, Head, HeadText, Body, BodyText, BodyWrap}