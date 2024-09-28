import AliexpressLogo from '../../assets/aliexpress.png';
import TwitchLogo from '../../assets/twitch.png';
import AmazonLogo from '../../assets/amazon.png';
import { Card } from './card';
import { Container, Content } from './styles';
import { Title } from '../../components/Title';

export const Partnerships = () => {
  return (
    <Container id='partnerships'>
      <Title title='Parcerias'/>
      <Title title='& Patrocínios'/>

      <Content>
        <Card program='Programa de Afiliados'>
          <img src={TwitchLogo} alt="" />
        </Card>
        <Card program='Programa de Afiliados'>
          <a
            href="https://www.amazon.com.br/gp/yourstore/home?&linkCode=ll2&tag=zephyr70-20&linkId=9227bed4695d9089f912a09deb2a5f46&language=pt_BR&ref_=as_li_ss_tl"
            target='_blank'
            rel="noopener noreferrer"
            aria-label="Visite a página do Programa de Afiliados da Amazon">
            <img src={AmazonLogo} alt="Logo da Amazon" />
          </a>
        </Card>
        <Card program='Programa de Afiliados'>
          <img src={AliexpressLogo} alt="" />
        </Card>
        <Card program='Programa de Afiliados'>
          <img src={AliexpressLogo} alt="" />
        </Card>
        <Card program='Programa de Afiliados'>
          <img src={AliexpressLogo} alt="" />
        </Card>

      </Content>
    </Container>
  )
}
