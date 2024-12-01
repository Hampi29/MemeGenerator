import {Component} from 'react'
import {
  GenerateButton,
  MainContainer,
  ImageContainer,
  ErrorMessage,
  TextContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    isGenerated: false,
    iserror: false,
  }

  onChangeImageUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onSelectFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  generateImage = event => {
    event.preventDefault()
    const {imgUrl, topText, bottomText} = this.state
    if (imgUrl === '' || topText === '' || bottomText === '') {
      this.setState({iserror: true})
    } else {
      this.setState({isGenerated: true, iserror: false})
    }
  }

  render() {
    const {
      imgUrl,
      topText,
      bottomText,
      fontSize,
      isGenerated,
      iserror,
    } = this.state
    return (
      <MainContainer>
        <div>
          <h1>Meme Generator</h1>
          <form onSubmit={this.generateImage}>
            <label htmlFor="imgurl">Image URL</label>
            <br />
            <input
              value={imgUrl}
              type="text"
              id="imgurl"
              onChange={this.onChangeImageUrl}
            />
            <br />
            <label htmlFor="toptext">Top Text</label>
            <br />
            <input
              value={topText}
              type="text"
              id="toptext"
              onChange={this.onChangeTopText}
            />
            <br />
            <label htmlFor="bottomtext">Bottom Text</label>
            <br />
            <input
              value={bottomText}
              type="text"
              id="bottomtext"
              onChange={this.onChangeBottomText}
            />
            <br />
            <label htmlFor="dropdown">Font Size</label>
            <br />
            <select
              id="dropdown"
              value={fontSize}
              onChange={this.onSelectFontSize}
            >
              {fontSizesOptionsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <br />
            <GenerateButton type="submit">Generate</GenerateButton>
          </form>
          {iserror ? (
            <ErrorMessage>please enter valid inputs</ErrorMessage>
          ) : null}
        </div>
        <div>
          {isGenerated ? (
            <ImageContainer data-testid="meme" bgImage={imgUrl}>
              <TextContent fontSize={fontSize}>{topText}</TextContent>
              <TextContent fontSize={fontSize}>{bottomText}</TextContent>
            </ImageContainer>
          ) : null}
        </div>
      </MainContainer>
    )
  }
}

export default MemeGenerator
