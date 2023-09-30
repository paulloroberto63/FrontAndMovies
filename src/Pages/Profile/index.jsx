import { FiArrowLeft, FiCamera, FiLock, FiUser, FiMail } from 'react-icons/fi'
import { Container, Form, Avatar } from "./styles";
import { ButtonText } from "../../components/ButtonText"; 
import { Input } from "../../components/Input"; 
import { Button } from "../../components/Button";

export function Profile(){
    return(
        <Container>
            <header>
          <ButtonText title="voltar" icon={FiArrowLeft} to="/"/>
            </header>
          
          <Form>
           <Avatar>
            <img 
            src="https://github.com/paulloroberto63.png" 
            alt="Foto do usúario" />

            <label htmlFor="avatar">
                <FiCamera />
                
                <input id="avatar" type="file" />
            </label>
           </Avatar>
           <Input 
           placeholder="Nome"
           type="text"
           icon={FiUser} />
           <br/>
          <Input 
           placeholder="Email"
           type="text"
           icon={FiMail} />
            <br/>
          <Input 
           placeholder="Senha atual"
           type="text"
           icon={FiLock} />
            <br/>
          <Input 
           placeholder="Senha nova"
           type="text"
           icon={FiLock} />
          
          
        <Button title="Salvar"/>
          </Form>
        
        </Container>
    )
}