import React from "react";
import styles from "../styles/contato.module.css";

const Form = () => {
  const [titulo, setTitulo] = React.useState("");
  const [mensagem, setMensagem] = React.useState("");

  function enviarEmail() {
    if (titulo !== "" && mensagem !== "") {
      window.open(
        `mailto:filipegallodev@hotmail.com?subject=${titulo}&body=${mensagem}`
      );
    }
  }

  return (
    <form className={styles.form} onSubmit={enviarEmail}>
      <div className={styles.titulo}>
        <label htmlFor="titulo">Assunto:</label>
        <input
          className="titulo"
          type="text"
          id="titulo"
          placeholder="Título"
          required
          onChange={({ target }) => setTitulo(target.value)}
        />
      </div>
      <div className={styles.mensagem}>
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          className="mensagem"
          id="mensagem"
          cols={30}
          rows={10}
          placeholder="Conteúdo da mensagem..."
          required
          onChange={({ target }) => setMensagem(target.value)}
        ></textarea>
      </div>
      <div>
        <button>Enviar</button>
      </div>
    </form>
  );
};

export default Form;
