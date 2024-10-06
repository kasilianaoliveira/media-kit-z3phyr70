import { Menu } from "./components/Menu/menu"
import { Container } from "./styles"

import { Content } from "./components/Content";
export const Home = () => {
  return (
    <>
      <Menu />

      <Container id="home">
        <Content />
      </Container>
    </>
  )
}
