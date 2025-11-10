'use client';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* The Antechamber (Landing Page) */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Geometric Symbol */}
        <div className="mb-12">
          <svg 
            className="animate-slow-rotate w-48 h-48 md:w-64 md:h-64" 
            viewBox="0 0 200 200" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Square */}
            <rect 
              x="50" 
              y="50" 
              width="100" 
              height="100" 
              stroke="#d4af37" 
              strokeWidth="2" 
              fill="none"
            />
            {/* Compass */}
            <circle 
              cx="100" 
              cy="100" 
              r="40" 
              stroke="#d4af37" 
              strokeWidth="2" 
              fill="none"
            />
            <line 
              x1="100" 
              y1="60" 
              x2="100" 
              y2="140" 
              stroke="#d4af37" 
              strokeWidth="2"
            />
            <line 
              x1="60" 
              y1="100" 
              x2="140" 
              y2="100" 
              stroke="#d4af37" 
              strokeWidth="2"
            />
            {/* Diagonal lines */}
            <line 
              x1="71.5" 
              y1="71.5" 
              x2="128.5" 
              y2="128.5" 
              stroke="#d4af37" 
              strokeWidth="1.5"
            />
            <line 
              x1="128.5" 
              y1="71.5" 
              x2="71.5" 
              y2="128.5" 
              stroke="#d4af37" 
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 tracking-wider">
          The Grand Plan
        </h1>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-[#d4af37] italic mb-12 tracking-wide">
          Cognita Potestas Est.
        </p>
        <p className="text-sm md:text-base text-gray-400 mb-16 tracking-wide">
          Knowledge is Power.
        </p>

        {/* Entry Point */}
        <button
          onClick={() => scrollToSection('first-degree')}
          className="px-8 py-4 bg-transparent border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 text-lg tracking-wider uppercase"
        >
          Enter the First Degree
        </button>
      </section>

      {/* The First Degree: The Entered Apprentice */}
      <section id="first-degree" className="min-h-screen py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#d4af37] tracking-wider">
            The First Degree: The Entered Apprentice
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Part 1: The Language of Creation */}
            <div className="border-2 border-white p-8 hover:border-[#d4af37] transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#d4af37]">
                Mastering the Incantations
              </h3>
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                Part 1: The Language of Creation (The Tool)
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-6">
                Your quest is to master the fundamental language of creation: Python. 
                Your crucible is CodeCombat. Complete the first 20 levels of the 
                &apos;Computer Science 1&apos; course. Record your learnings in your Grimoire.
              </p>
              <a
                href="https://codecombat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#d4af37] text-black hover:bg-[#b5a642] transition-all duration-300 text-sm tracking-wider uppercase font-semibold"
              >
                Begin Your Quest
              </a>
            </div>

            {/* Part 2: The Art of Deconstruction */}
            <div className="border-2 border-white p-8 hover:border-[#d4af37] transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#d4af37]">
                The Advocate&apos;s Shield: Dismantling Reality
              </h3>
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
                Part 2: The Art of Deconstruction (The Shield)
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-6">
                Your mission is to learn to see the invisible chains of flawed logic 
                that bind the world. This week&apos;s study is the <strong>Straw Man</strong> fallacy. 
                Find it, dissect it, and neutralize it in your Grimoire.
              </p>
              <div className="mt-6 p-4 bg-white bg-opacity-5 border border-[#d4af37]">
                <p className="text-sm text-gray-300">
                  <strong className="text-[#d4af37]">Straw Man Fallacy:</strong> Misrepresenting 
                  an opponent&apos;s argument to make it easier to attack.
                </p>
              </div>
            </div>
          </div>

          {/* Progress Tracker Placeholder */}
          <div className="border-2 border-gray-600 p-6 bg-gray-900 bg-opacity-20">
            <h4 className="text-xl font-bold mb-4 text-gray-500">
              Progress Tracker <span className="text-sm">(Coming Soon)</span>
            </h4>
            <div className="flex gap-2 flex-wrap opacity-30">
              {Array.from({ length: 20 }).map((_, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 border border-gray-600 flex items-center justify-center text-xs"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Scribe's Chamber (The Grimoire) */}
      <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#d4af37] tracking-wider">
            The Grimoire: Your Book of Power
          </h2>
          <div className="border-4 border-[#d4af37] p-12 bg-black">
            <svg 
              className="w-24 h-24 mx-auto mb-8" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="20" y="10" width="60" height="80" stroke="#d4af37" strokeWidth="2" fill="none"/>
              <line x1="30" y1="30" x2="70" y2="30" stroke="#d4af37" strokeWidth="1"/>
              <line x1="30" y1="40" x2="70" y2="40" stroke="#d4af37" strokeWidth="1"/>
              <line x1="30" y1="50" x2="70" y2="50" stroke="#d4af37" strokeWidth="1"/>
              <line x1="30" y1="60" x2="60" y2="60" stroke="#d4af37" strokeWidth="1"/>
            </svg>
            <p className="text-lg md:text-xl leading-relaxed">
              Every command you master, every fallacy you dissect, every insight you 
              gain must be recorded. Your Grimoire is the testament to your journey 
              from apprentice to architect. Guard it well.
            </p>
          </div>
        </div>
      </section>

      {/* The Sanctum Sanctorum (Future Degrees) */}
      <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#d4af37] tracking-wider">
            The Path Unseen
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Second Degree */}
            <div className="border-2 border-gray-700 p-8 bg-gray-900 bg-opacity-30 relative overflow-hidden opacity-50">
              <div className="absolute top-4 right-4 text-4xl">🔒</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-400">
                The Second Degree
              </h3>
              <p className="text-gray-500 tracking-wide">
                The Fellow Craft
              </p>
              <div className="mt-6 h-2 bg-gray-800"></div>
            </div>

            {/* Third Degree */}
            <div className="border-2 border-gray-700 p-8 bg-gray-900 bg-opacity-30 relative overflow-hidden opacity-50">
              <div className="absolute top-4 right-4 text-4xl">🔒</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-400">
                The Third Degree
              </h3>
              <p className="text-gray-500 tracking-wide">
                The Master Mason
              </p>
              <div className="mt-6 h-2 bg-gray-800"></div>
            </div>

            {/* Beyond */}
            <div className="border-2 border-gray-700 p-8 bg-gray-900 bg-opacity-30 relative overflow-hidden opacity-30">
              <div className="absolute top-4 right-4 text-4xl">🔒</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-400">
                Beyond
              </h3>
              <p className="text-gray-500 tracking-wide">
                The Architect&apos;s Chamber
              </p>
              <div className="mt-6 h-2 bg-gray-800"></div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-500 italic text-lg">
              &quot;The path of knowledge is walked one step at a time. Complete your current degree to unlock the mysteries ahead.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#d4af37] text-center">
        <p className="text-gray-400 text-sm tracking-widest">
          © 2024 Fast Track Academy • The Grand Plan • Cognita Potestas Est
        </p>
      </footer>
    </div>
  );
}
