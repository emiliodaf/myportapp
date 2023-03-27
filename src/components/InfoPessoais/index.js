import React from 'react'
import {FaDev, FaLinkedin, FaGithub, FaMapMarkerAlt, FaRegEnvelope} from 'react-icons/fa'
import {Container, Informaçoes , Funcao, RedeSociais, DadosPerfil, DadosEndereco, Detalhes} from './styles';


export default function index() {
  return (
    
   <Container>
    <Informaçoes>
      <DadosPerfil>
        <img src="https://github.com/emiliodaf.png" alt="Imagem perfil" />
        <h1>Emilio Daf</h1>
      </DadosPerfil>
      <Funcao>
        <FaDev size={20} />
        <span>React Front End Web Developer</span>
      </Funcao>
      <RedeSociais>
        <div>
          <a href='https://br.linkedin.com/in/emiliodaf' target={'_blank'} rel='noreferrer'><FaLinkedin size={25} /></a>
          <a href='https://github.com/emiliodaf' target={'_blank'} rel='noreferrer'><FaGithub size={25} /></a>
        </div>
      </RedeSociais>
      <DadosEndereco>
        <Detalhes>
          <FaMapMarkerAlt size={20} />
          <span>Barra Mansa - RJ, Brasil</span>
        </Detalhes>
        <Detalhes>
          <FaRegEnvelope size={20}/>
          <span>emilio.daf.linkedin@gmail.com</span>
        </Detalhes>
      </DadosEndereco>
    </Informaçoes>
  </Container>

  )
}
