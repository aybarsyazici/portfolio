import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Sc in CS and B.Sc in EE @ Sabanci University",
    desc: "GPA | 3.84/4.00 | 2017-2021",
  },
  {
    title: "M.Sc in CS @ EPFL",
    desc: "GPA | 5.75/6.00 | 09/2022-02/2025",
  },
];

export default Education;
