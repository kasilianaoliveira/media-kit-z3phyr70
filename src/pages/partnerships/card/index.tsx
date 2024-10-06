import { Button, Container, ContentDescription, Icon, Program } from './styles'
import { ReactNode } from 'react';

interface ICardProps {
  children: ReactNode;
  program: string;
  description:string;
}
export const Card = ({ children, program, description }: ICardProps) => {
  return (
    <Container
      initial={{ opacity: 0, x: -300 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 }}
      transition={{ duration: 0.6 }}
    >
      <Icon>
        {children}
      </Icon>
      <ContentDescription>
        <Program>
          {program}
        </Program>
        <p>
          {description}
        </p>

      </ContentDescription>
      <Button>
        Mais detalhes
      </Button>

    </Container>
  )
}
