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
        <title>Projetos | Filipe Gallo</title>
        <meta name="description" content="Projetos desenvolvidos por mim." />
      </Head>
      <Header />
      <main className="animeLeft">
        <section>
          <PageTitle>Conheça alguns dos meus projetos</PageTitle>
          <ProjectContainer />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

const PageTitle = styled.h2`
  text-align: center;
  color: var(--main-color);
  font-size: 1.85rem;
  margin: 48px 0;
`;

export default Projetos;
