import React from "react";
import Image from "next/image";
import styled from "styled-components";
import linkedinLogo from "../public/assets/logos/linkedin-logo.svg";
import githubLogo from "../public/assets/logos/github-logo.svg";

const SocialMedia = () => {
  return (
    <Container>
      <Title>Outros meios</Title>
      <List>
        <Item>
          <Link
            href="https://www.linkedin.com/in/filipegallo/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={linkedinLogo} alt="LinkedIn" />
            LinkedIn
          </Link>
        </Item>
        <Item>
          <Link
            href="https://github.com/filipegallodev"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={githubLogo} alt="GitHub" />
            GitHub
          </Link>
        </Item>
      </List>
    </Container>
  );
};

const Container = styled.div`
  margin: 64px 0px;
  & img {
    width: 100%;
    max-width: 48px;
    height: auto;
  }
`;

const Title = styled.h3`
  font-size: 1.5em;
  color: var(--main-color);
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  @media (max-width: 470px) {
    flex-wrap: wrap;
  }
`;

const Item = styled.li`
  width: 100%;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: var(--card-background-color);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.35);
  padding: 12px 32px;
  border-radius: 6px;
  color: var(--main-text-color);
  font-weight: 500;
  transition: 0.1s;
  &:hover {
    border-right: var(--secundary-color) 4px solid;
    opacity: 1;
  }
`;

export default SocialMedia;
