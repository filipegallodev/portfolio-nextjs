import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectContainer from "../components/Projects/ProjectContainer";
import Title from "../components/SectionTitle";
import BackToTop from "../components/BackToTop";

const Projetos = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Projetos | Filipe Gallo | Desenvolvedor Front-End</title>
        <meta name="description" content="Projetos desenvolvidos por mim." />
      </Head>
      <Header />
      <main className="animeLeft">
        <Container>
          <Title>Conheça alguns dos meus projetos</Title>
          <ProjectContainer />
        </Container>
        <BackToTop />
      </main>
      <Footer />
    </React.Fragment>
  );
};

const Container = styled.section`
  margin: 0 24px;
`;

export default Projetos;
