"use client";

import React from "react";
import Header from "@/components/Header";
import ContactForm from "@/components/Form/ContactForm";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import Footer from "@/components/Footer";
import Title from "@/components/SectionTitle";
import BackToTop from "@/components/BackToTop";
import SubTitle from "@/components/SubTitle";
import Section from "@/components/Section";

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
