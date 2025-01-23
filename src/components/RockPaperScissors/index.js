import {Component} from 'react'
import RulesPopup from '../RulesPopup'
import Header from '../Header'
import {
  MainContainer,
  ChoicesContainer,
  ChoiceItem,
  ChoiceItemImg,
  GameArea,
  ResultChoiceItem,
  ChoiceOwner,
  ResultChoiceImg,
  ResultChoicesContainer,
  Result,
  PlayAgainBtn,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    testId: 'rockButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    testId: 'scissorsButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    testId: 'paperButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  state = {
    score: 0,
    userChoiceId: null,
    randomId: null,
    result: null,
  }

  onOptionSelect = id => {
    const newRandomId = choicesList[Math.floor(Math.random() * 3)].id
    let result = ''
    let scoreChange = 0

    if (id === newRandomId) {
      result = 'IT IS DRAW'
    } else if (
      (id === 'ROCK' && newRandomId === 'SCISSORS') ||
      (id === 'SCISSORS' && newRandomId === 'PAPER') ||
      (id === 'PAPER' && newRandomId === 'ROCK')
    ) {
      result = 'YOU WON'
      scoreChange = 1
    } else {
      result = 'YOU LOSE'
      scoreChange = -1
    }

    this.setState(prevState => ({
      userChoiceId: id,
      randomId: newRandomId,
      result,
      score: prevState.score + scoreChange,
    }))
  }

  renderPlayingView = () => (
    <ChoicesContainer>
      {choicesList.map(each => (
        <ChoiceItem
          onClick={() => this.onOptionSelect(each.id)}
          type="button"
          key={each.id}
          data-testid={each.testId}
        >
          <ChoiceItemImg src={each.imageUrl} alt={each.id} />
        </ChoiceItem>
      ))}
    </ChoicesContainer>
  )

  onPlayagain = () => {
    this.setState({
      result: null,
      userChoiceId: null,
      randomId: null,
    })
  }

  renderGameResultsView = () => {
    const {userChoiceId, randomId, result} = this.state
    // prettier-ignore
    const userChoiceUrl = choicesList.find(each => each.id === userChoiceId).imageUrl
    // prettier-ignore
    const randomChoiceUrl = choicesList.find(each => each.id === randomId).imageUrl

    return (
      <>
        <ResultChoicesContainer>
          <ResultChoiceItem>
            <ChoiceOwner>YOU</ChoiceOwner>
            <ResultChoiceImg src={userChoiceUrl} alt="your choice" />
          </ResultChoiceItem>
          <ResultChoiceItem>
            <ChoiceOwner>OPPONENT</ChoiceOwner>
            <ResultChoiceImg src={randomChoiceUrl} alt="opponent choice" />
          </ResultChoiceItem>
        </ResultChoicesContainer>
        <Result>{result}</Result>
        <PlayAgainBtn onClick={this.onPlayagain} type="button">
          PLAY AGAIN
        </PlayAgainBtn>
      </>
    )
  }

  render() {
    const {score, userChoiceId} = this.state
    return (
      <MainContainer>
        <Header score={score} />
        <GameArea>
          {userChoiceId
            ? this.renderGameResultsView()
            : this.renderPlayingView()}
        </GameArea>
        <RulesPopup />
      </MainContainer>
    )
  }
}

export default RockPaperScissors
