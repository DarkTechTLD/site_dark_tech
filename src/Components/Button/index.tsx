import { Button } from './styles';

interface ButtonStyled {
  right: boolean
}

export default function ButtonComponent({right}: ButtonStyled) {
  return (
    <Button right={right}>
      Saiba mais
    </Button>
  )
}