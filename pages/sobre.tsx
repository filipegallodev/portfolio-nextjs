import Head from "next/head";
import React from "react";
import styled from "styled-components";
import AboutText from "../components/AboutText";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TechnologiesContainer from "../components/Technologies/TechnologiesContainer";

const Sobre = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Sobre | Filipe Gallo</title>
        <meta name="description" content="Sobre mim." />
      </Head>
      <Header />
      <main className="animeLeft">
        <Container>
          <div>
            <SubTitle>Um pouco sobre mim</SubTitle>
            <AboutText />
          </div>
          <VerticalLine />
          <div>
            <SubTitle>Tecnologias</SubTitle>
            <TechnologiesContainer />
          </div>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  margin-bottom: 96px;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

const SubTitle = styled.h2`
  color: var(--main-color);
  font-size: 1.85rem;
  margin: 48px 0;
`;

const VerticalLine = styled.div`
  border-left: 1px solid var(--main-color);
  height: 560px;
  position: absolute;
  margin-left: 0px;
  left: 50%;
  top: 80px;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export default Sobre;
