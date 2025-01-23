import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #223a5f;
  font-family: 'Roboto';
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ChoicesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`
export const ChoiceItem = styled.button`
  background: transparent;
  border: none;
  border-radius: 60%;
  cursor: pointer;
  margin: 0;
  padding: 0;
  width: 40%;
  @media (min-width: 576px) {
    width: 36%;
  }
`
export const ChoiceItemImg = styled.img`
  width: 100%;
  border-radius: 60%;
`
export const GameArea = styled.section`
  width: 100%;
  max-width: 600px;
  margin-top: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 576px) {
    margin-top: 36px;
  }
`
export const ResultChoiceItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`
export const ChoiceOwner = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 500;
  margin: 0;
`
export const ResultChoiceImg = styled.img`
  width: 80%;
`
export const ResultChoicesContainer = styled.div`
  display: flex;
`
export const Result = styled.p`
  color: #ffffff;
  font-size: 28px;
  font-weight: 500;
`
export const PlayAgainBtn = styled.button`
  border: none;
  cursor: pointer;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  margin: 0;
  border-radius: 16px;
  height: 42px;
  width: 152px;
  font-weight: 600;
  font-size: 16px;
`
