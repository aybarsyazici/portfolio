// This react component will simply download the file CV - Aybars Yazici.pdf when rendered

import { useContext, useEffect } from "react";
import { termContext } from "../Terminal";
import { checkDownload, getCurrentCmdArry } from "../../utils/funcs";
import GeneralOutput from "./GeneralOutput";

const DownloadCV = () => {
  const { arg, history, rerender } = useContext(termContext);
  const currentCommand = getCurrentCmdArry(history);

  useEffect(() => {
    //window.location.href = "/aybarsyazici-cv.pdf";
    //The solution above opens the pdf in the current tab
    //So we just open a new tab with the pdf
    if (checkDownload(rerender, currentCommand)) {
      // window.open("/aybarsyazici-cv.pdf", "_blank");
      // The above solution works only in development mode
      // To download the file in production mode, we need to use the following solution
      fetch("/aybarsyazici-cv.pdf")
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = "CV - Aybars Yazici.pdf";
          a.click();
        });
    }
  }, [arg, currentCommand, rerender]);

  return <GeneralOutput>Downloaded!!</GeneralOutput>;
};

export default DownloadCV;
