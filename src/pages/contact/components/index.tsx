import { AnchorHTMLAttributes, FC, ReactNode } from "react";
import { Background, SocialImg, SocialLink } from "./styles";
import Social from "../../../assets/social.svg"

interface CustomAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
  href: string;
  children: ReactNode;
}
export const SocialBackground: FC<CustomAnchorProps> = ({children, href, ...rest}) => {
  return (
    <Background>
      <SocialImg src={Social}/>
      <SocialLink href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </SocialLink>
    </Background>
  )
}
