"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProjectInfo from "@/components/Projects/ProjectInfo";

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const projects = await fetch("/projects.json").then((res) => res.json());
  if (!projects) return [];
  return projects.map((project: IProject) => ({
    id: project.name,
  }));
}

export default function Projeto({ params: { id } }: Props) {
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
        {project && <ProjectInfo {...project} />}
      </main>
      <Footer />
    </React.Fragment>
  );
}
