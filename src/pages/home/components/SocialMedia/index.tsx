import { Container, Content, ContentNumberSocialMedia, ContentSocialLink, Detail, Followers, NumberContent } from "./styles"

export const SocialMedia = () => {
  return (
    <Container>
      <ContentSocialLink>
        <a href="https://www.instagram.com/lucas_z3phyr70/"
          target="_blank"
          rel="noopener noreferrer">
          <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/@lucasmendes700"
          target="_blank"
          rel="noopener noreferrer">
          <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube" />
        </a>
        <a href="https://www.twitch.tv/z3phyr70"
          target="_blank"
          rel="noopener noreferrer">
          <img src="https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white" alt="Twitch" />
        </a>
        <a href="https://www.tiktok.com/@z3phyr70"
          target="_blank"
          rel="noopener noreferrer">
          <img src="https://img.shields.io/badge/TikTok-FF2723?style=for-the-badge&logo=tiktok&logoColor=white" alt="TikTok" />
        </a>
      </ContentSocialLink>
      <ContentNumberSocialMedia>
        <Content>
          <NumberContent>3K
          </NumberContent>
          <Detail>+</Detail>

          <Followers>Seguidores no instagram</Followers>
        </Content>
        <Content>
          <NumberContent>100K 
          </NumberContent>
          <Detail>+</Detail>

          <Followers>Visualizações no Instagram</Followers>

        </Content>
        <Content>
          <NumberContent>600
          </NumberContent>
          <Detail>+</Detail>

          <Followers>Seguidores na Twitch</Followers>
        </Content>
        <Content>
          <NumberContent>1K
          </NumberContent>
          <Detail>+</Detail>
          <Followers>Seguidores no Tiktok</Followers>

        </Content>
      </ContentNumberSocialMedia>
    </Container>
  )
}
