import Image from "next/image";
import React from "react";
import styled from "styled-components";

const TechnologyCard = ({ name, imageUrl }: ITechnology) => {
  return (
    <Item key={name}>
      <Image src={imageUrl} alt={name} />
      <span>{name}</span>
    </Item>
  );
};

const Item = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 16px;
  background-color: var(--card-background-color);
  border-left: 3px solid var(--secundary-color);
  border-radius: 6px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  text-align: left;
  font-size: 1.25rem;
  color: var(--card-text-color);
  & img {
    max-width: 48px;
    height: auto;
  }
`;

export default TechnologyCard;
