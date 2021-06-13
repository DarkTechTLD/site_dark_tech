import { useState } from 'react';

import Image from 'next/image'

import Menu from '../Menu'

import { Container, WrapperMenu, Content, Wrapper, MenuItem } from './styles'

export default function Header() {
  const [show, setShow] = useState(false);

  function handleToggleMenu() {
    setShow(!show)
  }

  return (
    <Container>
      <Image src="/logo.svg" alt="Vercel Logo" width={392} height={54} />
      
      <Content>
        <WrapperMenu>
          <Menu onClick={handleToggleMenu}/>
        </WrapperMenu>

        <Wrapper show={show}>
          <MenuItem>Quem Somos</MenuItem>
          <MenuItem>Serviços</MenuItem>
          <MenuItem>Portfólio</MenuItem>
          <MenuItem selected={true}>Contato</MenuItem>
        </Wrapper>  
      </Content>
    </Container>
  )
}