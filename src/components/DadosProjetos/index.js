import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { SkillsItem } from '../../services/data/skill';
import { Projetos } from '../../services/data/projetos';

import {Container, Menu, Cabecalho, OpcoesMenu, Dados, InfoDados,Skills, ItemSkill, Card, Itens, ProgressBar, Progress} from './styles';


export default function DadosProjetos() {
  const ItensSkill = SkillsItem;
  const [showDados, setShowDados] = useState(true);
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  function handleClickMenu(isTrue) {
    if (isTrue) {
      setShowDados(true);
    } else {
      setShowDados(false);
    }
  }

  return (
    <Container>
      <nav>
        <Menu>
          <Cabecalho>
            <span>Menu</span>
            <div></div>
          </Cabecalho>
          <OpcoesMenu>
            <span onClick={() => handleClickMenu(false)}>Projects</span>
            <span onClick={() => handleClickMenu(true)}>About</span>
          </OpcoesMenu>
        </Menu>
      </nav>
      <Dados>
        {showDados ? (
          <>
            <InfoDados initial="hidden" animate="visible" variants={variants}>
              <span>
              My name is Emilio Daf resident of Barra Mansa, RJ. I am Junior Front End Software Engineer. I consider myself as an enthusiast of Technology who is working hard in order to take my hard and soft skills for the next level. 
              I have just 8 months experience as a React JS Front End developer but with a huge desire to make things happen. 
              It's been a challenging experience but when we see our personal growth as Software Engineer we figure out for ourselves that all the long hours invested
              worth the effort. For many times It's been challenging but at the same time a really gratifing experience.
              Currently I am deepening in React JS with TypeScript and looking for my first opportunity as a Junior React Developer.
              if you realize that my skills might be usefull to add some value to your product or company fell free to email me
              or drop me a line that i will get back as soon as possible. 
              Now Know a little bit of my work and projects Up here where you will be able to visit my github repositories.
              To get in touch with me right now visit my linkedin profile, right!
                <b><a href='https://br.linkedin.com/in/emiliodaf' target={'_blank'} rel='noreferrer'>Click Here!</a></b>
              </span>
            </InfoDados>
            <h1>Hard Skills</h1>
            <Skills>
              {ItensSkill.map((Item) =>
                <ItemSkill animate={{ x: ['-100px', '100px', '0px'] }}
                  transition={{ ease: "easeOut", duration: 1 }}>
                  {Item.icon}
                  <div>
                    <h3>{Item.titulo}</h3>
                    <ProgressBar>
                      <Progress percentual={Item.Percentual}>
                        <span>{Item.Percentual}</span>
                      </Progress>
                    </ProgressBar>
                  </div>
                </ItemSkill>
              )}
            </Skills>
          </>
        ) : (
          <>
            <Itens>
              {Projetos.map((projetos) =>
                <Card initial="hidden" animate="visible" variants={variants}>
                  <h3>{projetos.nome}</h3>
                  <img src={projetos.img} alt="" />
                  <a href={projetos.github} target={'_blank'} rel='noreferrer'>
                    <FaGithub size={20} />
                    Git Hub
                  </a>
                </Card>
              )}
            </Itens>
          </>
        )}
      </Dados>
    </Container >
  );
}