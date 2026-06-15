function PageBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.16),_transparent_32%),radial-gradient(circle_at_20%_30%,_rgba(59,130,246,0.16),_transparent_28%),radial-gradient(circle_at_85%_25%,_rgba(20,184,166,0.14),_transparent_30%)]" />

      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-yellow-400/10" />
      <div className="absolute left-1/2 top-12 h-[720px] w-[720px] -translate-x-1/2 rounded-full border border-white/5" />

      <div className="absolute bottom-[-120px] left-1/2 h-72 w-[900px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
    </div>
  );
}

export default PageBackground;