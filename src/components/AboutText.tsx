import React from "react";
import styled from "styled-components";

const AboutText = () => {
  return (
    <>
      <Text>
        Desenvolvedor com sólida experiência em desenvolvimento, manutenção de
        sistemas e resolução de problemas, buscando sempre as melhores e mais
        modernas práticas utilizadas pelo mercado.
      </Text>
      <Text>
        Atualmente, atuo como desenvolvedor na NW Software, onde desempenho um
        papel crucial no desenvolvimento e manutenção dos módulos do sistema,
        manutenção e modelagem do banco de dados e a resolução de problemas
        complexos. Também sou responsável por um projeto de customização para um
        cliente.
      </Text>
      <Text>
        Sou um profissional flexível, não sou engessado em tecnologias, sempre
        estou disposto e consigo aprender facilmente novas ferramentas. Topo
        qualquer desafio que vier.
      </Text>
      <Text>
        Estou aberto a conexões e prontamente disponível para conversar sobre
        oportunidades e colaborações. Vamos nos conectar?!
      </Text>
    </>
  );
};

const Text = styled.p`
  margin: 16px 0px;
  line-height: 1.75rem;
  text-align: left;
  font-size: 1.35rem;
`;

export default AboutText;
