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

  background: rgb(85,5,222);
  background: linear-gradient(180deg, rgba(85,5,222,1) 0%, rgba(129,9,143,1) 100%);

  @media (max-width: 768px) {
    width: 350px;
    height: 200px;
  }

  @media (max-width: 412px) {
    width: 350px;
    height: 150px;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  width: 250px;
  height: 223px;
  border-radius: 16px;
  margin-top: 24px;
  background: var(--white);

  @media (max-width: 768px) {
    width: 220px;
  }

  @media (max-width: 412px) {
    width: 120px;
    height: 123px;
  }
`;

export const Viewers = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

  p, span {
    font-weight: bold;
    font-size: 24px;
  }

  @media (max-width: 768px) {
    p,
    span {
      font-size: 1rem;
    }
  }
`
