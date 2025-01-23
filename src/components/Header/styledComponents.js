import styled from 'styled-components'

export const HeaderSection = styled.section`
  border: 3px solid #ffffff;
  border-radius: 16px;
  padding: 20px;
  font-family: 'Bree Serif';
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
`
export const HeaderText = styled.h1`
  color: #ffffff;
  margin: 4px 0;
  font-weight: 400;
  font-size: 22px;
  width: 108px;
`
export const ScoreBox = styled.div`
  border-radius: 16px;
  background-color: #ffffff;
  color: #223a5f;
  width: 50%;
  max-width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ScoreText = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
`
export const Score = styled.p`
  font-weight: 600;
  font-size: 36px;
  margin: 0;
  font-family: 'Roboto';
`
