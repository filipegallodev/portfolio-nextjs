import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectContainer from "../components/Projects/ProjectContainer";
import Title from "../components/SectionTitle";
import BackToTop from "../components/BackToTop";
import Section from "../components/Section";

const Projetos = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Projetos | Filipe Gallo | Desenvolvedor Front-End</title>
        <meta name="description" content="Projetos desenvolvidos por mim." />
      </Head>
      <Header />
      <main className="animeLeft">
        <Section>
          <Title>Conheça alguns dos meus projetos</Title>
          <ProjectContainer />
        </Section>
        <BackToTop />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Projetos;
