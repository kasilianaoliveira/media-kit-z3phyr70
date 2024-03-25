import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  border-radius: 16px;
  width: 450px;
  height: 300px;
  position: relative;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 350px;
    height: 200px;
  }

  @media (max-width: 412px) {
    width: 350px;
    height: 150px;
  }
  background: white;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  width: 320px;
  height: 223px;
  border-radius: 16px;
  margin-top: 24px;

  @media (max-width: 768px) {
    width: 220px;
    height: 123px;
  }

  @media (max-width: 412px) {
    width: 150px;
    height: 55px;
  }
`;

export const Viewers = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

  p,
  span {
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--black);
  }

  @media (max-width: 768px) {
    p,
    span {
      font-size: 1rem;
    }
  }

  @media (max-width: 768px) {
    p,
    span {
      font-size: .875rem;
    }
  }
`;
