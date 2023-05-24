import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Text>
        Desenvolvido por{" "}
        <Link
          href="https://github.com/filipegallodev"
          target="_blank"
          rel="noreferrer"
        >
          Filipe
        </Link>
        .
      </Text>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 32px;
`;

const Text = styled.p`
  text-align: center;
  font-size: 1.25rem;
`;

const Link = styled.a`
  color: var(--main-color);
  font-weight: 500;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    color: var(--main-color-hover);
  }
`;

export default Footer;
