import Head from "next/head";
import Image from "next/image";
import React from "react";
import styled, { keyframes } from "styled-components";
import Header from "../components/Header";
import FilipePhoto from "../public/assets/img/foto-filipe.webp";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Filipe Gallo | Desenvolvedor Front-End</title>
        <meta
          name="description"
          content="Site oficial do Desenvolvedor Front-End Filipe Gallo."
        />
        <meta name="description" content="Página inicial." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="animeLeft">
        <Container>
          <Info>
            <MainTitle>Filipe Gallo</MainTitle>
            <Headline>
              Desenvolvedor <Strong>Front-End</Strong>
            </Headline>
          </Info>
          <Image src={FilipePhoto} alt="Foto de Filipe Gallo" />
        </Container>
      </main>
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

const Container = styled.div`
  margin-bottom: 96px;
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
  margin: 0;
  font-size: 4.5rem;
  @media (max-width: 450px) {
    font-size: 3.5rem;
  }
`;

const Headline = styled.span`
  font-size: 3rem;
  @media (max-width: 450px) {
    font-size: 2rem;
  }
`;

const Strong = styled.strong`
  color: var(--main-color);
`;
