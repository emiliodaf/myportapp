import styled from "styled-components";

export const Container = styled.div `

background-color: #fff;
min-width: 20vw;
min-height: 90vh;
border-radius: 15px;

`;

export const Informaçoes = styled.div `

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
span{
      font-size: 1.1em;
      font-weight: bold;
    }
    svg{
      margin-right: 2%;
      color: #fff;
    }

`;

export const Funcao = styled.div `

display: flex;  
justify-content: center;
align-items: center;  
background: rgba(2,0,36,1);
width: 90%;
margin-top: 4%;
padding: 10px;
border-radius: 20px;

`;

export const DadosPerfil = styled.div `

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h1 {
    font-size: 1.5rem;
}

img {
    margin: 15px 0;
    width: 80%;
    height: 80%;
    border-radius: 50%;
}
`;

export const RedeSociais = styled.div `

display: flex;
align-items: center;
justify-content: space-around;
width: 100%;
margin-top: 7%;
padding: 5px;
background: rgba(2,0,36,1);

div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;

    svg {
    color: #fff; 
  }
}

`;

export const DadosEndereco = styled.div `

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

margin-top: 7%;
padding: 10px;
width: 100%;
background: rgba(2,0,36,1);

`;

export const Detalhes = styled.div `

display: flex;
align-items: center;
width: 90%;

svg {
    margin-right: 5%;
    color: #fff;
}

`;

















