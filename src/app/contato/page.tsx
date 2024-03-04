"use client";

import React from "react";
import Header from "@/components/Header/Header";
import ContactForm from "@/components/Form/ContactForm";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import Footer from "@/components/Footer";
import Title from "@/components/Section/SectionTitle";
import BackToTop from "@/components/BackToTop";
import SubTitle from "@/components/Section/SubTitle";
import Section from "@/components/Section/Section";

export default function Contato() {
  return (
    <React.Fragment>
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
}
