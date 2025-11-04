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
        I'm a <HighlightAlt>Full Stack Web/AI Engineer at Cisco</HighlightAlt>, where I architect and build scalable web applications and intelligent systems. I hold a Master's in Computer Science from <HighlightAlt>EPFL</HighlightAlt> (GPA: 5.75/6.0) and a Bachelor's degree with a double major in Computer Science & Engineering and Electronics Engineering from <HighlightAlt>Sabanci University</HighlightAlt> (GPA: 3.84/4.0).
      </p>
      <p>
        My passion lies in creating complete, end-to-end solutions that solve complex problems. I specialize in integrating <HighlightAlt>Machine Learning</HighlightAlt> and <HighlightAlt>NLP</HighlightAlt> into robust <HighlightAlt>Information Systems</HighlightAlt>. This involves everything from designing the user interface and architecting the backend to implementing data-driven features like recommender systems, information retrieval, and knowledge extraction.
      </p>
      <p>
        I am fluent in English(TOEFL IBT 114/120), French(DALF C1), and Turkish(Native). For a deeper dive into my work, please explore my <HighlightAlt>Projects</HighlightAlt> page.
      </p>
    </AboutWrapper>
  );
};

export default About;