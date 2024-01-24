import React from "react";
import styled from "styled-components";

const AboutText = () => {
  return (
    <>
      <Text>
        Sou um Desenvolvedor Back-End apaixonado por criar aplicações
        inovadoras e impactantes. Com sólida experiência em desenvolvimento,
        busco constantemente aprimorar minhas habilidades técnicas e
        conhecimentos, sempre me mantendo atualizado e me dedicando diariamente
        a projetos desafiadores que me permitam crescer como desenvolvedor e
        como pessoa.
      </Text>
      <Text>
        Atualmente, ocupo a posição de desenvolvedor na NW Software, onde
        desempenho um papel crucial na concepção, implementação e aprimoramento
        contínuo de soluções inovadoras de software. Minha responsabilidade
        principal é colaborar de maneira proativa com uma equipe talentosa,
        visando superar desafios complexos e atender às expectativas dos nossos
        clientes.
      </Text>
      <Text>
        Logo abaixo, você irá encontrar minhas principais habilidades técnicas.
        Essas habilidades não apenas compõem a base técnica do meu conhecimento,
        mas também refletem meu compromisso com as práticas modernas de
        desenvolvimento, a qualidade do código e a entrega de soluções eficazes.
        Estou sempre ansioso para aplicar essas habilidades em desafios
        complexos e contribuir para projetos inovadores.
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
