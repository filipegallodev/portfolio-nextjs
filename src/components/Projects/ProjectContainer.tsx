import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { fetchProjects } from "@/store/reducers/projects";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import ProjectSkeleton from "./ProjectSkeleton";

const ProjectContainer = () => {
  const dispatch = useAppDispatch();
  const [projects, setProjects] = useState<IProject[] | null>();
  const { loading, data } = useAppSelector((state) => state.projects);

  useEffect(() => {
    if (!data) dispatch(fetchProjects());
  }, [data, dispatch]);

  useEffect(() => {
    if (data) setProjects(data);
  }, [data]);

  if (loading || !projects) return <ProjectSkeleton />;
  return (
    <React.Fragment>
      <Container>
        {projects.map((project: IProject) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Container>
    </React.Fragment>
  );
};

const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin: 48px 0px;
`;

export default ProjectContainer;