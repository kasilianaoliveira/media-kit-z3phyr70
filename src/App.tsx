
import { About } from './pages/about'
import { Partnerships } from './pages/partnerships'
import { Contact } from './pages/contact'
import { Footer } from './pages/footer'
import { Home } from './pages/home'
import { Main } from './styles'

function App() {

  return (
    <>
      <Main>
        <Home />
        <About/>
        {/* <SocialMedia/> */}
        <Partnerships/>
        <Contact/>
        <Footer/>
      </Main>
    </>
  )
}

export default App
