import { Card } from "./components/card"
import { Container, Content, StyledInstagramIcon, StyledTiktokIcon, StyledTwitchIcon } from "./styles"

export const SocialMedia = () => {
  return (
    <Container id="social-media">
      <h1>Números das redes sociais</h1>
      <Content>
        <a href="https://www.twitch.tv/z3phyr70" target="_blank" rel="noopener noreferrer">
          <Card viewers={500} >
            <StyledTwitchIcon  />
          </Card>
        </a>

        <a href="https://www.tiktok.com/@zephyr70_" target="_blank" rel="noopener noreferrer">
          <Card viewers={1000}>
            <StyledTiktokIcon />
          </Card>
        </a>

        <a href="https://www.instagram.com/lucas_z3phyr70/" target="_blank" rel="noopener noreferrer">
          <Card viewers={4000}>
            <StyledInstagramIcon  />
          </Card>
        </a>

      </Content>

    </Container>
  )
}
