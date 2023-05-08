import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: #152850;
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #ffffff;
  margin-top: 40px;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    font-size: 25px;
    text-align: center;
  }
`

export const HomeImage = styled.img`
  height: 350px;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`
