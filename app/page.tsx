'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const STATUS_MESSAGES = [
  '🟢 Ava is monitoring every apprentice in real time',
  '💬 Q&A queue flowing • Average wait under 90 seconds',
  '🎯 Workshop focus: Real-world project build underway',
  '📡 Bandwidth optimal • Holographic stream crystal clear',
  '🧠 Adaptive challenges calibrated to your current pace'
];

const GREETING_SCRIPT = [
  'Hello and welcome. I am Ava Reynolds, the mentor guiding you through this sanctum.',
  'Your instruments are online, your workspace is synced, and your cohort can feel you arrive.',
  'Together we are about to turn theory into living skill inside this virtual classroom.'
];

const RAISE_HAND_RESPONSES = [
  'Perfect timing. I am projecting the solution on the central holo-wall so we can solve it together.',
  'I see the question—opening a focused side channel so we can unwrap it step by step.',
  'Your curiosity powers this chamber. Let us magnify the concept and rebuild it in real time.'
];

const RECAP_RESPONSES = [
  'Rewinding the immersive feed by two minutes and pinning a concise recap to your console.',
  'No pressure—we will slow the cadence, surface the key frames, and reinforce the core pattern.',
  'Uploading a guided exercise walkthrough to your toolkit while I narrate the essential beats again.'
];

const WORKSHOP_RESPONSE =
  'Igniting the workshop module now. Pair-programming partner synced, live brief projected, and interactive artefacts unlocking to your right.';

const SESSION_DATA = [
  {
    subject: 'Artifact Engineering Lab',
    topic: 'Pythonic Glyphs & Data Sigils',
    time: 'Live • 12 learners in session'
  },
  {
    subject: 'Data Divination Track',
    topic: 'Predictive Models for Mortal Markets',
    time: 'Live • 8 analysts collaborating'
  },
  {
    subject: 'Initiate Council',
    topic: 'Logic Fallacies Tactical Briefing',
    time: 'Begins in 6 minutes'
  }
];

const IMMERSION_TOOLS = [
  {
    icon: '🎥',
    title: 'Immersive Scene Capture',
    description: 'Spatial audio and multi-angle video converge so every demonstration surrounds you.'
  },
  {
    icon: '🧠',
    title: 'Adaptive Pathways',
    description: 'Live telemetry monitors your mastery and reshapes tasks to match your stride.'
  },
  {
    icon: '🤝',
    title: 'Cohort Resonance',
    description: 'Pairings, squads, and breakout sigils form instantly when you call for collaboration.'
  }
];

