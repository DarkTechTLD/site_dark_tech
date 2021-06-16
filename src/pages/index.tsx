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
  Services,
  ContentService,
  ContentDescription,
  CardService,
  TextInfoContent,
  CardDescriptionText
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
          <Image className="image" src="/Circle.svg" alt="" height={903} width={894} />
          <TextInfo>
            <Title>Quem Somos</Title>
            <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque eaque eius esse et harum inventore ipsam nam necessitatibus nemo pariatur provident. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque eaque eius esse et harum inventore ipsam nam necessitatibus nemo pariatur provident.
            </Description>

            <Button  right={false}/>
          </TextInfo>
        </Circle>
      </ContainerWhoWeAre>

      <Services>
        <ContentService>
          <div>
            <CardService>
              <div className="cardServiceHeader">
                <div className="icone"/>
                <p>Icone</p>
              </div>

              <p className="title">Lorem Ipsum</p>

              <p className="description">
              Lorem ipsum dolor sit amet, atque eaque eius esse et harum inventore ipsam nam necessi is the tatibus nemo pariatur provident.
              </p>
            </CardService>
            <CardService>
              <div className="cardServiceHeader">
                <div className="icone"/>
                <p>Icone</p>
              </div>

              <p className="title">Lorem Ipsum</p>

              <p className="description">
              Lorem ipsum dolor sit amet, atque eaque eius esse et harum inventore ipsam nam necessi is the tatibus nemo pariatur provident.
              </p>
            </CardService>
          </div>
          <div className="card02">
            <CardService>
              <div className="cardServiceHeader">
                <div className="icone"/>
                <p>Icone</p>
              </div>

              <p className="title">Lorem Ipsum</p>

              <p className="description">
              Lorem ipsum dolor sit amet, atque eaque eius esse et harum inventore ipsam nam necessi is the tatibus nemo pariatur provident.
              </p>
            </CardService>
            <CardService>
              <div className="cardServiceHeader">
                <div className="icone"/>
                <p>Icone</p>
              </div>

              <p className="title">Lorem Ipsum</p>

              <p className="description">
              Lorem ipsum dolor sit amet, atque eaque eius esse et harum inventore ipsam nam necessi is the tatibus nemo pariatur provident.
              </p>
            </CardService>
          </div>
        </ContentService>
        <ContentDescription>
          <Image className="image" src="/arrowLeft.svg" alt="" height={903} width={894} />

          <TextInfoContent>
            <CardDescriptionText>Serviços</CardDescriptionText>
            <Description>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque eaque eius esse et harum inventore ipsam nam necessitatibus nemo pariatur provident. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque eaque eius esse et harum inventore ipsam nam necessitatibus nemo pariatur provident.
            </Description>

            <Button right={true}/>
          </TextInfoContent>
        </ContentDescription>
      </Services>
    </Container>
  )
}
