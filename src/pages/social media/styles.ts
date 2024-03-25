import { FaInstagram, FaTiktok, FaTwitch } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const StyledInstagramIcon = styled(FaInstagram)`
  color: #cc2273;
  font-size: 5rem;

  @media (max-width: 768px) {
    font-size: 3.125rem;
  }
  @media (max-width: 412px) {
    font-size: 30px;
  }
`;

export const StyledTiktokIcon = styled(FaTiktok)`
  color: var(--black);
  font-size: 5rem;

  @media (max-width: 768px) {
    font-size: 3.125rem;
  }
  @media (max-width: 412px) {
    font-size: 30px;
  }
`;

export const StyledTwitchIcon = styled(FaTwitch)`
  color: #954cff;
  font-size: 5rem;

  @media (max-width: 768px) {
    font-size: 3.125rem;
  }

  @media (max-width: 412px) {
    font-size: 30px;
  }
`;
