import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 500px;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  max-width: 1200px;
  margin: 300px auto;
  height: 100vh;

  @media (max-width: 906px) {
    margin-top: 700px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 80px;

  @media (max-width: 412px) {
    img {
      width: 150px;
    }
  }
`;
