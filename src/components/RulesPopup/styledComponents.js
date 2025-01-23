import styled from 'styled-components'

export const RulesButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  margin: 0;
  border-radius: 4px;
  height: 40px;
  width: 68px;
  align-self: flex-end;
  font-weight: 600;
  font-size: 16px;
`
export const PopupContent = styled.section`
  width: 80vw;
  max-width: 800px;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 8px;
`
export const PopupExitButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`
export const RulesImg = styled.img`
  width: 100%;
`
