'use client';

import { useState } from 'react';
import { workoutProgram, DayWorkout } from '@/data/workout';

function getIntensityColor(intensity: number): string {
  if (intensity <= 3) return 'bg-green-500';
  if (intensity <= 6) return 'bg-yellow-500';
  if (intensity <= 9) return 'bg-orange-500';
  return 'bg-red-500';
}

function getIntensityLabel(intensity: number): string {
  if (intensity <= 3) return 'Light';
  if (intensity <= 6) return 'Medium';
  if (intensity <= 9) return 'Hard';
  return 'Maximum';
}

export default function Home() {
  const [selectedDay, setSelectedDay] = useState<DayWorkout | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedDays = showAll ? workoutProgram : workoutProgram.slice(0, 7);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-700 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
            ⚔️ Solo Leveling Fitness ⚔️
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-green-400 to-white bg-clip-text text-transparent">
            30 DAY<br />WORKOUT
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Mulai dari ringan, bertahap naikkan intensitas setiap hari. 
            Transformasi dirimu dalam 30 hari dengan program latihan progresif.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-green-500/20 rounded-lg border border-green-500/30">
              <div className="text-2xl font-bold text-green-400">30</div>
              <div className="text-sm text-gray-400">Hari</div>
            </div>
            <div className="px-6 py-3 bg-green-500/20 rounded-lg border border-green-500/30">
              <div className="text-2xl font-bold text-green-400">20-60</div>
              <div className="text-sm text-gray-400">Menit/Hari</div>
            </div>
            <div className="px-6 py-3 bg-green-500/20 rounded-lg border border-green-500/30">
              <div className="text-2xl font-bold text-green-400">0</div>
              <div className="text-sm text-gray-400">Alat</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-green-400">📅</span> Program Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="text-3xl mb-2">🏃</div>
              <h3 className="font-bold text-lg mb-1">Minggu 1</h3>
              <p className="text-gray-400 text-sm">Foundation - Latihan ringan untuk membangun kebiasaan</p>
              <div className="mt-3 text-xs text-green-400">Hari 1-7 • Intensity: 2-5</div>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="text-3xl mb-2">💪</div>
              <h3 className="font-bold text-lg mb-1">Minggu 2</h3>
              <p className="text-gray-400 text-sm">Progressive - Tingkatkan beban & intensitas</p>
              <div className="mt-3 text-xs text-yellow-400">Hari 8-14 • Intensity: 5-7</div>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="text-3xl mb-2">🔥</div>
              <h3 className="font-bold text-lg mb-1">Minggu 3</h3>
              <p className="text-gray-400 text-sm">Advanced - Latihan harder untuk hasil maksimal</p>
              <div className="mt-3 text-xs text-orange-400">Hari 15-21 • Intensity: 7-9</div>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="text-3xl mb-2">👑</div>
              <h3 className="font-bold text-lg mb-1">Minggu 4</h3>
              <p className="text-gray-400 text-sm">Beast Mode - Ultimate challenge untuk hasil terbaik</p>
              <div className="mt-3 text-xs text-red-400">Hari 22-30 • Intensity: 9-10</div>
            </div>
          </div>
        </div>
      </section>

      {/* Day Cards */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-green-400">📋</span> Daily Workouts
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-3">
            {displayedDays.map((day) => (
              <button
                key={day.day}
                onClick={() => setSelectedDay(day)}
                className={`
                  p-4 rounded-xl border transition-all hover:scale-105
                  ${selectedDay?.day === day.day 
                    ? 'bg-green-500/20 border-green-500' 
                    : 'bg-gray-800 border-gray-700 hover:border-gray-600'}
                `}
              >
                <div className="text-xs text-gray-400 mb-1">Day</div>
                <div className="text-2xl font-black mb-2">{day.day}</div>
                <div className={`h-1.5 rounded-full ${getIntensityColor(day.intensity)}`} />
                <div className="text-xs mt-2 text-gray-400">{getIntensityLabel(day.intensity)}</div>
              </button>
            ))}
          </div>

          {!showAll && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-black font-bold rounded-full transition-colors"
              >
                Lihat Semua 30 Hari →
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Selected Day Detail */}
      {selectedDay && (
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
              <div className={`h-2 ${getIntensityColor(selectedDay.intensity)}`} />
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-black mb-1">
                      DAY {selectedDay.day}
                    </h2>
                    <p className="text-green-400 font-medium">{selectedDay.title}</p>
                  </div>
                  <div className="text-right">
                    <div className={`inline-block px-4 py-2 rounded-lg ${getIntensityColor(selectedDay.intensity)} text-black font-bold`}>
                      Level {selectedDay.intensity}/10
                    </div>
                    <div className="text-gray-400 mt-1">{selectedDay.duration}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                    {selectedDay.focus}
                  </span>
                </div>

                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span>🏋️</span> Exercises
                </h3>
                <div className="space-y-3 mb-8">
                  {selectedDay.exercises.map((exercise, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-black rounded-lg">
                      <div>
                        <div className="font-medium">{exercise.name}</div>
                        <div className="text-sm text-gray-400">
                          {exercise.sets} sets × {exercise.reps}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Rest</div>
                        <div className="text-green-400">{exercise.rest}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <span>💡</span> Tips
                </h3>
                <ul className="space-y-2">
                  {selectedDay.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-green-400">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedDay(null)}
                  className="mt-8 w-full py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-green-400">🎯</span> Mulai Sekarang!
          </h2>
          <p className="text-gray-400 mb-8">
            Jangan tunggu lagi. Mulai perjalananmu hari ini dan rasakan perubahan dalam 30 hari!
          </p>
          <div className="p-6 bg-gradient-to-r from-green-900/30 to-green-800/30 rounded-2xl border border-green-500/30">
            <p className="text-lg font-medium mb-4">📝 Disclaimer</p>
            <p className="text-sm text-gray-400">
              Konsultasikan dengan dokter sebelum memulai program ini. 
              Listen to your body dan istirahat jika diperlukan.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2025 Solo Leveling Fitness. Built with 💚</p>
          <p className="text-sm mt-2">No equipment needed. Just you and your determination.</p>
        </div>
      </footer>
    </main>
  );
}
