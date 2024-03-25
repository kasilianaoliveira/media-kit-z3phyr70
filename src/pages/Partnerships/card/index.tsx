import { Container, Icon, Viewers } from './styles'
import { ReactNode } from 'react';

interface ICardProps {
  children: ReactNode;
  program: string;
}
export const Card = ({ children, program }: ICardProps) => {
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
      <Viewers
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ duration: 0.6 }}
      >
        <span>
          {program}
        </span>

      </Viewers>
    </Container>
  )
}
