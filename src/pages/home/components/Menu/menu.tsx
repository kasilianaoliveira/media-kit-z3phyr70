import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BoxStyled, ButtonStyled, ButtonStyledClose, ButtonStyledContact, Container, MenuStyled, SpanBigStyled } from "./styles";

export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Container>
      <BoxStyled>
        <SpanBigStyled></SpanBigStyled>
      </BoxStyled>
      <ButtonStyled showMenu={showMenu} onClick={toggleMenu}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </ButtonStyled>

      <MenuStyled showMenu={showMenu}>
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
        <li>
          <ButtonStyledContact>
            <a href="#contact">Entre em contato</a>
          </ButtonStyledContact>
        </li>
        {showMenu && (
          <ButtonStyledClose onClick={toggleMenu} showMenu={showMenu} >
            <FaTimes />
          </ButtonStyledClose>
        )}
      </MenuStyled>


    </Container>
  );
};


