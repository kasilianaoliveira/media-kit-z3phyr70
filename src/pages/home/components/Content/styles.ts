import { motion } from "framer-motion";
import styled from "styled-components";

export const Box = styled(motion.div)`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  padding-inline: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: auto; */
  }

  @media (max-width: 412px) {
    margin-bottom: 30px;
  }
`;

export const BoxContentTitle = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 468px) {
    order: 2;
    align-items: center;
  }
`;
export const BoxContentImage = styled.div`
  position: relative;
  img {
    z-index: 3;
    top: -300px;
    right: -90px;
    width: auto;
  }
  @media (max-width: 1200px) {
    img {
      width: 350px;
    }
  }
  @media (max-width: 468px) {
    img {
      width: 300px;
    }
  }
`;
