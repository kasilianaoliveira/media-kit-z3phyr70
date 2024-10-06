import AliexpressLogo from '../../assets/aliexpress.png';
import TwitchLogo from '../../assets/twitch.png';
import AmazonLogo from '../../assets/amazon.png';
import MercadoLivreLogo from '../../assets/mercado-livre.png';
import ComandoGeekLogo from '../../assets/comando-geek.png';
import EpomakerLogo from '../../assets/epomaker.webp';
import { Card } from './card';
import { Container, Content } from './styles';
import { Title } from '../../components/Title';

export const Partnerships = () => {
  return (
    <Container id='partnerships'>
      <Title title='Parcerias' />
      <Title title='& Patrocínios' />

      <Content>
        <Card
          program='Amazon'
          description='Você pode adquirir itens usando meu
          link de afiliado e assim me ajudar.'>
          <a
            href="https://www.amazon.com.br/gp/yourstore/home?&linkCode=ll2&tag=zephyr70-20&linkId=9227bed4695d9089f912a09deb2a5f46&language=pt_BR&ref_=as_li_ss_tl"
            target='_blank'
            rel="noopener noreferrer"
            aria-label="Visite a página do Programa de Afiliados da Amazon">
            <img src={AmazonLogo} alt="Logo da Amazon" />
          </a>
        </Card>
        <Card
          program='Twitch'
          description='Você pode adquirir itens usando meu
          link de afiliado e assim me ajudar.'
        >
          <img src={TwitchLogo} alt="Logo twitch" />
        </Card>

        <Card
          program='Aliexpress'
          description='Você pode adquirir itens usando meu
          link de afiliado e assim me ajudar.'>
          <img src={AliexpressLogo} alt="Logo aliexpress" />
        </Card>
        <Card program='Mercado Livre'
          description='Você pode adquirir itens usando meu
          link de afiliado e assim me ajudar.'>
          <img src={MercadoLivreLogo} alt="Logo mercado livre" />
        </Card>
        <Card
          program='Comando Geek'
          description='Você pode adquirir itens usando meu link de afiliado e,
          com o cupom disponível, ainda garantir um desconto, além de me ajudar!'>
          <img src={ComandoGeekLogo} alt="Logo comando geek" />
        </Card>
        <Card
          program='Epomaker'
          description='Você pode adquirir itens usando meu link de afiliado e,
          com o cupom disponível, ainda garantir um desconto, além de me ajudar!'>
          <img src={EpomakerLogo} alt="Logo Epomaker" />
        </Card>
      </Content>
    </Container>
  )
}
