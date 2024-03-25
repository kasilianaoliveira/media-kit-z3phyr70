
import { About } from './pages/About'
import { Partnerships } from './pages/Partnerships'
import { Contact } from './pages/contact'
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
      </Main>
    </>
  )
}

export default App
