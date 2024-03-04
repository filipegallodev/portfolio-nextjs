"use client";

import Image from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";
import FilipePhoto from "../../public/assets/img/foto-filipe.webp";
import AboutText from "@/components/AboutText";
import TechnologiesContainer from "@/components/Technologies/TechnologiesContainer";
import SectionTitle from "@/components/Section/SectionTitle";
import SubTitle from "@/components/Section/SubTitle";
import ProjectContainer from "@/components/Projects/ProjectContainer";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import ContactForm from "@/components/Form/ContactForm";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Section from "@/components/Section/Section";
import Header from "@/components/Header/Header";
import SocialMediaIcons from "@/components/SocialMedia/SocialMediaIcons";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main className="animeLeft">
        <Container>
          <Info>
            <MainTitle>Oi, sou o Filipe Gallo!</MainTitle>
            <Headline>
              <span>Desenvolvedor</span> <Strong>Back-End</Strong>
            </Headline>
            <SocialMediaIcons />
          </Info>
          <ImageStyled src={FilipePhoto} alt="Foto de Filipe Gallo" />
        </Container>
        <Section>
          <SectionTitle>Conheça um pouco sobre mim</SectionTitle>
          <SubTitle>Prazer, Filipe</SubTitle>
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
  margin: 100px 0px 120px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10rem;
  @media (max-width: 1350px) {
    gap: 0;
  }
  @media (max-width: 510px) {
    margin-top: 0px;
  }
`;

const ImageStyled = styled(Image)`
  background-color: var(--main-color);
  width: 100%;
  max-width: 480px;
  height: auto;
  border-radius: 40px 120px 40px 120px;
  filter: drop-shadow(0 0 0.75rem var(--main-color));
  animation: ${PulseImage} 2.5s infinite alternate;
  @media (max-width: 1350px) {
    margin-bottom: 96px;
  }
  @media (max-width: 510px) {
    max-width: 90%;
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
  font-weight: 600;
  @media (max-width: 450px) {
    font-size: 3.5rem;
  }
`;

const Headline = styled.span`
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-weight: 500;
  gap: 16px;
  @media (max-width: 1360px) {
    justify-content: center;
  }
  @media (max-width: 450px) {
    font-size: 2rem;
    gap: 6px;
  }
`;

const Strong = styled.strong`
  background: var(--main-text-color);
  border-radius: 6px;
  padding: 0px 2px;
  color: #1e53ff;
  font-weight: 600;
`;
