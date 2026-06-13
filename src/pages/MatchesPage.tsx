import MatchGrid from "../components/MatchGrid";

function MatchesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-2 text-4xl font-black">⚽ Matches</h2>
      <p className="mb-8 text-gray-400">
        All group stage results currently loaded into the tracker.
      </p>

      <MatchGrid />
    </section>
  );
}

export default MatchesPage;