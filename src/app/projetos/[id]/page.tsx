"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import { useParams } from "next/navigation";

export default function Projeto() {
  const params = useParams();
  const id = params.id;
  const [project, setProject] = useState<IProject>();

  useEffect(() => {
    async function fetchProject() {
      const response = await fetch("/projects.json");
      const data = await response.json();
      setProject(data.find((project: IProject) => project.id === id));
    }
    fetchProject();
  }, [id]);

  if (!project) return null;
  return (
    <React.Fragment>
      <Header />
      <main className="animeLeft">
        <ProjectInfo {...project} />
      </main>
      <Footer />
    </React.Fragment>
  );
}
