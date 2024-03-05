import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { useAppDispatch } from "@/store/hooks/useAppDispatch";
import { fetchProjects } from "@/store/reducers/projects";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import ProjectSkeleton from "./ProjectSkeleton";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import SubTitle from "../Section/SubTitle";
import { ExpandMoreRounded } from "@mui/icons-material";

const ProjectContainer = () => {
  const dispatch = useAppDispatch();
  const [projects, setProjects] = useState<IProject[] | null>();
  const [projectsFiltered, setProjectsFiltered] = useState<IProject[] | null>();
  const { loading, data } = useAppSelector((state) => state.projects);
  const [filter, setFilter] = useState("todos");

  const handleRadioGroupChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFilterValue = (event.target as HTMLInputElement).value;
    setFilter(newFilterValue);
    if (newFilterValue === "todos") {
      return setProjectsFiltered(projects);
    }
    setProjectsFiltered(
      projects?.filter((project) => {
        const result = project.tags.filter(({ id }) => id === newFilterValue);
        if (result.length > 0) return project;
      })
    );
  };

  useEffect(() => {
    if (!data) dispatch(fetchProjects());
  }, [data, dispatch]);

  useEffect(() => {
    if (data) {
      setProjects(data);
      setProjectsFiltered(data);
    }
  }, [data]);

  if (loading || !projectsFiltered) return <ProjectSkeleton />;
  return (
    <React.Fragment>
      <div>
        <AccordionStyled>
          <AccordionSummaryStyled
            expandIcon={<ExpandMoreRoundedStyled />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Filtros
          </AccordionSummaryStyled>
          <AccordionDetails>
            <FormControl>
              <RadioGroupStyled
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={filter}
                onChange={handleRadioGroupChange}
              >
                <FormControlLabel
                  value="todos"
                  control={<StyledRadio className="todos" />}
                  label="Todos"
                />
                <FormControlLabel
                  value="pessoal"
                  control={<StyledRadio className="pessoal" />}
                  label="Pessoais"
                />
                <FormControlLabel
                  value="profissional"
                  control={<StyledRadio className="profissional" />}
                  label="Profissionais"
                />
                <FormControlLabel
                  value="curso"
                  control={<StyledRadio className="curso" />}
                  label="Cursos"
                />
                <FormControlLabel
                  value="finalizado"
                  control={<StyledRadio className="finalizado" />}
                  label="Finalizados"
                />
                <FormControlLabel
                  value="desenvolvimento"
                  control={<StyledRadio className="desenvolvimento" />}
                  label="Em Desenvolvimento"
                />
              </RadioGroupStyled>
            </FormControl>
          </AccordionDetails>
        </AccordionStyled>
      </div>
      <Container>
        {projectsFiltered.map((project: IProject) => (
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
  gap: 24px;
  flex-wrap: wrap;
  margin: 48px 0px;
`;

const AccordionStyled = styled(Accordion)`
  &.MuiPaper-root {
    background-color: ${(props) => props.theme.color.tech.container};
    color: ${(props) => props.theme.color.text};
  }
`;

const AccordionSummaryStyled = styled(AccordionSummary)`
  &.MuiAccordionSummary-content {
    font-size: 1.125rem;
  }
`;

const ExpandMoreRoundedStyled = styled(ExpandMoreRounded)`
  &.MuiSvgIcon-root {
    color: ${(props) => props.theme.color.text};
  }
`;

const RadioGroupStyled = styled(RadioGroup)`
  width: 100%;
  display: flex;
  gap: 16px;
`;

const StyledRadio = styled(Radio)`
  &.todos {
    color: ${(props) => props.theme.color.text};
  }
  &.pessoal {
    color: #f09000;
  }
  &.profissional {
    color: #f00000;
  }
  &.curso {
    color: #d400f0;
  }
  &.desenvolvimento {
    color: #0084f0;
  }
  &.finalizado {
    color: #00f000;
  }
`;

export default ProjectContainer;
