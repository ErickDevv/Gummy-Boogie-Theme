import { useState, useCallback } from "react";

const paletteTitle = `
██████╗  █████╗ ██╗     ███████╗████████╗████████╗███████╗
██╔══██╗██╔══██╗██║     ██╔════╝╚══██╔══╝╚══██╔══╝██╔════╝
██████╔╝███████║██║     █████╗     ██║      ██║   █████╗
██╔═══╝ ██╔══██║██║     ██╔══╝     ██║      ██║   ██╔══╝
██║     ██║  ██║███████╗███████╗   ██║      ██║   ███████╗
╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝   ╚═╝      ╚═╝   ╚══════╝`;

const themes = [
  {
    bg: "#00020d",
    accent: "#d94c76",
    colors: [
      { hex: "#00020d", label: "Background" },
      { hex: "#313340", label: "Surface" },
      { hex: "#ededed", label: "Foreground" },
      { hex: "#d94c76", label: "Keyword" },
      { hex: "#c94cd9", label: "Comment" },
      { hex: "#4CD95F", label: "Variable" },
      { hex: "#89DDFF", label: "Operator" },
      { hex: "#fffd8e", label: "Function" },
    ],
  }
];

type ToastState = { hex: string; visible: boolean } | null;

const Swatch = ({
  hex,
  label,
  onCopy,
}: {
  hex: string;
  label: string;
  bg: string;
  onCopy: (hex: string) => void;
}) => (
  <button
    onClick={() => onCopy(hex)}
    title={`Copy ${hex}`}
    className="group relative cursor-pointer w-12 h-12 flex-shrink-0 transition-all duration-150 hover:scale-110 hover:z-10"
    style={{ backgroundColor: hex }}
  >
    <div className="absolute left-1/2 -translate-x-1/2 -top-9 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-150 translate-y-1 group-hover:translate-y-0">
      <div className="flex items-center gap-1.5 px-2 py-1 rounded-md border border-[#ffffff18] shadow-xl bg-[#0e0f1f] backdrop-blur-sm whitespace-nowrap">
        <div className="w-2.5 h-2.5 rounded-sm border border-[#ffffff20] flex-shrink-0" style={{ backgroundColor: hex }} />
        <span className="text-white font-mono text-[10px] tracking-wide">{hex.toLowerCase()}</span>
      </div>
      <div className="w-2 h-2 mx-auto -mt-px rotate-45 bg-[#0e0f1f] border-r border-b border-[#ffffff18]" />
    </div>
    <span className="sr-only">{label}</span>
  </button>
);

const Toast = ({ toast }: { toast: ToastState }) => (
  <div
    className="fixed bottom-8 left-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-xl border border-[#ffffff15] shadow-2xl transition-all duration-300"
    style={{
      transform: `translateX(-50%) translateY(${toast?.visible ? "0" : "16px"})`,
      opacity: toast?.visible ? 1 : 0,
      pointerEvents: "none",
      backgroundColor: "#0e0f1f",
      backdropFilter: "blur(12px)",
    }}
  >
    <div
      className="w-5 h-5 rounded-sm flex-shrink-0 border border-[#ffffff20]"
      style={{ backgroundColor: toast?.hex ?? "transparent" }}
    />
    <span className="text-white font-mono text-sm tracking-wide">
      {toast?.hex?.toLowerCase()}
    </span>
    <span className="text-[#555] font-mono text-sm">copied!</span>
  </div>
);

const Palette = () => {
  const [toast, setToast] = useState<ToastState>(null);
  const timerRef = { current: 0 as ReturnType<typeof setTimeout> };

  const handleCopy = useCallback((hex: string) => {
    navigator.clipboard.writeText(hex);
    clearTimeout(timerRef.current);
    setToast({ hex, visible: true });
    timerRef.current = setTimeout(() => setToast((t) => t ? { ...t, visible: false } : t), 1600);
  }, []);

  return (
    <div className="bg-[#00020d] pb-16">
      <div className="flex justify-center mb-10 px-4">
        <pre
          className="text-[#d94c76] leading-none"
          style={{ fontFamily: "Inconsolata, monospace", fontSize: "clamp(4px, 1.2vw, 10px)" }}
        >
          {paletteTitle}
        </pre>
      </div>

      <div className="flex flex-col items-center gap-10 px-4">
        {themes.map((theme) => (
          <div key={theme.name} className="flex flex-col items-center gap-4">
            <span
              className="font-bold text-sm tracking-widest uppercase"
              style={{ fontFamily: "Inconsolata, monospace", color: theme.accent }}
            >
              {theme.name}
            </span>
            <div className="flex rounded-xl overflow-visible p-3 gap-1" style={{ backgroundColor: "#2a2b35" }}>
              {theme.colors.map((c) => (
                <Swatch key={c.hex + c.label} hex={c.hex} label={c.label} bg={theme.bg} onCopy={handleCopy} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <Toast toast={toast} />
    </div>
  );
};

export default Palette;
