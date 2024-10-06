import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  TextEditorContainer,
  Toolbar,
  Button,
  Textarea,
  HomeContainer,
  Img,
  ImageContainer,
  ButtonListItem,
  ButtonList,
} from '../styled/styledComponents'

class TextEditor extends Component {
  state = {
    boldActive: false,
    italicActive: false,
    underlineActive: false,
  }

  toggleBold = () => {
    this.setState(prevState => ({boldActive: !prevState.boldActive}))
  }

  toggleItalic = () => {
    this.setState(prevState => ({italicActive: !prevState.italicActive}))
  }

  toggleUnderline = () => {
    this.setState(prevState => ({underlineActive: !prevState.underlineActive}))
  }

  render() {
    const {boldActive, italicActive, underlineActive} = this.state

    return (
      <HomeContainer>
        <ImageContainer>
          <h1>Text Editor</h1>
          <Img
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </ImageContainer>
        <TextEditorContainer>
          <Toolbar>
            <ButtonList>
              <ButtonListItem>
                <Button
                  data-testid="bold"
                  active={boldActive}
                  onClick={this.toggleBold}
                >
                  <VscBold size={25} />
                </Button>
              </ButtonListItem>
              <ButtonListItem>
                <Button
                  data-testid="italic"
                  active={italicActive}
                  onClick={this.toggleItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </ButtonListItem>
              <ButtonListItem>
                <Button
                  data-testid="underline"
                  active={underlineActive}
                  onClick={this.toggleUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ButtonListItem>
            </ButtonList>
          </Toolbar>
          <Textarea
            bold={boldActive}
            italic={italicActive}
            underline={underlineActive}
          />
        </TextEditorContainer>
      </HomeContainer>
    )
  }
}

export default TextEditor
