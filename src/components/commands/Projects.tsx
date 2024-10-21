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
  const emptyProjMessage =
    // Check if arg[1] is equal to a project id with empty url if so set message
    parseInt(arg[1]) === 2
      ? "Unfortunately, this project does not have a URL."
      : "";
  //console.log(isLastCommand)

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (!isLastCommand) return;
    if (checkRedirect(rerender, currentCommand, "projects")) {
      console.log("Checking redirect", projects, arg[1]);
      projects.forEach(({ id, url }) => {
        if (id === parseInt(arg[1])) {
          console.log(`executed for ${id}`);
          if (url === "") {
            console.log(`for ${id}, it was empty`);
            return;
          }
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
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5", "6", "7", "8"]) ? (
      <Usage cmd="projects" />
    ) : (
      <p>{emptyProjMessage}</p>
    );
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
    title:
      "Investigating the Eﬀectiveness of AI-Generated Examples for Learning",
    desc: "Publication at CHI 2024. Research Project at ML for Education Lab. at EPFL. The project aims to investigate the potential of LLM for personalizing educational content.",
    url: "https://dl.acm.org/doi/10.1145/3613905.3650900",
  },
  {
    id: 2,
    title: "Peace Mediator Assistant",
    desc: "Thesis done at the LSIR lab at EPFL. Tool that leverages the capabilities of Large Language Models (LLMs) to extract,\
    analyze, and summarize important information from news articles. It focuses on identifying the main political issues, the stakeholders\
    involved in these conflicts, and their respective positions, sentiments, emotions, and stances\
    The primary purpose is to assist mediators in conflict analysis\
    and the settlement of disputes by providing them with detailed insights derived from news sources.",
    url: "",
  },
  {
    id: 3,
    title: "Explanations in Example-based Learning",
    desc: "How can we best support learners in self-explaining in example-based learning?\n \
    A large scale, real class room 2x2 study design with over 200 participants. \n \
    RQ1: What is the eﬀect of self-explaining the elements of a text in example-based learning?\n \
    RQ2: What is the eﬀect of actively highlighting the elements of a text in example-based learning?",
    url: "https://aybarsyazici.github.io/explanation-eval/",
  },
  {
    id: 4,
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
    id: 5,
    title: "Distributed Information Systems course projects",
    desc: `Group course projects conducted at EPFL for the Distributed Information Systems course.
    Of the 3 projects(each one taking 4 weeks), our group achieved #1 ranking for 2 and #2 ranking for one of them.
    Here are the topics of the 3 projects:
    Project 1: Text Retrieval & top-k re-ranking
    Project 2: Recommender systems | Students are expected to develop a recommender system that is able to predict the rating of a user for a given movie.
    Project 3: Named Entity Disambiguation | Named Entity Disambiguation (NED) is the task of mapping entities, such as persons, locations, or companies, from a given text document to corresponding unique entities in a target Knowledge Base (KB).
    If you execute 'projects go 5' you will be redirected to a google drive link containing our reports for all 3 projects.`,
    url: "https://drive.google.com/file/d/1NCrKXT1pjPfRcJ7uT_xZeKkoQaL_oatr/view?usp=sharing",
  },
  {
    id: 6,
    title: "Satellite visualization",
    desc: "A website that visualizes the satellites orbiting the Earth, done as a project for Data Visualization course at EPFL",
    url: "https://com-480-data-visualization.github.io/project-2023-astro-vizards/",
  },
  {
    id: 7,
    title: "Time series student performance prediction",
    desc: `I along with 2 other team members, worked with data provided by a 
    start up (lernnavi), to come up with, train and test several 
    machine learning algorithms to cluster students using the platform into
    groups and try to predict their performances of week N, using the data available from weeks 1...N-1. Conducted as a course project for
    ML for behavioral data at EPFL`,
    url: "https://github.com/ML4BD/final-submission-uclumasa",
  },

  {
    id: 8,
    title: "E-commerce website design",
    desc: `As the software team lead, with a group of 7, used agile development, 
    to design and develop an E-Commerce website as a course project. 
    Utilized Java (JPA, JDBC, JAXRS), Javascript(JQuery), JSP and Wildfly 18.0.1.`,
    url: "https://github.com/aybarsyazici/Web-Store-Project",
  },
];

export default Projects;
