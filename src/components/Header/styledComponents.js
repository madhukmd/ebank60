import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 567px) {
    padding: 20px 20px;
  }
`

export const HeaderImage = styled.img`
  @media screen and (max-width: 567px) {
    width: 100px;
  }
`

export const HeaderButton = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  border: 1px solid #ffffff;
  outline: none;
  cursor: pointer;
  padding: 8px 16px;
  background-color: transparent;
`
