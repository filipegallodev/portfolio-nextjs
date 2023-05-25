"use client";

import Head from "next/head";
import React from "react";
import AboutText from "@/components/AboutText";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TechnologiesContainer from "@/components/Technologies/TechnologiesContainer";
import Title from "@/components/SectionTitle";
import BackToTop from "@/components/BackToTop";
import SubTitle from "@/components/SubTitle";
import Section from "@/components/Section";

export default function Sobre() {
  return (
    <React.Fragment>
      <Head>
        <title>Sobre | Filipe Gallo | Desenvolvedor Front-End</title>
        <meta name="description" content="Sobre mim." />
      </Head>
      <Header />
      <main className="animeLeft">
        <Section>
          <Title>Conheça um pouco sobre mim</Title>
          <SubTitle>Um breve resumo</SubTitle>
          <AboutText />
          <SubTitle>Tecnologias</SubTitle>
          <TechnologiesContainer />
        </Section>
        <BackToTop />
      </main>
      <Footer />
    </React.Fragment>
  );
}
