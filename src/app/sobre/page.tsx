"use client";

import React from "react";
import AboutText from "@/components/AboutText";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import TechnologiesContainer from "@/components/Technologies/TechnologiesContainer";
import Title from "@/components/Section/SectionTitle";
import BackToTop from "@/components/BackToTop";
import SubTitle from "@/components/Section/SubTitle";
import Section from "@/components/Section/Section";

export default function Sobre() {
  return (
    <React.Fragment>
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
