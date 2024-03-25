import { Box, BoxContentImage, BoxContentTitle } from './styles'
import SquareImg from "../../../../assets/zephyr.svg";

export const Content = () => {
  return (
    <Box
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
    >
      <BoxContentTitle>
        <h1>Z3PHYR70</h1>
        <span>Streamer</span>
      </BoxContentTitle>
      <BoxContentImage>
        <img src={SquareImg} alt="Imagem de Zephyr70" />
      </BoxContentImage>
    </Box>
  )
}
