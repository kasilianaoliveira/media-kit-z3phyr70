import { ReactNode } from "react";
import { Background, SocialImg, SocialLink } from "./styles";
import Social from "../../../assets/social.svg"

interface SocialBackground {
  href: string;
  children: ReactNode;
}
export const SocialBackground = ({children, href}: SocialBackground) => {
  return (
    <Background>
      <SocialImg src={Social}/>
      <SocialLink href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </SocialLink>
    </Background>
  )
}
