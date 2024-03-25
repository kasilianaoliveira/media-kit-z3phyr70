import AboutMe from "../../assets/about.svg"
import { Container, ImageContent, TextContent } from "./styles"
export const About = () => {
  return (
    <Container
      id="about"
      initial={{ opacity: 0, x: -400 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -400 }}
      transition={{ duration: 0.6 }}
    >
      <ImageContent>
        <img src={AboutMe} alt="" />
      </ImageContent>
      <TextContent>
        <h1>SOBRE MIM</h1>
        <div>
          <p>
            Olá a todos, sou Lucas Mendes, conhecido nos jogos como Zephyr70. Sou um entusiasta de jogos e entusiasta de
            transmitir minha paixão por jogos para uma comunidade online. Desde agosto de 2023, tenho o prazer de fazer
            lives na Twitch, onde me dedico principalmente a jogar Valorant.
          </p>
          <p>
            Com uma paixão pela competição e uma afinidade natural pelos jogos de tiro, minha jornada na Twitch
            tem sido uma aventura até agora.
            Através das minhas transmissões, busco proporcionar entretenimento, interação com os espectadores
            e uma comunidade acolhedora onde todos se sintam bem-vindos.
          </p>
          <p>
            Meu objetivo é criar um espaço onde os amantes de Valorant e os diferentes jogos possam se reunir, aprender uns com os
            outros e se divertir enquanto assistem. Além disso, estou em constante busca pela melhoria contínua, tanto no jogo
            quanto como criador de conteúdo, buscando sempre oferecer experiências mais envolventes e divertidas para minha comunidade.
          </p>
          <p>
            Junte-se a mim em minhas transmissões na Twitch enquanto embarcamos juntos nesta jornada de jogos e diversão. Espero vê-los lá!
          </p>
        </div>
      </TextContent>
    </Container>
  )
}
