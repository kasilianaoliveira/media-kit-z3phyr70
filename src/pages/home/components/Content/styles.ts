import { motion } from "framer-motion";
import styled from "styled-components";

export const Box = styled(motion.div)`
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  
`;

export const BoxContentTitle = styled.div`
  display:flex;
  flex-direction: column;
  position: relative;
  
  h1 {
    font-size: 4.5rem;
  }
  span {
    font-size: 9.375rem;
    font-weight: bold;
    color: #3D3D3D;
  }
`;
export const BoxContentImage = styled.div`

`;
