import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import ContactForm from "../components/Form/ContactForm";
import styled from "styled-components";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";
import Title from "../components/Title";

const Contato = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Contato | Filipe Gallo | Desenvolvedor Front-End</title>
        <meta name="description" content="Entre em contato comigo." />
      </Head>

      <Header />
      <main className="animeLeft">
        <Container>
          <Title>Entre em contato comigo!</Title>
          <ContactForm />
          <SubTitle>Outros meios</SubTitle>
          <SocialMedia />
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
};

const Container = styled.section`
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 810px) {
    margin: 0 24px;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.65rem;
  color: var(--main-color);
  margin: 40px auto;
`;

export default Contato;
