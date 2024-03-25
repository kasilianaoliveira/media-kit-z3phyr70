import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
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
`;

export const SpanBigStyled = styled.span`
  width: 186px;
  height: 56px;
  background: #000000;
  opacity : 0.6;
  border-radius: 16px;
`;


export const MenuStyled = styled.ul`
  display: flex;
  gap:40px;

  li {
    transition: transform 0.5s;

  &:hover {
    transform: scale(1.1);
  }
  }
`;


export const ButtonStyled = styled.button`
  padding: 1rem 2.5rem;
  color: var(--white);
  font-weight: bold;
  border-radius: 1rem;
  background: rgb(238,7,242);
  background: linear-gradient(36deg, rgba(238,7,242,1) 0%, rgba(100,2,228,1) 57%, rgba(24,11,45,1) 100%);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;



