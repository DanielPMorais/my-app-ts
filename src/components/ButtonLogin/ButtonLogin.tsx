import {
  Button,
} from '@chakra-ui/react';

import { login } from '../../services/login';

export const ButtonLogin = (props: any) => {
  return (
    <Button
      onClick={login}
      colorPalette='cyan'
      variant="solid"
      size='md'
      width='100%'
      mt="10px"
      {...props}
    >
      Entrar
    </Button>
  )
}