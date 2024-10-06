import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentSocialLink = styled.div`
  display: flex;
  @media (max-width: 468px) {
    display: none;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    align-items: stretch; 

    a {
      height: auto;
      img {
        width: 100%;
        height: 40px;
        object-fit: cover;
      }

    }
  }
`;

export const ContentNumberSocialMedia = styled.div`
  display: flex;
  gap: 2.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 468px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100px;


`;
export const NumberContent = styled.div`
  display: flex;
  background: radial-gradient(
    47.96% 976.55% at 53.59% 49.72%,
    #ffffff 0%,
    #706a6a 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 400;
  font-size: 40px;
  position: relative;

  @media (max-width: 468px) {
    font-size: 20px;
  }
`;

export const Detail = styled.div`
  display: flex;
  font-size: 20px;
  position: absolute;
  top: 0;
  right: -5px;
  color: #5700ef;
  @media (max-width: 468px) {
    font-size: 16px;
  }
`;

export const Followers = styled.div`
  background: radial-gradient(
    47.96% 976.55% at 53.59% 49.72%,
    #ffffff 0%,
    #706a6a 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
`;
