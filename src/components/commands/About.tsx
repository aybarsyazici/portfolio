import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Aybars Yazici</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>Computer Science Masters student @ EPFL</HighlightAlt>
        .
      </p>
      <p>
        My interests include <HighlightAlt>Machine Learning</HighlightAlt>, with
        a focus on applied ML for solving real-world problems, along with
        <HighlightAlt>Information Systems</HighlightAlt> (such as Information
        Retrieval, Recommender Systems, and Text Summarization, Knowledge
        Graphs, Ontologies...), as well as <HighlightAlt>NLP</HighlightAlt>. I
        enjoy working on projects that blend these areas. For examples on
        projects like that, check out my <HighlightAlt>Projects</HighlightAlt>{" "}
        page.
      </p>
    </AboutWrapper>
  );
};

export default About;
