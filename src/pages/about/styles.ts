import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 100px auto;
  max-width: 1200px;

`;


export const TextContent = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-top: 60px;
  gap: 20px;
  max-width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export const ImageContent = styled.div`
  img {
    max-width: 100%;
    width: 500px;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 50%;


  p {
    max-width: 100%;
    line-height: 1.8;
    font-size: 1rem;
    text-align: justify;
  }

  @media (max-width: 900px) {
    max-width: 100%;
  }

`;
