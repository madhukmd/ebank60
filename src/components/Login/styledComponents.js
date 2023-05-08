import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: #152850;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LoginContainer = styled.div`
  background-color: #e0eefe;
  display: flex;
  width: 70%;
  height: 90%;
  align-items: center;
  border-radius: 15px;
  justify-content: space-between;
`
export const FormHeading = styled.h1`
  font-style: 'Roboto';
  font-size: 30px;
  color: #183b56;
`

export const LoginImage = styled.img`
  width: 450px;
  height: 350px;
  margin-left: auto;
`
export const FormContainer = styled.form`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 15px;
  height: 100%;
  width: 45%;
  justify-content: center;
  padding: 0 20px;
  margin-left: auto;
`
export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
export const Label = styled.label`
  font-style: 'Roboto';
  font-size: 16px;
  color: #183b56;
  font-weight: 700;
  line-height: 2;
`
export const Input = styled.input`
  border: 1px solid #5a7184;
  outline: none;
  background-color: transparent;
  height: 38px;
  padding-left: 10px;
  font-family: 'Roboto';
  font-size: 14px;
  border-radius: 5px;
`
export const LoginButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #1565d8;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  padding: 10px 0;
  border-radius: 5px;
  margin-top: 30px;
`
