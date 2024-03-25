import styled from "styled-components";
import background from "../../assets/social.svg"
import { motion } from "framer-motion";

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
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
  flex-wrap: wrap;
  margin-top: 1.875rem;
`;
export const CardContent = styled.div `
  background: var(--white);
  border-radius: 16px;
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
`

export const CardSocialContent = styled.div `
  border-radius: 16px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.25rem;
  }
`

export const SocialContent = styled(motion.div)`
  display: flex;
  width: 100%;
  margin-top: 100px;
  gap: 20px;
`

export const SocialBackground = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${background});
  background-repeat: no-repeat;
  width: 170px;
  height: 165px; 
`