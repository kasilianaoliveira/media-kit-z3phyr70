import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  
  @media (max-width: 412px) {
    position: static;
  }
  
`;
export const SocialLink = styled.a`
  position: absolute;
  @media (max-width: 412px) {
    position: relative;
  }
  
`;
export const SocialImg = styled.img`
`