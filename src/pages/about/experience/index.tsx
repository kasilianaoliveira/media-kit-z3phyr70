import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Title } from '../../../components/Title';

export const Experience = () => {
  return (
    <Container>
      <Title 
      size={48}
      title=' Experiências com Organizações'/>
       
      
      <Content
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -200 }}
        transition={{ duration: 0.7 }}
      >
        <ContentExperience>
          <Position>
            <h3>Adventury.gg</h3>
          </Position>

          <SecondaryText>
            Streamer/Criador de contéudo
          </SecondaryText>
        </ContentExperience>

        <ContentExperience>
          <Position>
            <h3>TrueData Sports</h3>
          </Position>

          <SecondaryText>
            Streamer/Criador de contéudo
          </SecondaryText>
        </ContentExperience>

        <ContentExperience>
          <Position>
            <h3>Blue Dragons</h3>
          </Position>

          <SecondaryText>
            Streamer/Criador de contéudo
          </SecondaryText>
        </ContentExperience>


      </Content>
    </Container>
  )
}

export const Container = styled(motion.div)`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  margin-bottom: 100px;
`;


export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.25rem;

`;

export const ContentExperience = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: .625rem;
`;

export const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SecondaryText = styled.span`
  color: var(--gray-600);
`;
