import Head from "next/head";
import Image from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";
import Header from "../components/Header";
import FilipePhoto from "../public/assets/img/foto-filipe.webp";
import AboutText from "../components/AboutText";
import TechnologiesContainer from "../components/Technologies/TechnologiesContainer";
import SectionTitle from "../components/SectionTitle";
import SubTitle from "../components/SubTitle";
import ProjectContainer from "../components/Projects/ProjectContainer";
import SocialMedia from "../components/SocialMedia";
import ContactForm from "../components/Form/ContactForm";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Section from "../components/Section";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Filipe Gallo | Desenvolvedor Front-End</title>
        <meta
          name="description"
          content="Site oficial do Desenvolvedor Front-End Filipe Gallo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="animeLeft">
        <Container>
          <Info>
            <MainTitle>Filipe Gallo</MainTitle>
            <Headline>
              <span>Desenvolvedor</span> <Strong>Front-End</Strong>
            </Headline>
          </Info>
          <Image src={FilipePhoto} alt="Foto de Filipe Gallo" />
        </Container>
        <Section>
          <SectionTitle>Conheça um pouco sobre mim</SectionTitle>
          <SubTitle>Um breve resumo</SubTitle>
          <AboutText />
          <SubTitle>Tecnologias</SubTitle>
          <TechnologiesContainer />
        </Section>
        <Section>
          <SectionTitle>Conheça alguns dos meus projetos</SectionTitle>
          <ProjectContainer />
        </Section>
        <Section>
          <SectionTitle>Entre em contato comigo!</SectionTitle>
          <ContactForm />
          <SubTitle>Outros meios</SubTitle>
          <SocialMedia />
        </Section>
        <BackToTop />
      </main>
      <Footer />
    </React.Fragment>
  );
}

const PulseImage = keyframes`
  from {
    transform: scale(1);
    filter: drop-shadow(0 0 0.35rem var(--main-color));
  }
  to {
    transform: scale(1.05);
    filter: drop-shadow(0 0 0.75rem var(--main-color));
  }
`;

const Container = styled.section`
  min-height: 90vh;
  margin-bottom: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10rem;
  & img {
    width: 100%;
    max-width: 480px;
    height: auto;
    border-radius: 100%;
    filter: drop-shadow(0 0 0.75rem var(--main-color));
    animation: ${PulseImage} 2.5s infinite alternate;
  }
  @media (max-width: 1350px) {
    gap: 0;
    & img {
      margin-bottom: 96px;
    }
  }
  @media (max-width: 510px) {
    & img {
      max-width: 90%;
    }
  }
`;

const Info = styled.div`
  @media (max-width: 1350px) {
    width: 100%;
    text-align: center;
    margin: 64px 12px 32px 12px;
  }
`;

const MainTitle = styled.h1`
  margin: 0px;
  margin-bottom: 16px;
  font-size: 4.5rem;
  font-weight: 700;
  text-transform: uppercase;
  @media (max-width: 450px) {
    font-size: 3.5rem;
  }
`;

const Headline = styled.span`
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  @media (max-width: 450px) {
    font-size: 2rem;
    gap: 6px;
  }
`;

const Strong = styled.strong`
  background: var(--main-text-color);
  border-radius: 6px;
  padding: 2px 8px;
  text-transform: uppercase;
  color: #22f;
  font-weight: 600;
`;
