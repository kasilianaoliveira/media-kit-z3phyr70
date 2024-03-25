import { Menu } from "./components/Menu/menu"
import {  Container } from "./styles"

import { Content } from "./components/Content";
export const Home = () => {
  return (
    <Container>
      <Menu />
      <Content/>
    </Container>
  )
}
