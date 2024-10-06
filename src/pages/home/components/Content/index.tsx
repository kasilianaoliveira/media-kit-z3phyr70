import { Box, BoxContentImage, BoxContentTitle } from './styles'
import ProfileImg from "../../../../assets/profile.webp";
import { Title } from '../../../../components/Title';
import { SocialMedia } from '../SocialMedia';

export const Content = () => {
  return (
    <Box
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <BoxContentTitle>
        <Title title='Z3phyr70' size={160}/>
        <Title title='Streamer'size={120}/>
        <SocialMedia/>
      </BoxContentTitle>
      <BoxContentImage>
        <img src={ProfileImg} alt="Imagem de Zephyr70" />
      </BoxContentImage>
    </Box>
  )
}
