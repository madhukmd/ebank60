import {Component} from 'react'

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
} from './styledComponents'

const websiteLogin =
  'https://assets.ccbp.in/frontend/react-js/ebank-login-img.png'

class Login extends Component {
  state = {
    userId: '',
    pin: '',
  }

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const userDetails = {userId, pin}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response.ok)
    const data = await response.json()
    console.log(data)
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
    return (
      <AppContainer>
        <LoginContainer>
          <LoginImage src={websiteLogin} alt="website login" />
          <FormContainer onSubmit={this.onSubmitForm}>
            <FormHeading>Welcome Back!</FormHeading>
            {this.renderUserId()}
            {this.renderPin()}
            <LoginButton type="submit">Login</LoginButton>
          </FormContainer>
        </LoginContainer>
      </AppContainer>
    )
  }
}
export default Login
