import background from "../assets/background.png";

function PageBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      <img
        src={background}
        alt=""
        className="h-full w-full object-cover object-center opacity-80"
      />

      <div className="absolute inset-0 bg-[#020617]/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/10 via-[#020617]/20 to-[#020617]/80" />
    </div>
  );
}

export default PageBackground;