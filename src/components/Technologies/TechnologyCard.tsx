import Image from "next/image";
import React from "react";
import styled from "styled-components";

const TechnologyCard = ({ name, imageUrl }: ITechnology) => {
  return (
    <Item key={name}>
      <ImageContainer>
        <ImageStyled src={imageUrl} alt={name} />
      </ImageContainer>
      <NameContainer>
        <Name>{name}</Name>
      </NameContainer>
    </Item>
  );
};

const Item = styled.li`
  width: 180px;
  height: 160px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.color.background.card.image};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  overflow: hidden;
  @media (max-width: 500px) {
    width: 148px;
  }
  @media (max-width: 360px) {
    width: 100px;
    height: 100px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const ImageStyled = styled(Image)`
  max-width: 64px;
  max-height: 64px;
`;

const NameContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.color.background.card.text};
  text-align: center;
  @media (max-width: 360px) {
    display: none;
  }
`;

const Name = styled.span`
  font-size: 1.25rem;
  color: ${(props) => props.theme.color.text};
  font-weight: 500;
`;

export default TechnologyCard;
