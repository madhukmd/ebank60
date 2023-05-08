import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`

export const NotFoundImage = styled.img`
  width: 450px;
  @media screen and (max-width: 567px) {
    width: 300px;
  }
`

export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #5a7184;
  font-weight: 900;
  @media screen and (max-width: 567px) {
    font-size: 20px;
  }
`

export const NotFoundText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #c3cad9;
  font-weight: 500;
  @media screen and (max-width: 567px) {
    font-size: 14px;
  }
`
