import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

type ProjectsProps = {
  isLastCommand: boolean;
};

const Projects: React.FC<ProjectsProps> = ({ isLastCommand = false }) => {
  const { arg, history, rerender } = useContext(termContext);
  //console.log(isLastCommand)

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (!isLastCommand) return;
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        if (id === parseInt(arg[1])) {
          console.log(id, url);
          window.open(url, "_blank");
        }
      });
    }
    return () => {
      isLastCommand = false;
    };
  }, [currentCommand, rerender, arg, isLastCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Below you can find some of the projects that I've coded.
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Satellite visualization",
    desc: "A website that visualizes the satellites orbiting the Earth, done as a project for Data Visualization course at EPFL",
    url: "https://com-480-data-visualization.github.io/project-2023-astro-vizards/",
  },
  {
    id: 2,
    title: "Time series student performance prediction",
    desc: `I along with 2 other team members, worked with data provided by a 
    start up (lernnavi), to come up with, train and test several 
    machine learning algorithms to cluster students using the platform into
    groups and try to predict their performances of week N, using the data available from weeks 1...N-1. Conducted as a course project for
    ML for behavioral data at EPFL`,
    url: "https://github.com/ML4BD/final-submission-uclumasa",
  },
  {
    id: 3,
    title: "Brain Fingerprinting via Graph Structure Learning",
    desc: `A project that aims to
    investigate the use of graph structure learning (GSL) methods
    to construct alternative graphs to so
    called functional connectivity (FC) graphs where a brain graph is derived based on pairwise
    functional correlation between activity in brain regions. Conducted as a course project for ML course at EPFL
    under the supervision of Medical Image processing Lab.`,
    url: "https://drive.google.com/file/d/1sqEazi1b93ltYfkUFU4iQcDDFkNtxzZX/view?usp=sharing",
  },
  {
    id: 4,
    title: "E-commerce website design",
    desc: `As the software team lead, with a group of 7, used agile development, 
    to design and develop an E-Commerce website as a course project. 
    Utilized Java (JPA, JDBC, JAXRS), Javascript(JQuery), JSP and Wildfly 18.0.1.`,
    url: "https://github.com/aybarsyazici/Web-Store-Project",
  },
];

export default Projects;
