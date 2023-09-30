import { Container, Form, Background} from "./styles";
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi'
import { Input } from "../../components/Input";
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'


export function SignUp(){
    return(
    <Container>
        <Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>

            <h2>Crie sua conta</h2>

            <Input 
              placeholder="Nome"
              type="text"
              icon={FiUser}/>
              <br />
            <Input 
              placeholder="E-mail"
              type="text"
              icon={FiMail}/>
                <br />
             <Input 
              placeholder="Senha"
              type="password"
              icon={FiLock}/>

     <Button title="Cadastrar" />
      
      
     <ButtonText title="Voltar para o Login" icon={FiArrowLeft} to="/"/>
   </Form>

    <Background />
    </Container>
)
}