import { useState } from 'react';

import Header from '../Header'

import { Container, Line } from './styles'

interface MenuProps {
  onClick: () => void,
}

export default function Menu({ onClick }: MenuProps) {
  const [show, setShow] = useState(false);

  function handleToggleMenu() {
    setShow(!show)
  }

  return (
    <Container {...{onClick}}>
      <Line />
      <Line />
      <Line />

    </Container>
  )
}