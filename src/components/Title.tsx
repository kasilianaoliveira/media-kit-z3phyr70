import styled from "styled-components";


interface TitleProps {
  title: string;
}

export const Title = ({title}: TitleProps) => {
  return (
    <TitleContent>{title}</TitleContent>
  )
}



export const TitleContent = styled.h1`

  text-transform: uppercase;

  background: radial-gradient(47.96% 976.55% at 53.59% 49.72%, #FFFFFF 0%, #706A6A 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 6.25rem;
  font-weight: 400;

`;
