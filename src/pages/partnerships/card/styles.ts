import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2.5rem;
  padding: 0px 20px;
  border-radius: 12px;
  width: 323px;
  height: 480px;
  position: relative;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border: 2px solid #565656;

  @media (max-width: 468px) {
    height: 300px;
    padding: 20px;
    width:auto;
    img {
      /* width: 150px; */
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  height: 162px;
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 220px;
    height: 123px;
  }

  @media (max-width: 468px) {
    width: 150px;
    height: 55px;
  }
`;

export const Button = styled(motion.button)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: .625rem;
  padding: 10px 20px;
  margin-bottom: 1.25rem;
`;

export const Program = styled.h3`
`;

export const ContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;

  p{
    text-align: justifyS;
    color: var(--gray-600);
  }
`;