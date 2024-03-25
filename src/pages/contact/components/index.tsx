import { ReactNode } from "react";
import { Background, SocialLink } from "./styles";
import Social from "../../../assets/social.svg"

interface SocialBackground {
  href: string;
  children: ReactNode;
}
export const SocialBackground = ({children, href}: SocialBackground) => {
  return (
    <Background>
      <img src={Social}/>
      <SocialLink href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </SocialLink>
    </Background>
  )
}
