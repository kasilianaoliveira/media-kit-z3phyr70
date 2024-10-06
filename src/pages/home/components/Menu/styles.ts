import styled from "styled-components";

interface ButtonProps {
  showMenu: boolean;
}

export const Container = styled.div`
  display: block;
  position: fixed;
  z-index: 1000;
  width: 100vw;
  max-width: 100vw;
  margin: auto;

  padding: 20px;
  gap: 0.625rem;
  background-color: black;

  /* background: rgba(0, 0, 0, 0.25); */
  /* backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px); */
`;

export const Content = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  margin: 0 auto;
`;

export const BoxStyled = styled.div`
  display: flex;
`;

export const SpanStyled = styled.span`
  width: 56px;
  height: 56px;
  background: var(--white);
  border-radius: 12px;
`;

export const SpanBigStyled = styled.span`
  width: 186px;
  height: 56px;
  background: blue;
  opacity: 0.6;
  border-radius: 12px;
  @media (max-width: 768px) {
    height: 40px;
  }
  @media (max-width: 412px) {
    display: none;
  }
`;

export const MenuStyled = styled.ul<ButtonProps>`
  display: flex;
  align-items: center;
  gap: 40px;

  li {
    transition: transform 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    z-index: 999;
    top: 78px;
    right: ${({ showMenu }: ButtonProps) => (showMenu ? "0%" : "-100%")};
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    padding-top: 30px;

    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);

    transition: right 0.8s ease-in-out;
  }

  @media (min-width: 769px) {
    right: 0;
  }
`;

export const ButtonStyled = styled.button<ButtonProps>`
  height: 38px;
  width: 38px;
  border: 2px solid white;
  color: var(--white);
  font-weight: bold;
  border-radius: 50%;
  background: transparent;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
