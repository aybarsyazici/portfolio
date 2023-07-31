import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
  checkRedirect,
  generateTabs,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";

type SocialsProps = {
  isLastCommand: boolean;
};

const Socials: React.FC<SocialsProps> = ({ isLastCommand = false }) => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (!isLastCommand) return;
    if (checkRedirect(rerender, currentCommand, "socials")) {
      socials.forEach(({ id, url }) => {
        if (id === parseInt(arg[1])) {
          url === "@yoshiane"
            ? window.open(
                "https://discord.com/users/118399445804122116",
                "_blank"
              )
            : window.open(url, "_blank");
        }
      });
    }
    return () => {
      isLastCommand = false;
    };
  }, [arg, rerender, currentCommand, isLastCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="socials" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="socials">
      <ProjectsIntro>Here are my social links</ProjectsIntro>
      {socials.map(({ id, title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {url}</CmdDesc>
        </CmdList>
      ))}
      <Usage cmd="socials" marginY />
    </HelpWrapper>
  );
};

const socials = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/aybarsyazici",
    tab: 3,
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/aybars-yaz%C4%B1c%C4%B1-9129b1193/",
    tab: 1,
  },
  {
    id: 3,
    title: "Steam",
    url: "https://steamcommunity.com/id/yoshiane",
    tab: 4,
  },
  {
    id: 4,
    title: "Discord",
    url: "@yoshiane",
    tab: 2,
  },
];

export default Socials;
