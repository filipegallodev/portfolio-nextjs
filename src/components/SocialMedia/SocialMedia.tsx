import React from "react";
import Image from "next/image";
import styled from "styled-components";
import LinkedinIcon from "@/../../public/assets/logos/linkedin-logo.svg";
import GitHubIcon from "@/../../public/assets/logos/github-logo.svg";

const SocialMedia = () => {
  return (
    <Container>
      <List>
        <Item>
          <Link
            href="https://www.linkedin.com/in/filipegallo/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={LinkedinIcon} alt="LinkedIn" />
            LinkedIn
          </Link>
        </Item>
        <Item>
          <Link
            href="https://github.com/filipegallodev"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={GitHubIcon} alt="GitHub" />
            GitHub
          </Link>
        </Item>
      </List>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 64px;
  & img {
    width: 100%;
    max-width: 48px;
    height: auto;
  }
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
  border-radius: 4px;
  color: var(--main-text-color);
  font-weight: 500;
  transition: 0.1s;
  &:hover {
    border-right: var(--secundary-color) 4px solid;
    opacity: 1;
  }
`;

export default SocialMedia;
