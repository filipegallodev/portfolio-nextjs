import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import ContactForm from "../components/Form/ContactForm";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";
import Title from "../components/SectionTitle";
import BackToTop from "../components/BackToTop";
import SubTitle from "../components/SubTitle";
import Section from "../components/Section";

const Contato = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Contato | Filipe Gallo | Desenvolvedor Front-End</title>
        <meta name="description" content="Entre em contato comigo." />
      </Head>
      <Header />
      <main className="animeLeft">
        <Section>
          <Title>Entre em contato comigo!</Title>
          <ContactForm />
          <SubTitle>Outros meios</SubTitle>
          <SocialMedia />
        </Section>
        <BackToTop />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Contato;
