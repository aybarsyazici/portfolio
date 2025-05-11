import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const WorkHistory: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my work history!</EduIntro>
      {workBg.map(({ title, desc, list, ordered = false }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
          {list != undefined &&
            (ordered ? (
              <ol>
                {list.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul>
                {list.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ))}
        </EduList>
      ))}
    </Wrapper>
  );
};

type workList = {
  title: string;
  desc: string;
  list?: string[];
  ordered?: boolean;
};

const workBg: workList[] = [
  {
    title: "Research Assistant @ ML4ED Lab(EPFL). (03/2025 - Current)",
    desc: `
      Research assistantship at ML4ED laboratory at EPFL. Worked on Scholé AI project, supervised
      student projects. The work also included web development for the dashboard of the application. Utilized ReactJS/
      Storybook/MantineUI. Supervised project topics:`,
    list: [
      "RLHF",
      "RAG + Adaptive Learning",
      "Automated Knowledge Graph Extraction",
    ],
    ordered: true,
  },
  {
    title: "Machine Learning Engineer @ Visium. (02/2024 - 08/2024)",
    desc: `
      Worked as a Junior ML Engineer to create AI models to suit client needs.
      Utilized PyTorch, DVC, Docker along with Google Cloud(Cloud run apps, Firestore DB) for the
      backend of the ML pipeline and Firebase, ReactJS for the frontend.
      Some implemented/worked on concepts:`,
    list: [
      "Implicit Deep Learning Recommender systems.",
      "Document line item OCR + classification",
      "Retrieval Augmented Generation",
    ],
    ordered: false,
  },
  {
    title: "Graduate teaching assistant @ EPFL (09/2023 - 02/2025)",
    desc: `Worked as a graduate level teaching assistant(Assistant étudiant) for Machine Learning(CS-433)[09/2023-01/2024] and
    TCP/IP(COM-407)[09/2024-01/2025] course at EPFL.`,
    list: [
      "Prepared weekly exercises.",
      "Organized and graded projects.",
      "Helped students during exercise sessions",
    ],
    ordered: false,
  },
  {
    title: "Software Developer @ EVET Tech. (12/2021 - 06/2022)",
    desc: `Worked primarily as a .NET Developer. Where I:`,
    list: [
      "Engineered dynamic web applications using ASP.NET MVC, transitioning frontend development from legacy jQuery/Razor to modern React.js for new features.",
      "Developed, deployed, and maintained serverless Azure Functions via the Microsoft Azure portal to support critical backend processes and integrations.",
      "Systematically monitored, diagnosed, and optimized a large-scale .NET application and its MS SQL database, enhancing performance and reliability",
    ],
    ordered: true,
  },
  {
    title: "Web developer @ SPIKY.AI (09/2020 - 11/2022)",
    desc: `
    Spearheaded full-stack development for critical company products, encompassing dynamic admin
    panels and user-facing product websites. Proficiently leveraged a diverse technology stack including
    frontend frameworks (Vue.js, Nuxt.js, React.js) and backend technologies (Django/Python, Spring
    Boot/Java). Architected and deployed backend services utilizing cloud platforms (GCP and AWS),
    incorporating containerization with Docker and orchestration with Kubernetes for scalable and
    resilient infrastructure. Led the initiative to design, build, and document a comprehensive custom
    UI component library using Tailwind CSS, Storybook, and SCSS, significantly enhancing UI
    consistency and accelerating development workflows. Operated effectively within a fast-paced Agile
    (Scrum/Kanban) environment, contributing to all phases from UI/UX design and requirements
    gathering to API integration, robust testing, and CI/CD pipeline management for deployments.
    Website URL: https://spiky.ai/
    `,
  },
  {
    title: "Web developer @ VAYSIS ( 06/2021 - 11/2021 )",
    desc: `
    Engineered and delivered high-quality, full-stack web solutions, including interactive dashboards,
    engaging landing pages, and robust commercial websites. Mastered frontend development with
    React.js and TypeScript, creating responsive and intuitive user interfaces. Architected and
    implemented scalable backend systems using Spring Boot (Java). Leveraged Nx monorepo project
    structure to optimize development workflows, improve code sharing, and ensure maintainability
    across complex applications.
    `,
  },
  {
    title: "Software developer @ P.I Works (06/2020 - 09/2020)",
    desc: `
    Summer Internship`,
    list: [
      "Worked on projects involving both the telecommunications layer and software layer.",
      "Focused on database management, audio streaming, evaluating wireless network \
      performance, and identifying ways to improve upon it.",
      "Gained insight into the common issues faced by telecommunication systems and their solutions.",
    ],
  },
];

export default WorkHistory;
