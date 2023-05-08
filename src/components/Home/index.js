import Header from '../Header'

import {
  AppContainer,
  HomeContainer,
  HomeHeading,
  HomeImage,
} from './styledComponents'

const digitalCard =
  'https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png'

const Home = () => (
  <AppContainer>
    <Header />
    <HomeContainer>
      <HomeHeading>Your Flexibility, Our Excellence</HomeHeading>
      <HomeImage src={digitalCard} alt="digital card" />
    </HomeContainer>
  </AppContainer>
)
export default Home
