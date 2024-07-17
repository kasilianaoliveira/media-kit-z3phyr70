import styled from "styled-components";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaTwitch } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Container = styled(motion.div)`
  display: flex;
  margin-top: 3.125rem;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  width: 100%;
`;
export const Title = styled.h1`
  font-size: 3.75rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 412px) {
    text-align: center;
    font-size: 1.8rem;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
  flex-wrap: wrap;
  margin-top: 1.875rem;
`;
export const CardContent = styled.div`
  background: var(--white);
  border-radius: 12px;
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
`;

export const CardSocialContent = styled.div`
  border-radius: 12px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1rem;
    }
  }
`;

export const SocialContent = styled(motion.div)`
  display: flex;
  width: 100%;
  margin-top: 100px;
  gap: 20px;
  @media (max-width: 475px) {
    gap: 50px;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledEmailIcon = styled(MdEmail)`
  color: var(--white);
  font-size: 3.125rem;

  @media (max-width: 475px) {
    font-size: 1.875rem;
    color: var(--black);

  }
`;

export const StyledInstagramIcon = styled(FaInstagram)`
  color: var(--white);
  font-size: 3.125rem;

  @media (max-width: 475px) {
    font-size: 1.875rem;
    color: var(--black);
  }
`;

export const StyledTiktokIcon = styled(FaTiktok)`
  color: var(--white);
  font-size: 3.125rem;

  @media (max-width: 475px) {
    font-size: 1.875rem;
    color: var(--black);
  }
`;

export const StyledTwitchIcon = styled(FaTwitch)`
  color: var(--white);
  font-size: 3.125rem;

  @media (max-width: 475px) {
    font-size: 1.875rem;
    color: var(--black);
  }
`;

export const ContentImg = styled.div`
  position: relative;
`

export const ImgBack = styled.img`

@media (max-width: 475px) {
    position: absolute;

  }
`