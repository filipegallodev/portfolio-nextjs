import React, { useEffect, useState } from "react";
import LinkedinIcon from "@/../../public/assets/logos/linkedin-logo.svg";
import GitHubLightIcon from "@/../../public/assets/logos/github-logo.svg";
import GitHubDarkIcon from "@/../../public/assets/logos/github-dark-logo.svg";
import Image from "next/image";
import styled from "styled-components";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import Link from "next/link";

const SocialMediaIcons = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const [gitHub, setGitHub] = useState(GitHubLightIcon);

  useEffect(() => {
    if (theme === "dark") return setGitHub(GitHubLightIcon);
    return setGitHub(GitHubDarkIcon);
  }, [theme]);

  return (
    <Container>
      <LinkStyled
        href="https://www.linkedin.com/in/filipegallo/"
        target="_blank"
        rel="noreferrer"
      >
        <ImageStyled src={LinkedinIcon} alt="LinkedIn" />
      </LinkStyled>
      <LinkStyled
        href="https://github.com/filipegallodev"
        target="_blank"
        rel="noreferrer"
      >
        <ImageStyled src={gitHub} alt="GitHub" />
      </LinkStyled>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  border-radius: 6px;
  padding: 4px;
  margin-top: 16px;
  @media (max-width: 1350px) {
    justify-content: center;
  }
`;

const LinkStyled = styled(Link)`
  max-width: 32px;
  max-height: 32px;
`;

const ImageStyled = styled(Image)`
  width: 100%;
  height: 100%;
`;

export default SocialMediaIcons;
