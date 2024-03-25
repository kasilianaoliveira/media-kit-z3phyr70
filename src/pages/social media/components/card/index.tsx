import { Container, Icon, Viewers } from './styles'
import { ReactNode } from 'react';

interface ICardProps {
  children: ReactNode;
  viewers: number;
}
export const Card = ({ children, viewers }: ICardProps) => {
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
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6 }}
      >
        <p>{viewers}+</p>
        <span>
          seguidores
        </span>

      </Viewers>
    </Container>
  )
}
