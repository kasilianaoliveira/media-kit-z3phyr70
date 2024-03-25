
import { About } from './pages/About'
import { Partnerships } from './pages/Partnerships'
import { Contact } from './pages/contact'
import { Footer } from './pages/footer'
import { Home } from './pages/home'
import { SocialMedia } from './pages/social media'
import { Main } from './styles'

function App() {

  return (
    <>
      <Main>
        <Home />
        <About/>
        <SocialMedia/>
        <Partnerships/>
        <Contact/>
        <Footer/>
      </Main>
    </>
  )
}

export default App
