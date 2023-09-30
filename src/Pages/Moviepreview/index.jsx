import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { FiClock } from 'react-icons/fi'
import { FiArrowLeft } from 'react-icons/fi'
import { ButtonText } from "../../components/ButtonText"
import { ShowMovie } from '../../components/ShowMovie'

export function Moviepreview(){
    return(
        <Container>
        <Header />
        <main>
          <Content>
           <ButtonText title="Voltar" icon={FiArrowLeft} to="/"/>
          
           <ShowMovie  title="Por Paullo Roberto"icon={FiClock}/>
          </Content>
        </main>
        </Container>
    )
}