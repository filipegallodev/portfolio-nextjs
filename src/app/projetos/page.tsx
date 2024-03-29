"use client";

import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import ProjectContainer from "@/components/Projects/ProjectContainer";
import Title from "@/components/Section/SectionTitle";
import BackToTop from "@/components/BackToTop";
import Section from "@/components/Section/Section";

export default function Projetos() {
  return (
    <React.Fragment>
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
}
