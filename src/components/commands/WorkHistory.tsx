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
    title: "Software developer @ P.I Works ( 06/2020 - 09/2020 )",
    desc: `
    Summer Internship`,
    list: [
      "Worked on projects involving both telecommunications layer and software layer.",
      "Learned about database management, audio streaming, how to evaluate the performance of a wireless network and how to improve on it.",
      "Learned about the commonly faced problems of telecommunication systems and their solutions.",
      "Reviewed and analyzed performance of wireless communication systems.",
    ],
  },
];

export default WorkHistory;
