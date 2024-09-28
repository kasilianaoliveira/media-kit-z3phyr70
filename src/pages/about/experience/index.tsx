import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Experience = () => {
  return (
    <Container>
      <SubTitle>
        Experiências com Organizações
      </SubTitle>
      <Content
       initial={{ opacity: 0, x: -200 }}
       whileInView={{ opacity: 1, x: 0 }}
       exit={{ opacity: 0, x: -200 }}
       transition={{ duration: 0.7 }}
      >
        <ContentExperience>
          <Position>
            <h3>Adventury.gg</h3>
            <SecondaryText>
              Atualmente
            </SecondaryText>
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

export const Container = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

export const SubTitle = styled.h2`
  text-transform: uppercase;
  background: radial-gradient(47.96% 976.55% at 53.59% 49.72%, #FFFFFF 0%, #706A6A 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 3rem;
  font-weight: 400;

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
