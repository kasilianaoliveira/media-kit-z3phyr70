import { CardContent, CardSocialContent, Container, SocialContent, Title } from "./styled"
import PerfilImg from "../../assets/contact.svg"

import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { SocialBackground } from "./components";
export const Contact = () => {
  return (
    <Container
      initial={{ opacity: 0, y: -300 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -300 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Entre em contato comigo</Title>
      <CardContent>
        <CardSocialContent id="contact">
          <p>Quer colaborar ou fazer uma parceria? Estou aberto para novas oportunidades!
            Entre em contato comigo para discutirmos como podemos trabalhar juntos e criar
            algo incrível.
          </p>
          <SocialContent
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.6 }}
          >
            <SocialBackground href="mailto:lucasmendeslima21@gmail.com" >
              <MdEmail size={50} color="white" />
            </SocialBackground>
            <SocialBackground href="https://www.instagram.com/lucas_z3phyr70/" >
              <FaInstagram size={50} color="white" />
            </SocialBackground>
            <SocialBackground href="https://www.twitch.tv/z3phyr70" >
              <FaTwitch size={50} color="white" />
            </SocialBackground>
            <SocialBackground href="https://www.tiktok.com/@zephyr70_" >
              <FaTiktok size={50} color="white" />
            </SocialBackground>

          </SocialContent>
        </CardSocialContent>
        <div>
          <img src={PerfilImg} alt="Foto de Z3PHYR70" />
        </div>
      </CardContent>
    </Container>
  )
}
