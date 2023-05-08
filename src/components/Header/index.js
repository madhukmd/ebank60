import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {HeaderContainer, HeaderImage, HeaderButton} from './styledComponents'

const Header = props => {
  const Logout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <HeaderContainer>
      <HeaderImage
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
        alt="website logo"
      />
      <HeaderButton type="button" onClick={Logout}>
        Logout
      </HeaderButton>
    </HeaderContainer>
  )
}
export default withRouter(Header)
