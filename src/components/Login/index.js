import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  AppContainer,
  LoginContainer,
  LoginImage,
  FormContainer,
  CustomContainer,
  Label,
  Input,
  FormHeading,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

const websiteLogin =
  'https://assets.ccbp.in/frontend/react-js/ebank-login-img.png'

class Login extends Component {
  state = {
    userId: '',
    UserPin: '',
    showError: false,
    errorMsg: '',
  }

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({UserPin: event.target.value})
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, UserPin} = this.state
    const userDetails = {user_id: userId, pin: UserPin}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  renderUserId = () => (
    <CustomContainer>
      <Label htmlFor="userId">User ID</Label>
      <Input
        id="userId"
        type="text"
        placeholder="Enter User ID"
        onChange={this.onChangeUserId}
      />
    </CustomContainer>
  )

  renderPin = () => (
    <CustomContainer>
      <Label htmlFor="pin">PIN</Label>
      <Input
        id="pin"
        type="password"
        placeholder="Enter PIN"
        onChange={this.onChangePin}
      />
    </CustomContainer>
  )

  render() {
    const {showError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <AppContainer>
        <LoginContainer>
          <LoginImage src={websiteLogin} alt="website login" />
          <FormContainer onSubmit={this.onSubmitForm}>
            <FormHeading>Welcome Back!</FormHeading>
            {this.renderUserId()}
            {this.renderPin()}
            <LoginButton type="submit">Login</LoginButton>
            {showError && <ErrorMessage>{errorMsg}</ErrorMessage>}
          </FormContainer>
        </LoginContainer>
      </AppContainer>
    )
  }
}
export default Login
