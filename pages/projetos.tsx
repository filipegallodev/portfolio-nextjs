import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectContainer from "../components/Projects/ProjectContainer";

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
          <PageTitle>Conheça alguns dos meus projetos</PageTitle>
          <ProjectContainer />
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
};

const Container = styled.section`
  margin: 0 24px;
`;

const PageTitle = styled.h1`
  text-align: center;
  color: var(--main-color);
  font-size: 1.85rem;
  margin: 48px 0;
`;

export default Projetos;
