import {
  HeaderSection,
  HeaderText,
  ScoreBox,
  ScoreText,
  Score,
} from './styledComponents'

const Header = props => {
  const {score} = props
  return (
    <HeaderSection>
      <div>
        <HeaderText>ROCK PAPER SCISSORS</HeaderText>
      </div>
      <ScoreBox>
        <ScoreText>Score</ScoreText>
        <Score>{score}</Score>
      </ScoreBox>
    </HeaderSection>
  )
}

export default Header
