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
    desc: "CGPA | 5.50/6.00 | 2022-Current",
  },
];

export default Education;
