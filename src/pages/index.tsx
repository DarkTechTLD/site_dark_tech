import Image from 'next/image'

import { Button, Header, Menu } from '../Components'

import { 
  Container, 
  ContainerInit, 
  Title, 
  Description, 
  Img, 
  ContainerContentInit,
  ContainerWhoWeAre,
  Circle,
  TextInfo,
  TitleTextInfo
} from './styles/styles'

export default function Home() {
  return (
    <Container>
      <Header />

      <ContainerInit id="init">
        <ContainerContentInit>
          <Title>Lorem Ipsum</Title>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</Description>
        </ContainerContentInit>

        <Img src="/Mockup.png" alt="Vercel Logo" width={1453} height={1014} />
      </ContainerInit>

      <ContainerWhoWeAre>
        <Circle>
          <Image className="image" src="/circle.svg" alt="" height={903} width={894} />
          <TextInfo>
            <Title>Quem Somos</Title>
            <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque eaque eius esse et harum inventore ipsam nam necessitatibus nemo pariatur provident. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque eaque eius esse et harum inventore ipsam nam necessitatibus nemo pariatur provident.
            </Description>

            <Button />
          </TextInfo>
        </Circle>
      </ContainerWhoWeAre>
    </Container>
  )
}
