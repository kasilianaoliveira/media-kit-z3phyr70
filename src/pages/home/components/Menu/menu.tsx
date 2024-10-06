import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BoxStyled, ButtonStyled, Container, Content, MenuStyled } from "./styles";
import Icon from "../../../../assets/logoIcon.svg"
export const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [showMenu]);

  return (
    <Container>
      <Content>
        <BoxStyled>
          <img src={Icon} />
        </BoxStyled>
        <ButtonStyled showMenu={showMenu} onClick={toggleMenu}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </ButtonStyled>

        <MenuStyled showMenu={showMenu}>
          <li onClick={() => setShowMenu(false)}>
            <a href="#home">Inicio</a>
          </li>
          <li onClick={() => setShowMenu(false)}>
            <a href="#about">Sobre mim</a>
          </li>
          <li onClick={() => setShowMenu(false)}>
            <a href="#partnerships">Parcerias e patrocínios</a>
          </li>
          <li onClick={() => setShowMenu(false)}>
            <a href="#contact">Contato</a>
          </li>
        </MenuStyled>

      </Content>

    </Container>
  );
};


