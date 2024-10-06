import styled from "styled-components";


interface TitleProps {
  title: string;
  size?: number;
}

export const Title = ({title, size}: TitleProps) => {
  return (
    <TitleContent $size={size}>{title}</TitleContent>
  )
}



export const TitleContent = styled.h1<{ $size?: number }>`
  text-transform: uppercase;
  text-wrap: wrap;
  background: radial-gradient(47.96% 976.55% at 53.59% 49.72%, #FFFFFF 0%, #706A6A 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* font-size:  ; */
  font-size: clamp(1rem,10vw, ${props => props.$size ? `${props.$size}px` :'6.25rem'});
  font-weight: 400;
`