import Head from "next/head";
import React from "react";
import styled from "styled-components";
import AboutText from "../components/AboutText";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TechnologiesContainer from "../components/Technologies/TechnologiesContainer";
import Title from "../components/SectionTitle";
import BackToTop from "../components/BackToTop";

const Sobre = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Sobre | Filipe Gallo | Desenvolvedor Front-End</title>
        <meta name="description" content="Sobre mim." />
      </Head>
      <Header />
      <main className="animeLeft">
        <Container>
          <Title>Conheça um pouco sobre mim</Title>
          <SubTitle>Um breve resumo</SubTitle>
          <AboutText />
          <SubTitle>Tecnologias</SubTitle>
          <TechnologiesContainer />
        </Container>
        <BackToTop />
      </main>
      <Footer />
    </React.Fragment>
  );
};

const Container = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 96px;
  @media (max-width: 1010px) {
    margin: 0 24px;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.65rem;
  color: var(--main-color);
  margin: 40px auto;
`;

export default Sobre;
