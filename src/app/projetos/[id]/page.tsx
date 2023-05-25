"use client";

import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import { usePathname } from "next/navigation";

export default function Projeto() {
  const projectId = usePathname().split("/")[2];
  const [project, setProject] = useState<IProject>();

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) =>
        setProject(data.find((data: IProject) => data.id === projectId))
      );
  }, [projectId]);

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
}