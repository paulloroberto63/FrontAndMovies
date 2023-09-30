import { Container, Profile, Search, Logout} from "./styles";

export function Header() {
    return(
        <Container>
         <h1>RocketMovies</h1>
         
         <Search placeholder="Pesquisar pelo titulo"/>
         
         <Profile to="/profile">
        <div>
            <strong>Paullo Roberto</strong>
            <Logout>Sair</Logout>
         </div>
         
         <img 
          src="https://github.com/paulloroberto63.png" 
          alt="Foto do usuario" />
         </Profile>
</Container>
    );
}