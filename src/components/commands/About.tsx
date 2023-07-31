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
        My interests are web development, machine learning, and distributed
        systems. I have mostly worked as a full-stack developer.
      </p>
    </AboutWrapper>
  );
};

export default About;
