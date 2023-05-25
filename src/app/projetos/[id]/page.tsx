"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import { useParams } from "next/navigation";

export default function Projeto() {
  const params = useParams();
  const id = params.id;
  const [project, setProject] = useState<IProject>();

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) =>
        setProject(data.find((data: IProject) => data.id === id))
      );
  }, [id]);

  return (
    <React.Fragment>
      <Header />
      <main className="animeLeft">
        {project ? <ProjectInfo {...project} /> : "Nenhum projeto encontrado."}
      </main>
      <Footer />
    </React.Fragment>
  );
}
