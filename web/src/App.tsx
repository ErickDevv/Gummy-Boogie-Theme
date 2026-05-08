import "./App.css";
import Terminal from "./Terminal";
import Palette from "./Palette";
import { SVGProps } from "react";

const icon = "/icon.png";
const vscode = "/visual-studio-code.svg";
const warp = "/warp.png";

const title = `
 ██████╗ ██╗   ██╗███╗   ███╗███╗   ███╗██╗   ██╗    ██████╗  ██████╗  ██████╗  ██████╗ ██╗███████╗
██╔════╝ ██║   ██║████╗ ████║████╗ ████║╚██╗ ██╔╝    ██╔══██╗██╔═══██╗██╔═══██╗██╔════╝ ██║██╔════╝
██║  ███╗██║   ██║██╔████╔██║██╔████╔██║ ╚████╔╝     ██████╔╝██║   ██║██║   ██║██║  ███╗██║█████╗  
██║   ██║██║   ██║██║╚██╔╝██║██║╚██╔╝██║  ╚██╔╝      ██╔══██╗██║   ██║██║   ██║██║   ██║██║██╔══╝  
╚██████╔╝╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║   ██║       ██████╔╝╚██████╔╝╚██████╔╝╚██████╔╝██║███████╗ 
 ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝   ╚═╝       ╚═════╝  ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝╚══════╝
`;

const integrations = `
██╗███╗   ██╗████████╗███████╗ ██████╗ ██████╗  █████╗ ████████╗██╗ ██████╗ ███╗   ██╗███████╗
██║████╗  ██║╚══██╔══╝██╔════╝██╔════╝ ██╔══██╗██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
██║██╔██╗ ██║   ██║   █████╗  ██║  ███╗██████╔╝███████║   ██║   ██║██║   ██║██╔██╗ ██║███████╗
██║██║╚██╗██║   ██║   ██╔══╝  ██║   ██║██╔══██╗██╔══██║   ██║   ██║██║   ██║██║╚██╗██║╚════██║
██║██║ ╚████║   ██║   ███████╗╚██████╔╝██║  ██║██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║███████║
╚═╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝
`;

function BytesizeGithub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill="currentColor"
        d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30c2 0 2-1 2-2v-5c-7 2-10-2-11-5c0 0 0-1-2-3c-1-1-5-3-1-3c3 0 5 4 5 4c3 4 7 3 9 2c0-2 2-4 2-4c-8-1-14-4-14-15c0-4 1-7 3-9c0 0-2-4 0-9c0 0 5 0 9 4c3-2 13-2 16 0c4-4 9-4 9-4c2 7 0 9 0 9c2 2 3 5 3 9c0 11-7 14-14 15c1 1 2 3 2 6v8c0 1 0 2 2 2c3 0 22-9 22-30C64 14 50 0 32 0Z"
      ></path>
    </svg>
  );
}

const App = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-start pb-20 a">
        <div className="w-full items-center h-full bg-[rgb(0,2,13,0.9)] absolute top-0 z-50"></div>
        <nav className="w-full h-14 bg-none top-0 absolute z-50">
          <img
            src={icon}
            alt="icon"
            className="h-8 text-white absolute top-6 left-6 logo"
          />
          <button
            onClick={() =>
              window.open("https://github.com/ErickDevv/Gummy-Boogie-Theme")
            }
          >
            <BytesizeGithub className="h-8 w-8 text-white absolute top-6 right-6 github" />
          </button>
        </nav>
        <pre className="text z-50 ">{title}</pre>

        <h2 className="description z-50 text-center px-[20px]">
          A collection of themes composed with a gummy explosion of color for
          programming time.
        </h2>
        <Terminal></Terminal>
      </div>

      <div className="bg-[#00020d] pb-10">
        <br></br>
        <br></br>
        <br></br>
        <div className="flex items-center justify-center">
          <pre className=" text-[#4CD95F] integrations">{integrations}</pre>
        </div>

        <br></br>
        <div className="flex w-full justify-center gap-8 flex-wrap">
          <button
            className="tech"
            onClick={() =>
              window.open(
                "https://marketplace.visualstudio.com/items?itemName=ErickDevv.gummy-boogie-theme"
              )
            }
          >
            <img src={vscode} alt="vscode" />
          </button>
          <button
            className="tech"
            onClick={() =>
              window.open(
                "https://github.com/ErickDevv/Gummy-Boogie-Theme/blob/main/warp/Gummy-Boogie-Theme.yml"
              )
            }
          >
            <img src={warp} alt="warp" />
          </button>
        </div>
      </div>

      <div className="bg-[#00020d] flex items-center gap-4 px-8 py-6">
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #d94c76, #c94cd9, transparent)" }} />
        <span className="text-[#313340] font-mono text-xs tracking-[0.3em] uppercase select-none">palettes</span>
        <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #d94c76, #c94cd9, transparent)" }} />
      </div>

      <Palette />
    </>
  );
};

export default App;
