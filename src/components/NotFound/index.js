import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'

const notFound =
  'https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage src={notFound} alt="not found" />
    <NotFoundHeading>Page Not found</NotFoundHeading>
    <NotFoundText>
      We are sorry, the page you requested could not be found
    </NotFoundText>
  </NotFoundContainer>
)

export default NotFound
