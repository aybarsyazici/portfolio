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
    desc: `
    Worked primarily as a .NET Developer. Utilized ASP.NET framework along with MVC structure to:`,
    list: [
      "develop new web pages using JQuery and razor web pages in older projects. And ReactJS in newer projects.",
      "create, maintain and consume azure functions and deploy new functions apps to the Microsoft Azure portal",
      "monitored, debugged and optimized an already existing large .NET codebase and MS SQL DB.",
    ],
    ordered: true,
  },
  {
    title: "Web developer @ SPIKY.AI (09/2020 - 11/2022)",
    desc: `
    Used several frontend and backend frameworks to design and develop admin panels, product websites. (VueJS,
    NuxtJS, ReactJS, Django Python, Spring Boot Java). 
    Website URL: https://spiky.ai/
    `,
  },
  {
    title: "Web developer @ VAYSIS ( 06/2021 - 11/2021 )",
    desc: `
    Worked as an intern to learn and use spring boot Java for the backend and ReactJS with 
    TypeScript for the frontend to develop dashboards,
    landing pages and commercial websites. Utilized Nx Project structure.
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
