import {
  Box,
  Center,
  Input
} from '@chakra-ui/react';
import { Provider } from "../../components/ui/provider"
import { Header } from "../../components/Header/Header"
import { ButtonLogin } from "../../components/ButtonLogin/ButtonLogin"

export const Card = () => {
    return(
    <Provider>
        <Header />
        <Box minHeight='100vh' padding='25px'>
        
        <Box backgroundColor='#FFFFFF' color='#000000' borderRadius='15px' padding='10px'>
            <Center>
            <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" marginTop='10px'/>
            <Input placeholder="password" marginTop='10px'/>
            <Center>
            <ButtonLogin />
            </Center>
        </Box>
        </Box>
    </Provider>

    )
}