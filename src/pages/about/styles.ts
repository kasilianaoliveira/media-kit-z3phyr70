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


  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    @media (max-width: 768px) {
      h1 {
        font-size: 1.8rem;
      }
    }

    &::after {
      bottom: -10px;
    }
  }

  @media (max-width: 412px) {
    margin-top: 100px;
    margin-bottom: 180px;


    &::after {
      bottom: -100px;
    }
  }
`;



export const ImageContent = styled.div`
  img {
    width: 500px;
  }
  @media (max-width: 768px) {
    img {
      width: 25rem;
    }
  }

  @media (max-width: 412px) {
    img {
      width: 300px;
    }
  }
`;


export const TextContent = styled(motion.div)`
  display: flex;
  padding: 0 20px;
  align-items: center;
  margin-top: 60px;
  gap: 40px;

  div {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
      /* font-size: 20px; */
      line-height: 1.8;
      text-align: justify;
    }
  }

  @media (max-width: 412px) {
    p {
      font-size: 14px;
    }
  }
`;
