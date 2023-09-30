import { NoteMovie } from '../../components/NoteMovie'
import { GoPlus } from "react-icons/go";  
import { Container, Content, Section } from "./styles"
import { TextButton } from "../../components/Textbutton"
import { Header } from "../../components/Header"


export function Details() {
  return (
    <Container>
     <Header to="Profile"/>
      <main>
        <Content>
          <div>
            <h1>Meus Filmes</h1>
            <TextButton title="Adicionar filme" icon={GoPlus} to="/new"/>
          </div>
          
          <Section to="/Moviepreview">    
            <NoteMovie />
            <NoteMovie />
            <NoteMovie />
            </Section>  
       </Content>
</main>
      
    </Container>
  )
}
