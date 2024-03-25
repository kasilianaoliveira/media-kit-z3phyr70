import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;

  &::after {
    content: '';
    border-radius: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: rgb(238,7,242);
    background: linear-gradient(36deg, rgba(238,7,242,1) 0%, rgba(100,2,228,1) 57%, rgba(24,11,45,1) 100%);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    &::after {
      bottom: -10px;
    }
  }
`;

export const ImageContent = styled.div`
  img {
    width: 500px;
  }
`;


export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  div {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`