import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Projects from "./commands/Projects";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";
import WorkHistory from "./commands/WorkHistory";
import DownloadCV from "./commands/DownloadCV";

type Props = {
  index: number;
  cmd: string;
  historyLength: number;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["projects", "socials", "themes", "echo"];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          about: <About />,
          clear: <Clear />,
          echo: <Echo />,
          education: <Education />,
          work: <WorkHistory />,
          email: <Email />,
          help: <Help />,
          history: <History />,
          projects: <Projects isLastCommand={index === 0} />,
          pwd: <GeneralOutput>/home/aybarsyazici</GeneralOutput>,
          socials: <Socials isLastCommand={index === 0} />,
          themes: <Themes />,
          welcome: <Welcome />,
          whoami: <GeneralOutput>visitor</GeneralOutput>,
          cv: <DownloadCV />,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