function ProgressTracker() {
  const [completedLevels, setCompletedLevels] = useState<Set<number>>(() => {
    // Initialize from localStorage on mount
    if (typeof window === 'undefined') return new Set();
    
    const saved = localStorage.getItem('codecombat-progress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return new Set(parsed);
      } catch (e) {
        console.error('Failed to load progress:', e);
        return new Set();
      }
    }
    return new Set();
  });

  const toggleLevel = useCallback((level: number) => {
    setCompletedLevels((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(level)) {
        newSet.delete(level);
      } else {
        newSet.add(level);
      }
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('codecombat-progress', JSON.stringify(Array.from(newSet)));
      }
      return newSet;
    });
  }, []);

  const resetProgress = useCallback(() => {
    if (typeof window !== 'undefined' && confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      setCompletedLevels(new Set());
      localStorage.removeItem('codecombat-progress');
    }
  }, []);

  const completionPercentage = Math.round((completedLevels.size / 20) * 100);

  return (
    <div className="border-2 border-[#d4af37]/40 bg-gradient-to-br from-[#1c142c]/40 to-black/40 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-xl font-bold text-[#d4af37]">
          Progress Tracker
        </h4>
        <button
          onClick={resetProgress}
          className="text-xs uppercase tracking-wider text-gray-400 hover:text-[#d4af37] transition-colors"
          title="Reset all progress"
        >
          Reset
        </button>
      </div>
      
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-300">
            {completedLevels.size} of 20 levels completed
          </span>
          <span className="text-sm font-semibold text-[#d4af37]">{completionPercentage}%</span>
        </div>
        <div className="h-3 bg-gray-800 border border-[#d4af37]/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#d4af37] to-[#b5a642] transition-all duration-500"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      <p className="text-xs text-gray-400 mb-4 italic">
        Click on a level number to mark it as complete
      </p>

      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 20 }).map((_, i) => {
          const level = i + 1;
          const isCompleted = completedLevels.has(level);
          return (
            <button
              key={level}
              onClick={() => toggleLevel(level)}
              className={`flex h-10 w-10 items-center justify-center border text-xs font-semibold transition-all duration-300 hover:scale-110 ${
                isCompleted
                  ? 'border-[#d4af37] bg-[#d4af37] text-black shadow-[0_0_12px_rgba(212,175,55,0.6)]'
                  : 'border-[#d4af37]/40 text-gray-300 hover:border-[#d4af37] hover:bg-[#d4af37]/10'
              }`}
              title={isCompleted ? `Level ${level} - Completed! Click to unmark` : `Level ${level} - Click to mark as complete`}
            >
              {level}
            </button>
          );
        })}
      </div>

      {completedLevels.size === 20 && (
        <div className="mt-4 p-4 border-2 border-[#d4af37] bg-[#d4af37]/10 text-center">
          <p className="text-lg font-bold text-[#d4af37] mb-2">🎉 First Degree Complete! 🎉</p>
          <p className="text-sm text-gray-300">
            You have mastered the fundamental language of creation. The path to the Second Degree awaits.
          </p>
        </div>
      )}
    </div>
  );
}

function VirtualClassroomSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const autoOpenRef = useRef(false);
  const hasWelcomedRef = useRef(false);
  const prefersReducedMotionRef = useRef(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [doorStatus, setDoorStatus] = useState('🟢 Ready to Enter!');
  const [immersionMessage, setImmersionMessage] = useState('Immersive mode off · Ava is standing by');
  const [showOverlay, setShowOverlay] = useState(false);
  const [greetingLines, setGreetingLines] = useState<string[]>([]);
  const [responseText, setResponseText] = useState('');
  const [statusMessage, setStatusMessage] = useState('🟡 Syncing Immersion...');
  const [liveStats, setLiveStats] = useState({ studentsOnline: 127, liveSessions: 3, completedToday: 42 });
  const [highlightSessions, setHighlightSessions] = useState(false);
  const [isAvatarSpeaking, setIsAvatarSpeaking] = useState(false);

  const greetingTimeoutsRef = useRef<number[]>([]);
  const responseTimeoutsRef = useRef<number[]>([]);
  const statusIntervalRef = useRef<number | null>(null);
  const overlayTimeoutRef = useRef<number | null>(null);
  const highlightTimeoutRef = useRef<number | null>(null);
  const openTimeoutRef = useRef<number | null>(null);
  const speakingCountRef = useRef(0);

  const clearGreeting = useCallback(() => {
    greetingTimeoutsRef.current.forEach((id: number) => window.clearTimeout(id));
    greetingTimeoutsRef.current = [];
  }, []);

  const clearResponse = useCallback(() => {
    responseTimeoutsRef.current.forEach((id: number) => window.clearTimeout(id));
    responseTimeoutsRef.current = [];
  }, []);

  const stopStatusUpdates = useCallback(() => {
    if (statusIntervalRef.current !== null) {
      window.clearInterval(statusIntervalRef.current);
      statusIntervalRef.current = null;
    }
  }, []);

  const startSpeaking = useCallback(() => {
    speakingCountRef.current += 1;
    setIsAvatarSpeaking(true);
  }, []);

  const stopSpeaking = useCallback(() => {
    speakingCountRef.current = Math.max(0, speakingCountRef.current - 1);
    if (speakingCountRef.current === 0) {
      setIsAvatarSpeaking(false);
    }
  }, []);

  const typeGreetingLines = useCallback(
    (lines: string[], onComplete?: () => void) => {
      if (prefersReducedMotionRef.current) {
        setGreetingLines(lines);
        onComplete?.();
        return;
      }

      clearGreeting();
      setGreetingLines([]);

      let lineIndex = 0;

      const typeNextLine = () => {
        if (lineIndex >= lines.length) {
          onComplete?.();
          return;
        }

        const currentLineIndex = lineIndex;
        const line = lines[currentLineIndex];
        setGreetingLines((prev: string[]) => {
          const clone = [...prev];
          clone.push('');
          return clone;
        });

        startSpeaking();
        let charIndex = 0;

        const typeChar = () => {
          setGreetingLines((prev: string[]) => {
            const clone = [...prev];
            clone[currentLineIndex] = line.slice(0, charIndex + 1);
            return clone;
          });

          charIndex += 1;
          if (charIndex < line.length) {
            const timeoutId = window.setTimeout(typeChar, 32);
            greetingTimeoutsRef.current.push(timeoutId);
          } else {
            stopSpeaking();
            lineIndex += 1;
            const timeoutId = window.setTimeout(typeNextLine, 320);
            greetingTimeoutsRef.current.push(timeoutId);
          }
        };

        const timeoutId = window.setTimeout(typeChar, 40);
        greetingTimeoutsRef.current.push(timeoutId);
      };

      typeNextLine();
    },
    [clearGreeting, startSpeaking, stopSpeaking]
  );

  const typeResponse = useCallback(
    (text: string) => {
      if (prefersReducedMotionRef.current) {
        setResponseText(text);
        return;
      }

      clearResponse();
      setResponseText('');
      startSpeaking();
      let index = 0;

      const typeChar = () => {
        setResponseText(text.slice(0, index + 1));
        index += 1;

        if (index < text.length) {
          const timeoutId = window.setTimeout(typeChar, 26);
          responseTimeoutsRef.current.push(timeoutId);
        } else {
          const timeoutId = window.setTimeout(() => {
            stopSpeaking();
          }, 120);
          responseTimeoutsRef.current.push(timeoutId);
        }
      };

      const timeoutId = window.setTimeout(typeChar, 40);
      responseTimeoutsRef.current.push(timeoutId);
    },
    [clearResponse, startSpeaking, stopSpeaking]
  );

  const startStatusUpdates = useCallback(() => {
    stopStatusUpdates();
    statusIntervalRef.current = window.setInterval(() => {
      setStatusMessage(STATUS_MESSAGES[Math.floor(Math.random() * STATUS_MESSAGES.length)]);
      setLiveStats((prev) => ({
        studentsOnline: Math.max(96, prev.studentsOnline + Math.floor(Math.random() * 7) - 3),
        liveSessions: Math.max(1, Math.min(6, prev.liveSessions + (Math.random() > 0.72 ? 1 : 0) - (Math.random() > 0.85 ? 1 : 0))),
        completedToday: prev.completedToday + Math.max(1, Math.floor(Math.random() * 3))
      }));
    }, 12000);
  }, [stopStatusUpdates]);

  const closeOverlay = useCallback(() => {
    setShowOverlay(false);
    if (overlayTimeoutRef.current !== null) {
      window.clearTimeout(overlayTimeoutRef.current);
      overlayTimeoutRef.current = null;
    }
  }, []);

  const openClassroom = useCallback(
    (auto = false) => {
      if (isOpen || isTransitioning) return;

      setIsTransitioning(true);
      setDoorStatus(auto ? '✨ Immersion loading...' : '🟡 Entering...');
      setImmersionMessage('Immersive mode calibrating channels...');

      if (openTimeoutRef.current !== null) {
        window.clearTimeout(openTimeoutRef.current);
      }

      const delay = prefersReducedMotionRef.current ? 140 : 620;
      openTimeoutRef.current = window.setTimeout(() => {
        setIsOpen(true);
        setIsTransitioning(false);
        setDoorStatus('🚪 Exit Classroom');
        setImmersionMessage('Immersive mode active · Ava is live');
        setStatusMessage('🟡 Syncing Immersion...');
        setLiveStats({ studentsOnline: 128, liveSessions: 3, completedToday: 47 });

        if (!hasWelcomedRef.current) {
          setShowOverlay(true);
          hasWelcomedRef.current = true;
          if (overlayTimeoutRef.current !== null) {
            window.clearTimeout(overlayTimeoutRef.current);
          }
          overlayTimeoutRef.current = window.setTimeout(() => {
            closeOverlay();
          }, 6500);
        }

        typeGreetingLines(GREETING_SCRIPT, () => {
          setStatusMessage('🟢 Ava is ready to guide you');
          typeResponse('Whenever you are ready, raise your hand or begin the workshop and I will walk beside you.');
        });

        startStatusUpdates();
      }, delay);
    },
    [closeOverlay, isOpen, isTransitioning, startStatusUpdates, typeGreetingLines, typeResponse]
  );

  const closeClassroom = useCallback(() => {
    if (!isOpen && !isTransitioning) return;

    if (openTimeoutRef.current !== null) {
      window.clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }

    setIsOpen(false);
    setIsTransitioning(false);
    setDoorStatus('🟢 Ready to Enter!');
    setImmersionMessage('Immersive mode off · Ava is standing by');
    setStatusMessage('🟡 Syncing Immersion...');
    setHighlightSessions(false);

    stopStatusUpdates();
    clearGreeting();
    clearResponse();
    setGreetingLines([]);
    setResponseText('');
  }, [clearGreeting, clearResponse, isOpen, isTransitioning, stopStatusUpdates]);

  const handleRaiseHand = useCallback(() => {
    if (!isOpen) return;
    setStatusMessage('💬 Q&A focus engaged');
    typeResponse(RAISE_HAND_RESPONSES[Math.floor(Math.random() * RAISE_HAND_RESPONSES.length)]);
  }, [isOpen, typeResponse]);

  const handleNeedRecap = useCallback(() => {
    if (!isOpen) return;
    setStatusMessage('🧭 Recap mode activated');
    typeResponse(RECAP_RESPONSES[Math.floor(Math.random() * RECAP_RESPONSES.length)]);
  }, [isOpen, typeResponse]);

  const handleStartWorkshop = useCallback(() => {
    if (!isOpen) return;
    setStatusMessage('🟠 Workshop sync active');
    typeResponse(WORKSHOP_RESPONSE);
    setHighlightSessions(true);
    if (highlightTimeoutRef.current !== null) {
      window.clearTimeout(highlightTimeoutRef.current);
    }
    highlightTimeoutRef.current = window.setTimeout(() => {
      setHighlightSessions(false);
      highlightTimeoutRef.current = null;
    }, 3200);
  }, [isOpen, typeResponse]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => {
      prefersReducedMotionRef.current = query.matches;
    };

    updatePreference();
    query.addEventListener('change', updatePreference);
    return () => query.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!autoOpenRef.current && entry.isIntersecting && entry.intersectionRatio > 0.55) {
            autoOpenRef.current = true;
            openClassroom(true);
          }
        });
      },
      { threshold: [0.55] }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [openClassroom]);

  useEffect(() => {
    return () => {
      clearGreeting();
      clearResponse();
      stopStatusUpdates();

      if (overlayTimeoutRef.current !== null) {
        window.clearTimeout(overlayTimeoutRef.current);
      }
      if (highlightTimeoutRef.current !== null) {
        window.clearTimeout(highlightTimeoutRef.current);
      }
      if (openTimeoutRef.current !== null) {
        window.clearTimeout(openTimeoutRef.current);
      }
    };
  }, [clearGreeting, clearResponse, stopStatusUpdates]);

  return (
    <section
      id="virtual-classroom"
      ref={sectionRef}
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-[#0a0713] to-black border-t border-[#d4af37]/20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_55%)]" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-[#d4af37]/70">The Immersive Sanctum</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4af37] tracking-wider">Virtual Classroom</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Step inside the holographic hall. Ava, our live instructor, stands ready to greet you and orchestrate a truly lifelike mentoring session.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {!isOpen && (
            <button
              type="button"
              onClick={() => openClassroom()}
              disabled={isTransitioning}
              aria-expanded={isOpen}
              aria-controls="virtual-classroom-stage"
              className={`group relative w-60 h-80 rounded-[2.5rem] border border-[#d4af37]/40 bg-gradient-to-br from-[#1c142c] via-[#291b41] to-[#140d24] shadow-[0_24px_80px_rgba(0,0,0,0.5)] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                isTransitioning
                  ? 'opacity-80'
                  : 'hover:-translate-y-1 hover:shadow-[0_36px_110px_rgba(212,175,55,0.35)]'
              }`}
            >
              <span className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.2),_transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
              <span className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-24 h-32 rounded-xl border border-[#d4af37]/35 bg-black/25 shadow-inner" aria-hidden="true" />
              <span className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#d4af37] shadow-[0_0_14px_rgba(212,175,55,0.6)]" aria-hidden="true" />
              <span className="pointer-events-none absolute bottom-24 left-1/2 -translate-x-1/2 text-sm uppercase tracking-[0.4em] text-[#d4af37]">Enter Sanctum</span>
              <span className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 text-xs text-gray-300 font-light">{doorStatus}</span>
            </button>
          )}

          {isOpen && (
            <div id="virtual-classroom-stage" className="w-full space-y-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3 rounded-full border border-[#d4af37]/30 bg-white/5 px-5 py-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37]/60 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#d4af37]" />
                  </span>
                  <span className="text-[0.68rem] uppercase tracking-[0.45em] text-gray-300">
                    {immersionMessage}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={closeClassroom}
                  className="self-start rounded-full border border-[#d4af37]/40 bg-gradient-to-r from-[#3a284f] to-[#1a112c] px-6 py-2 text-xs uppercase tracking-[0.4em] text-[#d4af37] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_0_28px_rgba(212,175,55,0.35)]"
                >
                  Exit Classroom
                </button>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl border border-[#d4af37]/30 bg-white/5 px-6 py-7 text-center">
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Students Online</p>
                  <p className="mt-3 text-3xl font-semibold text-[#d4af37]">{liveStats.studentsOnline}</p>
                  <p className="mt-2 text-xs text-gray-400">Across all portals</p>
                </div>
                <div className="rounded-3xl border border-[#d4af37]/30 bg-white/5 px-6 py-7 text-center">
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Live Sessions</p>
                  <p className="mt-3 text-3xl font-semibold text-[#d4af37]">{liveStats.liveSessions}</p>
                  <p className="mt-2 text-xs text-gray-400">Facilitated simultaneously</p>
                </div>
                <div className="rounded-3xl border border-[#d4af37]/30 bg-white/5 px-6 py-7 text-center">
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Completed Today</p>
                  <p className="mt-3 text-3xl font-semibold text-[#d4af37]">{liveStats.completedToday}</p>
                  <p className="mt-2 text-xs text-gray-400">Milestones secured</p>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[minmax(260px,320px)_1fr]">
                <div className={`relative overflow-hidden rounded-3xl border border-[#d4af37]/30 bg-gradient-to-b from-[#1b142b] via-[#241a3c] to-[#0c0814] p-8 shadow-[0_28px_80px_rgba(0,0,0,0.45)] ${
                  isAvatarSpeaking ? 'ring-1 ring-[#d4af37]/50 shadow-[0_0_40px_rgba(212,175,55,0.35)]' : ''
                }`}>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.18),_transparent_70%)]" aria-hidden="true" />
                  <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6">
                    <div
                      className={`relative flex h-40 w-40 items-center justify-center rounded-full border border-[#d4af37]/50 bg-black/40 transition-all duration-300 ${
                        isAvatarSpeaking ? 'shadow-[0_0_35px_rgba(212,175,55,0.55)] scale-105' : 'shadow-[0_0_16px_rgba(212,175,55,0.25)]'
                      }`}
                    >
                      <span className="absolute inset-[-10%] rounded-full bg-[conic-gradient(from_0deg,_rgba(212,175,55,0.25),_transparent_70%)] animate-slow-rotate" aria-hidden="true" />
                      <span className="relative text-5xl">🧑‍🏫</span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm uppercase tracking-[0.4em] text-[#d4af37]/70">Instructor</p>
                      <h3 className="mt-2 text-xl font-semibold tracking-widest text-[#d4af37]">Ava Reynolds</h3>
                      <p className="mt-2 text-xs uppercase tracking-[0.35em] text-gray-400">Senior Learning Guide • Live</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-[#d4af37]/25 bg-white/5 p-8 backdrop-blur">
                  <div className="space-y-5">
                    <div className="space-y-2 min-h-[120px]">
                      {greetingLines.map((line, index) => (
                        <p key={index} className="text-sm leading-relaxed text-gray-200">
                          {line}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={handleRaiseHand}
                        className="rounded-full border border-[#d4af37]/40 px-5 py-2 text-[0.68rem] uppercase tracking-[0.4em] text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37]/10"
                      >
                        Raise Hand
                      </button>
                      <button
                        type="button"
                        onClick={handleNeedRecap}
                        className="rounded-full border border-white/20 px-5 py-2 text-[0.68rem] uppercase tracking-[0.4em] text-gray-200 transition-all duration-300 hover:bg-white/10"
                      >
                        Need a Recap
                      </button>
                      <button
                        type="button"
                        onClick={handleStartWorkshop}
                        className="rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-5 py-2 text-[0.68rem] uppercase tracking-[0.4em] text-[#d4af37] transition-all duration-300 hover:bg-[#d4af37]/20"
                      >
                        Start Workshop
                      </button>
                    </div>
                    <div className="min-h-[80px] rounded-2xl border border-[#d4af37]/25 bg-black/40 px-5 py-4">
                      <p className="text-sm leading-relaxed text-[#d4af37]">{responseText}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-xs uppercase tracking-[0.35em] text-gray-400">
                      {statusMessage}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div
                  className={`relative overflow-hidden rounded-3xl border ${
                    highlightSessions
                      ? 'border-[#d4af37]/70 ring-2 ring-[#d4af37]/40 shadow-[0_0_38px_rgba(212,175,55,0.35)]'
                      : 'border-white/10'
                  } bg-white/5 p-8 backdrop-blur transition-all duration-300`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#261a3a]/50 to-transparent" aria-hidden="true" />
                  <div className="relative z-10 space-y-4">
                    <h4 className="text-lg font-semibold tracking-wider text-[#d4af37]">Active Sessions</h4>
                    <div className="space-y-4">
                      {SESSION_DATA.map((session) => (
                        <div key={session.subject} className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4">
                          <p className="text-sm uppercase tracking-[0.35em] text-[#d4af37]/80">{session.subject}</p>
                          <p className="mt-2 text-base text-gray-200">{session.topic}</p>
                          <p className="mt-2 text-xs uppercase tracking-[0.35em] text-gray-400">{session.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                  <div className="absolute inset-0 bg-gradient-to-bl from-[#1d142f]/50 to-transparent" aria-hidden="true" />
                  <div className="relative z-10 space-y-5">
                    <h4 className="text-lg font-semibold tracking-wider text-[#d4af37]">Immersion Toolkit</h4>
                    <p className="text-sm text-gray-300">
                      Your console streams resources, recordings, and collaborative channels the moment you step inside.
                    </p>
                    <div className="space-y-4">
                      {IMMERSION_TOOLS.map((tool) => (
                        <div key={tool.title} className="flex gap-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                          <span className="text-2xl">{tool.icon}</span>
                          <div>
                            <p className="text-sm font-semibold tracking-wider text-[#d4af37]">{tool.title}</p>
                            <p className="text-sm text-gray-300">{tool.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {showOverlay && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 px-6 backdrop-blur-sm">
          <div className="relative max-w-xl rounded-3xl border border-[#d4af37]/40 bg-gradient-to-br from-[#271a3d]/95 via-[#0d0a17]/95 to-black/95 p-10 text-center shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_70%)]" aria-hidden="true" />
            <div className="relative space-y-6 text-gray-200">
              <h3 className="text-2xl font-semibold tracking-widest text-[#d4af37]">Ava Has Prepared the Chamber</h3>
              <p className="text-sm leading-relaxed">
                Studio lights calibrated. Spatial audio aligned. Your workspace mirrors are synced, and cohort channels are alert to your arrival. Step through when you are ready.
              </p>
              <div className="rounded-2xl border border-white/15 bg-black/40 px-5 py-4 text-sm text-gray-300">
                🎥 Multi-angle immersion • 🎧 WhisperQueue enabled • 🤝 Cohort resonance aligned • 📚 Guided artefacts primed
              </div>
              <button
                type="button"
                onClick={closeOverlay}
                className="rounded-full border border-[#d4af37]/40 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] px-8 py-3 text-sm uppercase tracking-[0.45em] text-white transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_0_40px_rgba(255,107,107,0.4)]"
              >
                Step Inside
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* The Antechamber (Landing Page) */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        {/* Geometric Symbol */}
        <div className="mb-12">
          <svg
            className="animate-slow-rotate h-48 w-48 md:h-64 md:w-64"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="50" y="50" width="100" height="100" stroke="#d4af37" strokeWidth="2" fill="none" />
            <circle cx="100" cy="100" r="40" stroke="#d4af37" strokeWidth="2" fill="none" />
            <line x1="100" y1="60" x2="100" y2="140" stroke="#d4af37" strokeWidth="2" />
            <line x1="60" y1="100" x2="140" y2="100" stroke="#d4af37" strokeWidth="2" />
            <line x1="71.5" y1="71.5" x2="128.5" y2="128.5" stroke="#d4af37" strokeWidth="1.5" />
            <line x1="128.5" y1="71.5" x2="71.5" y2="128.5" stroke="#d4af37" strokeWidth="1.5" />
          </svg>
        </div>

        <h1 className="mb-6 text-center text-5xl font-bold tracking-wider md:text-7xl">The Grand Plan</h1>

        <p className="mb-12 text-center text-xl italic tracking-wide text-[#d4af37] md:text-2xl">
          Cognita Potestas Est.
        </p>
        <p className="mb-16 text-center text-sm tracking-wide text-gray-400 md:text-base">Knowledge is Power.</p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            onClick={() => scrollToSection('first-degree')}
            className="px-8 py-4 text-lg uppercase tracking-wider text-[#d4af37] transition-all duration-300 border-2 border-[#d4af37] hover:bg-[#d4af37] hover:text-black"
          >
            Enter the First Degree
          </button>
          <button
            onClick={() => scrollToSection('virtual-classroom')}
            className="px-8 py-4 text-lg uppercase tracking-wider text-black transition-all duration-300 bg-[#d4af37] hover:bg-[#b5a642]"
          >
            Launch Virtual Classroom
          </button>
        </div>
      </section>

      {/* The First Degree: The Entered Apprentice */}
      <section id="first-degree" className="min-h-screen px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold tracking-wider text-[#d4af37] md:text-5xl">
            The First Degree: The Entered Apprentice
          </h2>

          <div className="mb-16 grid gap-12 md:grid-cols-2">
            <div className="border-2 border-white p-8 transition-all duration-300 hover:border-[#d4af37]">
              <h3 className="mb-6 text-2xl font-bold text-[#d4af37] md:text-3xl">Mastering the Incantations</h3>
              <p className="mb-4 text-sm uppercase tracking-widest text-gray-400">
                Part 1: The Language of Creation (The Tool)
              </p>
              <p className="mb-6 text-base leading-relaxed md:text-lg">
                Your quest is to master the fundamental language of creation: Python. Your crucible is CodeCombat. Complete
                the first 20 levels of the &apos;Computer Science 1&apos; course. Record your learnings in your Grimoire.
              </p>
              <a
                href="https://codecombat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#d4af37] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:bg-[#b5a642]"
              >
                Begin Your Quest
              </a>
            </div>

            <div className="border-2 border-white p-8 transition-all duration-300 hover:border-[#d4af37]">
              <h3 className="mb-6 text-2xl font-bold text-[#d4af37] md:text-3xl">The Advocate&apos;s Shield: Dismantling Reality</h3>
              <p className="mb-4 text-sm uppercase tracking-widest text-gray-400">
                Part 2: The Art of Deconstruction (The Shield)
              </p>
              <p className="mb-6 text-base leading-relaxed md:text-lg">
                Your mission is to learn to see the invisible chains of flawed logic that bind the world. This week&apos;s study is
                the <strong>Straw Man</strong> fallacy. Find it, dissect it, and neutralize it in your Grimoire.
              </p>
              <div className="mt-6 border border-[#d4af37] bg-white/5 p-4">
                <p className="text-sm text-gray-300">
                  <strong className="text-[#d4af37]">Straw Man Fallacy:</strong> Misrepresenting an opponent&apos;s argument to make it easier to attack.
                </p>
              </div>
            </div>
          </div>

          <ProgressTracker />
        </div>
      </section>

      <VirtualClassroomSection />

      {/* The Scribe's Chamber (The Grimoire) */}
      <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-4xl font-bold tracking-wider text-[#d4af37] md:text-5xl">
            The Grimoire: Your Book of Power
          </h2>
          <div className="border-4 border-[#d4af37] bg-black p-12">
            <svg className="mx-auto mb-8 h-24 w-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="10" width="60" height="80" stroke="#d4af37" strokeWidth="2" fill="none" />
              <line x1="30" y1="30" x2="70" y2="30" stroke="#d4af37" strokeWidth="1" />
              <line x1="30" y1="40" x2="70" y2="40" stroke="#d4af37" strokeWidth="1" />
              <line x1="30" y1="50" x2="70" y2="50" stroke="#d4af37" strokeWidth="1" />
              <line x1="30" y1="60" x2="60" y2="60" stroke="#d4af37" strokeWidth="1" />
            </svg>
            <p className="text-lg leading-relaxed md:text-xl">
              Every command you master, every fallacy you dissect, every insight you gain must be recorded. Your Grimoire is
              the testament to your journey from apprentice to architect. Guard it well.
            </p>
          </div>
        </div>
      </section>

      {/* The Sanctum Sanctorum (Future Degrees) */}
      <section className="min-h-screen px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center text-4xl font-bold tracking-wider text-[#d4af37] md:text-5xl">The Path Unseen</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative overflow-hidden border-2 border-gray-700 bg-gray-900/30 p-8 opacity-50">
              <div className="absolute right-4 top-4 text-4xl">🔒</div>
              <h3 className="mb-4 text-2xl font-bold text-gray-400">The Second Degree</h3>
              <p className="text-gray-500 tracking-wide">The Fellow Craft</p>
              <div className="mt-6 h-2 bg-gray-800" />
            </div>

            <div className="relative overflow-hidden border-2 border-gray-700 bg-gray-900/30 p-8 opacity-50">
              <div className="absolute right-4 top-4 text-4xl">🔒</div>
              <h3 className="mb-4 text-2xl font-bold text-gray-400">The Third Degree</h3>
              <p className="text-gray-500 tracking-wide">The Master Mason</p>
              <div className="mt-6 h-2 bg-gray-800" />
            </div>

            <div className="relative overflow-hidden border-2 border-gray-700 bg-gray-900/30 p-8 opacity-30">
              <div className="absolute right-4 top-4 text-4xl">🔒</div>
              <h3 className="mb-4 text-2xl font-bold text-gray-400">Beyond</h3>
              <p className="text-gray-500 tracking-wide">The Architect&apos;s Chamber</p>
              <div className="mt-6 h-2 bg-gray-800" />
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg italic text-gray-500">
              &quot;The path of knowledge is walked one step at a time. Complete your current degree to unlock the mysteries ahead.&quot;
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d4af37] px-6 py-8 text-center">
        <p className="text-sm tracking-widest text-gray-400">© 2024 Fast Track Academy • The Grand Plan • Cognita Potestas Est</p>
      </footer>
    </div>
  );
}
