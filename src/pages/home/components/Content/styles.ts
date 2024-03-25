import { motion } from "framer-motion";
import styled from "styled-components";

export const Box = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    h1 {
      font-size: 1.8rem;
    }
  }
`;

export const BoxContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  h1 {
    font-size: 4.5rem;
  }
  span {
    font-size: 9.375rem;
    font-weight: bold;
    color: #3d3d3d;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
    span {
      font-size: 4.375rem;
    }
  }
`;
export const BoxContentImage = styled.div`

@media (max-width: 768px) {
    img {
      width: 500px;
    }
  }

  @media (max-width: 412px) {
    img {
      width: 300px;
    }
  }
`;
