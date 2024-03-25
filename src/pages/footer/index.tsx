import { Container } from "./styles"

export const Footer = () => {
  return (
    <Container>
      <p>
         Desenvolvido por Kasiliana Oliveira &reg; {new Date().getFullYear()}
      </p>
    </Container>
  )
}
