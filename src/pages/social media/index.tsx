import { Card } from "./components/card"
import { Container, Content } from "./styles"
import { FaTwitch } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <Container id="social-media">
      <h1>Números das redes sociais</h1>
      <Content>
        <a href="https://www.twitch.tv/z3phyr70" target="_blank" rel="noopener noreferrer">
          <Card viewers={500} >
            <FaTwitch size={100} color='#954CFF' />
          </Card>
        </a>

        <a href="https://www.tiktok.com/@zephyr70_" target="_blank" rel="noopener noreferrer">
          <Card viewers={1000}>
            <FaTiktok size={100} color='#000000' />
          </Card>
        </a>

        <a href="https://www.instagram.com/lucas_z3phyr70/" target="_blank" rel="noopener noreferrer">
          <Card viewers={4000}>
            <FaInstagram size={100} color='#CC2273' />
          </Card>
        </a>

      </Content>

    </Container>
  )
}
