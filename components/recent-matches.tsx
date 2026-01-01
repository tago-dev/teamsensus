import { cn } from "@/lib/utils";

interface Match {
  id: number;
  opponent: string;
  score: string;
  result: "win" | "loss";
  date: string;
  map: string;
}

const recentMatches: Match[] = [
  {
    id: 1,
    opponent: "FaZe Clan",
    score: "16-12",
    result: "win",
    date: "Dec 28, 2025",
    map: "Mirage",
  },
  {
    id: 2,
    opponent: "Natus Vincere",
    score: "14-16",
    result: "loss",
    date: "Dec 25, 2025",
    map: "Inferno",
  },
  {
    id: 3,
    opponent: "G2 Esports",
    score: "16-8",
    result: "win",
    date: "Dec 22, 2025",
    map: "Dust2",
  },
  {
    id: 4,
    opponent: "Team Liquid",
    score: "16-11",
    result: "win",
    date: "Dec 20, 2025",
    map: "Ancient",
  },
  {
    id: 5,
    opponent: "Vitality",
    score: "13-16",
    result: "loss",
    date: "Dec 18, 2025",
    map: "Anubis",
  },
];

export function RecentMatches() {
  return (
    <section id="matches" className="relative py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a3a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a3a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full border border-[#ff4655]/20 bg-[#ff4655]/10 px-4 py-1.5 text-sm font-medium text-[#ff4655]">
            MATCH HISTORY
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            Recent <span className="text-[#ff4655]">Matches</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Our latest performances in competitive Counter-Strike 2 tournaments
          </p>
        </div>

        {/* Matches List */}
        <div className="space-y-4">
          {recentMatches.map((match, index) => (
            <div
              key={match.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-[#2a2a3a] bg-[#1a1a24] transition-all duration-300 hover:border-[#ff4655]/50 hover:shadow-lg hover:shadow-[#ff4655]/5",
              )}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Result indicator bar */}
              <div
                className={cn(
                  "absolute left-0 top-0 bottom-0 w-1 transition-all duration-300",
                  match.result === "win"
                    ? "bg-green-500 group-hover:w-2"
                    : "bg-red-500 group-hover:w-2"
                )}
              />

              <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                {/* Match Info */}
                <div className="flex flex-1 items-center gap-6">
                  {/* Date */}
                  <div className="hidden text-sm text-gray-500 sm:block sm:w-28">
                    {match.date}
                  </div>

                  {/* Teams & Score */}
                  <div className="flex flex-1 items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#ff4655] to-[#ff6b77] font-bold text-white">
                        TS
                      </div>
                      <span className="font-medium text-white">Team Sensus</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          "text-2xl font-bold",
                          match.result === "win" ? "text-green-500" : "text-red-500"
                        )}
                      >
                        {match.score}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-medium text-white">{match.opponent}</span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2a2a3a] font-bold text-gray-400">
                        {match.opponent.charAt(0)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map & Result Badge */}
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-[#2a2a3a] px-4 py-2 text-sm font-medium text-gray-300">
                    {match.map}
                  </div>
                  <div
                    className={cn(
                      "rounded-lg px-4 py-2 text-sm font-bold uppercase",
                      match.result === "win"
                        ? "bg-green-500/10 text-green-500"
                        : "bg-red-500/10 text-red-500"
                    )}
                  >
                    {match.result}
                  </div>
                </div>

                {/* Mobile date */}
                <div className="text-sm text-gray-500 sm:hidden">{match.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button className="group inline-flex items-center gap-2 rounded-lg border border-[#ff4655] bg-transparent px-8 py-3 font-medium text-[#ff4655] transition-all hover:bg-[#ff4655] hover:text-white">
            View All Matches
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
