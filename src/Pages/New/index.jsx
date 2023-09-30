import { Input } from '../../components/Input'
import { TextArea } from "../../components/TextArea";
import { Container, Content, Form, NewNote} from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft } from 'react-icons/fi'
import { Section } from "../../components/Section";
import { TagHighlighter } from "../../components/TagHighlighter";
import { ButtonSign } from '../../components/ButtonSign'

export function New(){
    return(
        <Container>
       <Header />
       <main>
        <Content>
         <ButtonText title="voltar" icon={FiArrowLeft} to="/"/>
        
         <h1>Novo Filme</h1>
        
        <Form>
          <div>
            <Input 
              placeholder="Título"
              />
            <Input 
              placeholder="Sua nota (de 0 a 5)"
              />
          </div>
        
          <TextArea 
            placeholder="Observações"
            />

            <Section title="Marcadores">
             <div>
             <TagHighlighter 
              value="React"/>

             <TagHighlighter 
              isNew placeholder="Novo marcador"/>
              </div>
            </Section>
           
            <NewNote>
            <div>
              <ButtonSign title="Salvar alterações"/>
            </div>
          </NewNote>

        </Form>
        </Content>
       </main>
        </Container>
    )
}