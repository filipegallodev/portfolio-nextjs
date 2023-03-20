import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FormError from "./FormError";

const ContactForm = () => {
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [emptySubject, setEmptySubject] = useState<boolean>(false);
  const [emptyMessage, setEmptyMessage] = useState<boolean>(false);

  function handleForm(event: React.FormEvent) {
    event.preventDefault();

    if (subject && message) {
      return window.open(
        `mailto:filipegallodev@hotmail.com?subject=${subject}&body=${message}`
      );
    }

    if (!subject) setEmptySubject(true);
    if (!message) setEmptyMessage(true);
  }

  useEffect(() => {
    if (subject) setEmptySubject(false);
    if (message) setEmptyMessage(false);
  }, [subject, message]);

  return (
    <Container>
      <Form onSubmit={handleForm}>
        <Label htmlFor="subject">Assunto</Label>
        <Input
          className="subject"
          type="text"
          id="subject"
          placeholder="Título"
          value={subject}
          onChange={({ target }) => setSubject(target.value)}
        />
        {emptySubject && <FormError />}
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          className="message"
          id="message"
          placeholder="Conteúdo da mensagem"
          value={message}
          onChange={({ target }) => setMessage(target.value)}
        ></Textarea>
        {emptyMessage && <FormError />}
        <Submit>Enviar</Submit>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Form = styled.form`
  & * {
    display: block;
  }
`;

const Label = styled.label`
  margin: 16px 0px 4px 0px;
  font-size: 1.25rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 1.125rem;
  border-radius: 6px;
  border: none;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: 2px solid var(--form-border);
    box-shadow: 0px 0px 2px 3px rgba(255, 255, 255, 1);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 150px;
  height: 100%;
  padding: 12px;
  font-size: 1.125rem;
  border-radius: 6px;
  border: none;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  resize: none;
  &:focus {
    outline: 2px solid var(--form-border);
    box-shadow: 0px 0px 2px 3px rgba(255, 255, 255, 1);
  }
`;

const Submit = styled.button`
  max-width: 320px;
  width: 100%;
  margin-top: 16px;
  padding: 12px;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 6px;
  border: none;
  background-color: var(--button);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    background-color: var(--button-hover);
  }
`;

export default ContactForm;
