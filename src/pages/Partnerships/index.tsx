import AliexpressLogo from '../../assets/aliexpress.png';
import AmazonLogo from '../../assets/amazon.png';
import { Card } from './card';
import { Container, Content } from './styles';

export const Partnerships = () => {
  return (
    <Container id='partnerships'>
      <h1>Parcerias e Patrocínios</h1>
      <Content>
        <Card program='Programa de Afiliados'>
          <a
            href="https://www.amazon.com.br/gp/yourstore/home?&linkCode=ll2&tag=zephyr70-20&linkId=9227bed4695d9089f912a09deb2a5f46&language=pt_BR&ref_=as_li_ss_tl"
            target='_blank'
            rel="noopener noreferrer">
            <img src={AmazonLogo} alt="" />
          </a>
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
