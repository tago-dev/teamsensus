import { cn } from "@/lib/utils";

interface Player {
  id: number;
  name: string;
  role: string;
  country: string;
}

const players: Player[] = [
  { id: 1, name: "s1mple", role: "AWPer", country: "🇺🇦" },
  { id: 2, name: "ZywOo", role: "Rifler", country: "🇫🇷" },
  { id: 3, name: "device", role: "AWPer", country: "🇩🇰" },
  { id: 4, name: "NiKo", role: "Entry Fragger", country: "🇧🇦" },
  { id: 5, name: "electronic", role: "Support", country: "🇷🇺" },
];

export function Hero() {
  return (
    <section id="roster" className="relative min-h-screen pt-16">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ff4655]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-[#ff4655]/20 bg-[#ff4655]/10 px-4 py-1.5 text-sm font-medium text-[#ff4655]">
            CS2 ESPORTS TEAM
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-[#ff4655] to-[#ff6b77] bg-clip-text text-transparent">
              Team Sensus
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400 sm:text-xl">
            Elite Counter-Strike 2 competitors pushing the boundaries of tactical gameplay
          </p>
        </div>

        {/* Roster Grid */}
        <div className="mb-12">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Our <span className="text-[#ff4655]">Roster</span>
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {players.map((player, index) => (
              <div
                key={player.id}
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-[#2a2a3a] bg-[#1a1a24] p-6 transition-all duration-300 hover:border-[#ff4655]/50 hover:shadow-xl hover:shadow-[#ff4655]/10",
                  "hover:-translate-y-2"
                )}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff4655]/0 to-[#ff4655]/0 transition-all duration-300 group-hover:from-[#ff4655]/5 group-hover:to-[#ff4655]/10" />
                
                <div className="relative">
                  {/* Player Avatar Placeholder */}
                  <div className="mb-4 flex h-32 w-full items-center justify-center rounded-lg bg-gradient-to-br from-[#2a2a3a] to-[#1a1a24] text-4xl font-bold text-[#ff4655]">
                    {player.name.charAt(0)}
                  </div>
                  
                  {/* Player Info */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white">{player.name}</h3>
                      <span className="text-2xl">{player.country}</span>
                    </div>
                    <p className="text-sm font-medium text-[#ff4655]">{player.role}</p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute right-0 top-0 h-16 w-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute right-0 top-0 h-1 w-8 bg-[#ff4655]" />
                  <div className="absolute right-0 top-0 h-8 w-1 bg-[#ff4655]" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-[#2a2a3a] pt-12 md:grid-cols-4">
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-[#ff4655]">250+</div>
            <div className="text-sm text-gray-400">Matches Played</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-[#ff4655]">75%</div>
            <div className="text-sm text-gray-400">Win Rate</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-[#ff4655]">12</div>
            <div className="text-sm text-gray-400">Tournaments Won</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-4xl font-bold text-[#ff4655]">#3</div>
            <div className="text-sm text-gray-400">World Ranking</div>
          </div>
        </div>
      </div>
    </section>
  );
}
