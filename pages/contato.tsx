import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import ContactForm from "../components/Form/ContactForm";
import styled from "styled-components";
import SocialMedia from "../components/SocialMedia";

const Contato = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Filipe Gallo | Contato</title>
        <meta name="description" content="Entre em contato comigo." />
      </Head>

      <Header />
      <Main className="animeLeft">
        <section>
          <PageTitle>Entre em contato comigo!</PageTitle>
          <ContactForm />
          <SocialMedia />
        </section>
      </Main>
    </React.Fragment>
  );
};

const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 810px) {
    margin: 0 24px;
  }
`;

const PageTitle = styled.h2`
  text-align: center;
  color: var(--main-color);
  font-size: 1.85rem;
  margin: 48px 0;
`;

export default Contato;
