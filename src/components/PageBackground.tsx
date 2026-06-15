import background from "../assets/background.png";

function PageBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      <img
        src={background}
        alt=""
        className="h-full w-full object-cover object-center opacity-70"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/20 via-[#020617]/30 to-[#020617]/75" />
      <div className="absolute inset-0 bg-black/15" />
    </div>
  );
}

export default PageBackground;