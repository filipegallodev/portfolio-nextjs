import React from "react";
import styled from "styled-components";

const FormError = () => {
  return <Error>O campo precisa ser preenchido!</Error>;
};

const Error = styled.span`
  color: var(--error);
  margin-top: 4px;
`;

export default FormError;
