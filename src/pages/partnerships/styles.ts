import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  margin-top: 200px;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;


  @media (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }
  }
`;

export const Content = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 30px;

  @media (max-width: 412px) {
    img {
      width: 150px;
    }
  }

`;

