'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Code, X, ChevronRight, Gamepad2 } from 'lucide-react';
import { Game } from '../types';

// Mock Data
const GAMES: Game[] = [
  {
    id: '1',
    title: 'Neon Horizon',
    description: 'A synth-wave racing experience built with Three.js.',
    longDescription: 'Neon Horizon is a high-octane procedural racing game that pushes the boundaries of WebGL. Experience infinite tracks generated in real-time, accompanied by a reactive synth-wave soundtrack. Features include custom vehicle physics, bloom shaders, and global leaderboards.',
    tags: ['WebGL', 'React', 'Three.js'],
    imageUrl: 'https://picsum.photos/id/10/800/600',
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: '2',
    title: 'Void Echo',
    description: 'Minimalist puzzle platformer playing with light and sound.',
    longDescription: 'Traverse a world shrouded in darkness where sound is your only guide. Void Echo utilizes the Web Audio API to create a unique echolocation mechanic. Players must clap, sing, or throw objects to reveal the geometry of the level for a brief moment.',
    tags: ['Canvas API', 'Web Audio', 'Puzzle'],
    imageUrl: 'https://picsum.photos/id/16/800/600',
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: '3',
    title: 'Cyber Deck',
    description: 'Strategic card battler with rogue-like elements.',
    longDescription: 'Construct the ultimate deck to hack into the megacorp servers. Cyber Deck combines traditional deck-building mechanics with tactical grid-based combat. Every run is unique with over 200 cards and 50 different enemy types.',
    tags: ['Strategy', 'Rogue-like', 'TypeScript'],
    imageUrl: 'https://picsum.photos/id/54/800/600',
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: '4',
    title: 'Aether Realms',
    description: 'Cooperative multiplayer RPG running on WebSockets.',
    longDescription: 'Join forces with friends in a persistent open world. Aether Realms demonstrates the power of modern WebSockets for real-time multiplayer gaming. Classless progression, crafting systems, and massive boss raids await.',
    tags: ['Multiplayer', 'Socket.io', 'Node.js'],
    imageUrl: 'https://picsum.photos/id/28/800/600',
    demoLink: '#',
    githubLink: '#'
  }
];

export const GameLibrary: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedGame) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedGame]);

  return (
    <div className="w-full max-w-[1400px] mx-auto px-6 py-20 lg:px-12">
      {/* Header */}
      <header className="mb-16">
        {/* <h2 className="text-[#8E8E93] font-medium text-sm tracking-wide uppercase mb-2">Portfolio</h2> */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Arena By Manish Shetty
        </h1>
        <p className="text-[#8E8E93] text-lg max-w-2xl leading-relaxed">
          A curated collection of interactive experiences and technical experiments pushing the boundaries of web gaming. Designed and developed by{' '}
          <a href="#" className="text-[#0A84FF] hover:text-[#409CFF] transition-colors font-medium">
            Manish Shetty
          </a>.
        </p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GAMES.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onClick={() => setSelectedGame(game)}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedGame && (
          <GameModal
            game={selectedGame}
            onClose={() => setSelectedGame(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Sub-Components
// ---------------------------------------------------------------------------

interface GameCardProps {
  game: Game;
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <motion.div
      layoutId={`card-${game.id}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="group cursor-pointer bg-[#1C1C1E] rounded-[20px] overflow-hidden flex flex-col h-[420px] shadow-lg hover:shadow-2xl hover:shadow-black/50 transition-shadow"
    >
      {/* Image Container */}
      <div className="h-[70%] w-full overflow-hidden relative">
        <motion.img
          layoutId={`image-${game.id}`}
          src={game.imageUrl}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle overlay on image for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E]/80 to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="h-[30%] p-6 flex flex-col justify-center relative">
        <div className="flex justify-between items-start mb-2">
          <motion.h3
            layoutId={`title-${game.id}`}
            className="text-xl font-bold text-white tracking-tight"
          >
            {game.title}
          </motion.h3>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/10 p-1 rounded-full">
              <ChevronRight size={16} className="text-white" />
            </div>
          </div>
        </div>
        <p className="text-[#8E8E93] text-sm leading-relaxed line-clamp-2">
          {game.description}
        </p>
      </div>
    </motion.div>
  );
};

interface GameModalProps {
  game: Game;
  onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ game, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
        <motion.div
          layoutId={`card-${game.id}`}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-2xl bg-[#1C1C1E] rounded-[24px] overflow-hidden shadow-2xl pointer-events-auto flex flex-col max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero Image Section */}
          <div className="relative h-64 sm:h-80 w-full shrink-0">
            <motion.img
              layoutId={`image-${game.id}`}
              src={game.imageUrl}
              alt={game.title}
              className="w-full h-full object-cover"
            />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white p-2 rounded-full transition-colors z-10 border border-white/10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-transparent to-black/30" />

            {/* Title Overlay */}
            <div className="absolute bottom-6 left-6 sm:left-8">
              <motion.h2
                layoutId={`title-${game.id}`}
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2"
              >
                {game.title}
              </motion.h2>
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-white/90 bg-white/20 backdrop-blur-sm rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto no-scrollbar">
            <div className="space-y-6">
              <p className="text-[#8E8E93] text-base sm:text-lg leading-relaxed">
                {game.longDescription}
              </p>

              <div className="h-px w-full bg-white/10" />

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  className="flex-1 bg-[#0A84FF] hover:bg-[#007aff] text-white font-semibold py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20"
                >
                  <Play fill="currentColor" size={18} />
                  <span>Play Now</span>
                </button>

                <button
                  className="flex-1 bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.12)] text-white font-medium py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all border border-white/5 backdrop-blur-sm transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Code size={18} />
                  <span>View Code</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};