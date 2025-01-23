import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import {
  RulesButton,
  PopupContent,
  PopupExitButton,
  RulesImg,
} from './styledComponents'

const RulesPopup = () => (
  <Popup modal trigger={<RulesButton>Rules</RulesButton>}>
    {close => (
      <PopupContent>
        <PopupExitButton
          data-testid="closeButton"
          type="button"
          className="menu-close-btn"
          onClick={() => close()}
        >
          <RiCloseLine size="30" color="#000000" />
        </PopupExitButton>
        <RulesImg
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </PopupContent>
    )}
  </Popup>
)

export default RulesPopup
