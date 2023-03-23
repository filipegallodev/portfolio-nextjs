import React from "react";
import styled from "styled-components";

const AboutText = () => {
  return (
    <>
      <Text>
        Hello, World! Sou Desenvolvedor Front-End, tenho 23 anos e sou do estado
        de São Paulo! Estou sempre focado na evolução constante todos os dias,
        visando melhorar como desenvolvedor, em suas diversas atividades
        envolvidas. Tenho o sonho e objetivo de trabalhar na área e fazer o que
        mais gosto, desenvolver aplicações belas e funcionais.
      </Text>
      <Text>
        Atualmente, faço faculdade de Análise e Desenvolvimento de Sistemas na
        UNINTER e faço estágio na área.
      </Text>
      <Text>
        Em meu tempo livre gosto de estar estudando, seja em cursos ou
        aprendendo na prática algo acompanhando a documentação. Além disso,
        sempre estou desenvolvendo algum projeto real, para colocar em prática
        todo o conhecimento adquirido e expor o que consigo fazer.
      </Text>
      <Text>
        Gosto muito de aprofundar conhecimentos em tecnologias que já faço uso,
        para poder tirar o maior proveito e potencial da ferramenta.
      </Text>
      <Text>
        Enfim, por hora é isso! Sinta-se à vontade para se conectar e conversar
        comigo por meio dos meus contatos! Ficarei feliz em me conectar com você
        e respondê-lo{"("}a{")"}.
      </Text>
    </>
  );
};

const Text = styled.p`
  margin: 16px 36px;
  line-height: 1.75rem;
  text-align: left;
  font-size: 1.5rem;
`;

export default AboutText;
