// Style your components here
import styled from 'styled-components'

export const GenerateButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  padding: 10px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
`
export const MainContainer = styled.div`
  display: flex;
  padding: 20px;
  height: 100vh;
  width: 100vw;
  justify-content: space-around;
`
export const ImageContainer = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;

  height: 400px;
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`
export const ErrorMessage = styled.p`
  color: red;
`
export const TextContent = styled.p`
  font-size: ${props => props.fontSize}px;
  color: white;
`
