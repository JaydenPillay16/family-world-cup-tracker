export const groupBadgeStyles: Record<string, string> = {
  A: "bg-yellow-400 text-black shadow-yellow-400/30",
  B: "bg-blue-500 text-white shadow-blue-500/30",
  C: "bg-green-500 text-white shadow-green-500/30",
  D: "bg-red-500 text-white shadow-red-500/30",
  E: "bg-purple-500 text-white shadow-purple-500/30",
  F: "bg-pink-500 text-white shadow-pink-500/30",
  G: "bg-orange-500 text-white shadow-orange-500/30",
  H: "bg-cyan-500 text-black shadow-cyan-500/30",
  I: "bg-lime-500 text-black shadow-lime-500/30",
  J: "bg-indigo-500 text-white shadow-indigo-500/30",
  K: "bg-rose-500 text-white shadow-rose-500/30",
  L: "bg-emerald-500 text-white shadow-emerald-500/30",
};

export function getGroupBadgeStyle(group: string) {
  return groupBadgeStyles[group] || "bg-yellow-400 text-black shadow-yellow-400/30";
}