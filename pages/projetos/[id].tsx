import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProjectInfo from "../../components/Projects/ProjectInfo";

const Projetos = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState<IProject>();

  useEffect(() => {
    fetch("/projetos.json")
      .then((res) => res.json())
      .then((data) =>
        setProject(data.find((data: IProject) => data.id === id))
      );
  }, [id]);

  return (
    <React.Fragment>
      <Head>
        {project && <title>{project.name} | Filipe Gallo</title>}
        <meta name="description" content="Projetos desenvolvidos por mim." />
      </Head>
      <Header />
      <main className="animeLeft">
        {project && <ProjectInfo {...project} />}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Projetos;
