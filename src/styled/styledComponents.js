import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1b1c22;
  color:white;
`

export const Img = styled.img`
  height: 50vh;
  width: 50vh;
`

export const ImageContainer = styled.div`
  height: 60vh;
  width: 60vh;
  text-align: center;
`

export const TextEditorContainer = styled.div`
height: 60vh;
  width: 60vh;
  background-color:: #25262c;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Toolbar = styled.div`
  margin-bottom: 10px;
`

export const ButtonList = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
`

export const ButtonListItem = styled.li`
  margin-right: 5px;
`

export const Button = styled.button`
  background-color:transparent;
  color: ${props => (props.active ? '#faff00' : '#f1f5f9')};
  border: none;
  padding: 10px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export const Textarea = styled.textarea`
  width: 400px;
  height: 200px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  padding: 10px;
  font-size: 16px;
`
