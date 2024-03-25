import { BoxStyled, ButtonStyled, Container, MenuStyled, SpanBigStyled, SpanStyled } from "./styles"


export const Menu = () => {

  
  return (
    <Container>
      <BoxStyled>
        <SpanStyled></SpanStyled>
        <SpanBigStyled></SpanBigStyled>
      </BoxStyled>
      <nav>
        <MenuStyled>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre mim</a>
          </li>
          <li>
            <a href="#social-media">Meus números</a>
          </li>
          <li>
            <a href="#partnerships">Parcerias e patronício</a>
          </li>
        </MenuStyled>
      </nav>
      <ButtonStyled>
        <a href="#contact">Entre em contato</a>
      </ButtonStyled>
    </Container>
  )
}
