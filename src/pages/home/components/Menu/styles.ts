import styled from "styled-components";

interface ButtonProps {
  showMenu: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  gap: 10px;

`;

export const BoxStyled = styled.div`
  display: flex;
  gap: 12px;
`;

export const SpanStyled = styled.span`
  width: 56px;
  height: 56px;
  background: var(--white);
  border-radius: 16px;
  @media (max-width: 768px) {
    height: 40px;
  }

  @media (max-width: 412px) {
    width: 40px;
  }
`;

export const SpanBigStyled = styled.span`
  width: 186px;
  height: 56px;
  background: #000000;
  opacity: 0.6;
  border-radius: 16px;
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
    color: var(--black);
    position: fixed;
    z-index: 999;
    top: 0;
    right: ${({ showMenu }: ButtonProps) => (showMenu ? "0" : "-100%")};
    width: 200px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    background-color: #ccc;
    transition: right 0.3s ease-in-out;
  }

  @media (min-width: 769px) {
    right: 0;
  }
`;

export const ButtonStyled = styled.button<ButtonProps>`
  padding: 0.8rem 1.5rem;
  color: var(--white);
  font-weight: bold;
  border-radius: 1rem;
  background: rgb(238, 7, 242);
  background: linear-gradient(
    36deg,
    rgba(238, 7, 242, 1) 0%,
    rgba(100, 2, 228, 1) 57%,
    rgba(24, 11, 45, 1) 100%
  );
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ButtonStyledContact = styled.button`
  padding: 1rem 2.5rem;
  color: var(--white);
  font-weight: bold;
  border-radius: 1rem;
  background: rgb(238, 7, 242);
  background: linear-gradient(
    36deg,
    rgba(238, 7, 242, 1) 0%,
    rgba(100, 2, 228, 1) 57%,
    rgba(24, 11, 45, 1) 100%
  );
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
export const ButtonStyledClose = styled.button<ButtonProps>`
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  color: var(--white);
  font-weight: bold;
  border-radius: 16px;
  background: rgb(238, 7, 242);
  background: linear-gradient(
    36deg,
    rgba(238, 7, 242, 1) 0%,
    rgba(100, 2, 228, 1) 57%,
    rgba(24, 11, 45, 1) 100%
  );
  position: absolute;
  top: 10px;
  right: 10px;
`;
