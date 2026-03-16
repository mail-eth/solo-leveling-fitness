// 30-Day Progressive Workout Program - Solo Leveling
// Day 1: Light, progressively harder until Day 30

export interface Exercise {
  name: string
  sets: number
  reps: string
  rest: string
  notes?: string
}

export interface DayWorkout {
  day: number
  title: string
  focus: string
  intensity: number // 1-10
  duration: string
  exercises: Exercise[]
  tips: string[]
}

export const workoutProgram: DayWorkout[] = [
  // DAYS 1-7: Foundation Week (Light to Moderate)
  {
    day: 1,
    title: "The Beginning",
    focus: "Full Body - Light Start",
    intensity: 2,
    duration: "20 min",
    exercises: [
      { name: "Jumping Jacks", sets: 2, reps: "20", rest: "30 sec" },
      { name: "Bodyweight Squats", sets: 2, reps: "10", rest: "45 sec" },
      { name: "Push-ups (Knees)", sets: 2, reps: "8", rest: "45 sec" },
      { name: "Plank Hold", sets: 2, reps: "20 sec", rest: "30 sec" },
      { name: "Lunges", sets: 2, reps: "8 each leg", rest: "45 sec" },
    ],
    tips: [
      "Focus on form, not speed",
      "Stay hydrated",
      "Listen to your body"
    ]
  },
  {
    day: 2,
    title: "Building Momentum",
    focus: "Full Body - Light",
    intensity: 3,
    duration: "22 min",
    exercises: [
      { name: "Jumping Jacks", sets: 2, reps: "25", rest: "30 sec" },
      { name: "Bodyweight Squats", sets: 2, reps: "12", rest: "45 sec" },
      { name: "Push-ups (Knees)", sets: 2, reps: "10", rest: "45 sec" },
      { name: "Plank Hold", sets: 2, reps: "25 sec", rest: "30 sec" },
      { name: "Mountain Climbers", sets: 2, reps: "20", rest: "45 sec" },
    ],
    tips: [
      "Keep core engaged",
      "Breathe steadily",
      "Take breaks if needed"
    ]
  },
  {
    day: 3,
    title: "First Challenge",
    focus: "Full Body - Getting Stronger",
    intensity: 4,
    duration: "25 min",
    exercises: [
      { name: "Jumping Jacks", sets: 3, reps: "30", rest: "30 sec" },
      { name: "Bodyweight Squats", sets: 3, reps: "15", rest: "45 sec" },
      { name: "Push-ups", sets: 3, reps: "10", rest: "45 sec" },
      { name: "Plank Hold", sets: 3, reps: "30 sec", rest: "30 sec" },
      { name: "Lunges", sets: 3, reps: "10 each leg", rest: "45 sec" },
      { name: "Burpees (Simplified)", sets: 2, reps: "8", rest: "45 sec" },
    ],
    tips: [
      "Squeeze your muscles",
      "Maintain good posture",
      "Stay consistent"
    ]
  },
  {
    day: 4,
    title: "Active Recovery",
    focus: "Light Movement",
    intensity: 2,
    duration: "15 min",
    exercises: [
      { name: "Walking", sets: 1, reps: "15 min", rest: "0 sec" },
      { name: "Stretching - Full Body", sets: 1, reps: "10 min", rest: "0 sec" },
    ],
    tips: [
      "Rest and recover",
      "Stretch gently",
      "Prepare for tomorrow"
    ]
  },
  {
    day: 5,
    title: "Strength Building",
    focus: "Upper Body + Core",
    intensity: 4,
    duration: "28 min",
    exercises: [
      { name: "Push-ups", sets: 3, reps: "12", rest: "45 sec" },
      { name: "Diamond Push-ups", sets: 3, reps: "8", rest: "45 sec" },
      { name: "Plank Hold", sets: 3, reps: "35 sec", rest: "30 sec" },
      { name: "Calf Raises", sets: 3, reps: "20", rest: "30 sec" },
      { name: "Bicycle Crunches", sets: 3, reps: "20", rest: "45 sec" },
      { name: "Superman Hold", sets: 3, reps: "20 sec", rest: "30 sec" },
    ],
    tips: [
      "Engage your core",
      "Control your movements",
      "Keep breathing"
    ]
  },
  {
    day: 6,
    title: "Power Up",
    focus: "Lower Body Focus",
    intensity: 5,
    duration: "30 min",
    exercises: [
      { name: "Bodyweight Squats", sets: 4, reps: "18", rest: "45 sec" },
      { name: "Lunges", sets: 3, reps: "12 each leg", rest: "45 sec" },
      { name: "Jump Squats", sets: 3, reps: "10", rest: "45 sec" },
      { name: "Wall Sit", sets: 3, reps: "30 sec", rest: "45 sec" },
      { name: "Calf Raises", sets: 3, reps: "25", rest: "30 sec" },
      { name: "Plank Hold", sets: 3, reps: "40 sec", rest: "30 sec" },
    ],
    tips: [
      "Go low in squats",
      "Lunge with control",
      "Explode in jumps"
    ]
  },
  {
    day: 7,
    title: "Week One Complete",
    focus: "Full Body Challenge",
    intensity: 5,
    duration: "32 min",
    exercises: [
      { name: "Burpees", sets: 3, reps: "10", rest: "45 sec" },
      { name: "Push-ups", sets: 3, reps: "15", rest: "45 sec" },
      { name: "Bodyweight Squats", sets: 3, reps: "20", rest: "45 sec" },
      { name: "Plank Hold", sets: 3, reps: "45 sec", rest: "30 sec" },
      { name: "Mountain Climbers", sets: 3, reps: "30", rest: "45 sec" },
      { name: "Jumping Lunges", sets: 3, reps: "12 each leg", rest: "45 sec" },
    ],
    tips: [
      "You've made it!",
      "Celebrate your progress",
      "Rest well tonight"
    ]
  },

  // DAYS 8-14: Progressive Overload Week 2
  {
    day: 8,
    title: "Level Up",
    focus: "Full Body - Medium",
    intensity: 5,
    duration: "35 min",
    exercises: [
      { name: "Warm-up Jump Rope", sets: 1, reps: "3 min", rest: "0 sec" },
      { name: "Push-ups", sets: 4, reps: "15", rest: "45 sec" },
      { name: "Bodyweight Squats", sets: 4, reps: "20", rest: "45 sec" },
      { name: "Lunges", sets: 3, reps: "15 each leg", rest: "45 sec" },
      { name: "Plank Hold", sets: 3, reps: "50 sec", rest: "30 sec" },
      { name: "Burpees", sets: 3, reps: "12", rest: "45 sec" },
    ],
    tips: [
      "Push through the burn",
      "Stay focused",
      "You got this"
    ]
  },
  {
    day: 9,
    title: "Endurance Builder",
    focus: "Cardio + Core",
    intensity: 6,
    duration: "35 min",
    exercises: [
      { name: "Jumping Jacks", sets: 3, reps: "40", rest: "30 sec" },
      { name: "Mountain Climbers", sets: 3, reps: "40", rest: "45 sec" },
      { name: "Bicycle Crunches", sets: 4, reps: "30", rest: "45 sec" },
      { name: "Plank Hold", sets: 3, reps: "55 sec", rest: "30 sec" },
      { name: "Russian Twists", sets: 3, reps: "30", rest: "45 sec" },
    ],
    tips: [
      "Keep core tight",
      "Don't rush",
      "Feel the burn"
    ]
  },
  {
    day: 10,
    title: "Strength Surge",
    focus: "Upper Body Power",
    intensity: 6,
    duration: "38 min",
    exercises: [
      { name: "Push-ups", sets: 4, reps: "18", rest: "45 sec" },
      { name: "Diamond Push-ups", sets: 4, reps: "12", rest: "45 sec" },
      { name: "Pike Push-ups", sets: 3, reps: "10", rest: "45 sec" },
      { name: "Tricep Dips (Chair)", sets: 3, reps: "15", rest: "45 sec" },
      { name: "Plank Hold", sets: 4, reps: "50 sec", rest: "30 sec" },
      { name: "Superman Hold", sets: 3, reps: "30 sec", rest: "30 sec" },
    ],
    tips: [
      "Squeeze at the top",
      "Control descent",
      "Feel the muscle"
    ]
  },
  {
    day: 11,
    title: "Leg Day",
    focus: "Lower Body Intensity",
    intensity: 7,
    duration: "40 min",
    exercises: [
      { name: "Bodyweight Squats", sets: 4, reps: "25", rest: "45 sec" },
      { name: "Jump Squats", sets: 4, reps: "15", rest: "45 sec" },
      { name: "Lunges", sets: 4, reps: "15 each leg", rest: "45 sec" },
      { name: "Pistol Squats (Assisted)", sets: 3, reps: "8 each leg", rest: "60 sec" },
      { name: "Wall Sit", sets: 4, reps: "45 sec", rest: "45 sec" },
      { name: "Calf Raises", sets: 4, reps: "30", rest: "30 sec" },
    ],
    tips: [
      "Squat deep",
      "Land softly",
      "Push your limits"
    ]
  },
  {
    day: 12,
    title: "Active Recovery",
    focus: "Light Movement",
    intensity: 2,
    duration: "20 min",
    exercises: [
      { name: "Light Jog", sets: 1, reps: "10 min", rest: "0 sec" },
      { name: "Stretching - Full Body", sets: 1, reps: "10 min", rest: "0 sec" },
    ],
    tips: [
      "Recover properly",
      "Stretch thoroughly",
      "Prepare for harder days"
    ]
  },
  {
    day: 13,
    title: "Beast Mode",
    focus: "Full Body HIIT",
    intensity: 7,
    duration: "40 min",
    exercises: [
      { name: "Burpees", sets: 4, reps: "15", rest: "45 sec" },
      { name: "Push-ups", sets: 4, reps: "20", rest: "45 sec" },
      { name: "Mountain Climbers", sets: 4, reps: "50", rest: "45 sec" },
      { name: "Jump Squats", sets: 4, reps: "18", rest: "45 sec" },
      { name: "Plank Hold", sets: 4, reps: "60 sec", rest: "30 sec" },
      { name: "Bicycle Crunches", sets: 4, reps: "40", rest: "45 sec" },
    ],
    tips: [
      "Go all out",
      "No excuses",
      "Be a beast"
    ]
  },
  {
    day: 14,
    title: "Week Two Complete",
    focus: "Full Body Challenge",
    intensity: 7,
    duration: "42 min",
    exercises: [
      { name: "Warm-up Run", sets: 1, reps: "5 min", rest: "0 sec" },
      { name: "Burpees", sets: 4, reps: "15", rest: "45 sec" },
      { name: "Push-ups", sets: 4, reps: "20", rest: "45 sec" },
      { name: "Bodyweight Squats", sets: 4, reps: "25", rest: "45 sec" },
      { name: "Lunges", sets: 4, reps: "18 each leg", rest: "45 sec" },
      { name: "Plank Hold", sets: 4, reps: "60 sec", rest: "30 sec" },
    ],
    tips: [
      "Two weeks down!",
      "You're getting stronger",
      "Keep pushing"
    ]
  },

  // DAYS 15-21: Advanced Week 3
  {
    day: 15,
    title: "Next Level",
    focus: "Full Body Power",
    intensity: 7,
    duration: "45 min",
    exercises: [
      { name: "Warm-up", sets: 1, reps: "5 min", rest: "0 sec" },
      { name: "Push-ups", sets: 5, reps: "20", rest: "45 sec" },
      { name: "Bodyweight Squats", sets: 5, reps: "25", rest: "45 sec" },
      { name: "Diamond Push-ups", sets: 4, reps: "15", rest: "45 sec" },
      { name: "Jump Squats", sets: 4, reps: "20", rest: "45 sec" },
      { name: "Plank Hold", sets: 4, reps: "70 sec", rest: "30 sec" },
    ],
    tips: [
      "Push beyond limits",
      "Stay committed",
      "Level up every day"
    ]
  },
  {
    day: 16,
    title: "Core Crusher",
    focus: "Core Strength",
    intensity: 8,
    duration: "40 min",
    exercises: [
      { name: "Plank Hold", sets: 5, reps: "60 sec", rest: "30 sec" },
      { name: "Bicycle Crunches", sets: 5, reps: "50", rest: "45 sec" },
      { name: "Russian Twists", sets: 4, reps: "40", rest: "45 sec" },
      { name: "Leg Raises", sets: 4, reps: "20", rest: "45 sec" },
      { name: "Mountain Climbers", sets: 4, reps: "60", rest: "45 sec" },
      { name: "Superman Hold", sets: 4, reps: "45 sec", rest: "30 sec" },
    ],
    tips: [
      "Abs are made in the kitchen too",
      "Keep form strict",
      "Feel the burn"
    ]
  },
  {
    day: 17,
    title: "Upper Body Beast",
    focus: "Arms & Chest",
    intensity: 8,
    duration: "45 min",
    exercises: [
      { name: "Push-ups", sets: 5, reps: "25", rest: "45 sec" },
      { name: "Diamond Push-ups", sets: 5, reps: "18", rest: "45 sec" },
      { name: "Pike Push-ups", sets: 4, reps: "15", rest: "45 sec" },
      { name: "Tricep Dips", sets: 4, reps: "20", rest: "45 sec" },
      { name: "Wide Push-ups", sets: 4, reps: "20", rest: "45 sec" },
      { name: "Plank to Push-up", sets: 4, reps: "15", rest: "45 sec" },
    ],
    tips: [
      "Squeeze every rep",
      "Full range of motion",
      "Train like a beast"
    ]
  },
  {
    day: 18,
    title: "Lower Body Destroyer",
    focus: "Legs & Glutes",
    intensity: 8,
    duration: "45 min",
    exercises: [
      { name: "Bodyweight Squats", sets: 5, reps: "30", rest: "45 sec" },
      { name: "Jump Squats", sets: 5, reps: "20", rest: "45 sec" },
      { name: "Lunges", sets: 5, reps: "20 each leg", rest: "45 sec" },
      { name: "Pistol Squats", sets: 4, reps: "10 each leg", rest: "60 sec" },
      { name: "Wall Sit", sets: 4, reps: "60 sec", rest: "45 sec" },
      { name: "Calf Raises", sets: 5, reps: "40", rest: "30 sec" },
    ],
    tips: [
      "Feel the burn",
      "Squat deep",
      "Explode up"
    ]
  },
  {
    day: 19,
    title: "Active Recovery",
    focus: "Light Movement",
    intensity: 2,
    duration: "20 min",
    exercises: [
      { name: "Yoga Flow", sets: 1, reps: "15 min", rest: "0 sec" },
      { name: "Stretching", sets: 1, reps: "10 min", rest: "0 sec" },
    ],
    tips: [
      "Recover and rebuild",
      "Stretch everything",
      "Prepare for the push"
    ]
  },
  {
    day: 20,
    title: "Full Beast",
    focus: "Full Body HIIT",
    intensity: 9,
    duration: "50 min",
    exercises: [
      { name: "Burpees", sets: 5, reps: "20", rest: "45 sec" },
      { name: "Push-ups", sets: 5, reps: "25", rest: "45 sec" },
      { name: "Jump Squats", sets: 5, reps: "25", rest: "45 sec" },
      { name: "Mountain Climbers", sets: 5, reps: "60", rest: "45 sec" },
      { name: "Plank Hold", sets: 5, reps: "75 sec", rest: "30 sec" },
      { name: "Lunge Jumps", sets: 4, reps: "20 each leg", rest: "45 sec" },
    ],
    tips: [
      "Leave it all on the floor",
      "No quitting",
      "Be unstoppable"
    ]
  },
  {
    day: 21,
    title: "Week Three Complete",
    focus: "Full Body Challenge",
    intensity: 9,
    duration: "50 min",
    exercises: [
      { name: "Warm-up", sets: 1, reps: "5 min", rest: "0 sec" },
      { name: "Burpees", sets: 5, reps: "20", rest: "45 sec" },
      { name: "Push-ups", sets: 5, reps: "30", rest: "45 sec" },
      { name: "Bodyweight Squats", sets: 5, reps: "30", rest: "45 sec" },
      { name: "Diamond Push-ups", sets: 4, reps: "20", rest: "45 sec" },
      { name: "Plank Hold", sets: 5, reps: "80 sec", rest: "30 sec" },
    ],
    tips: [
      "Three weeks strong!",
      "You're a machine now",
      "Final week coming"
    ]
  },

  // DAYS 22-28: Beast Mode Week 4
  {
    day: 22,
    title: "Unstoppable",
    focus: "Full Body Power",
    intensity: 9,
    duration: "50 min",
    exercises: [
      { name: "Warm-up", sets: 1, reps: "5 min", rest: "0 sec" },
      { name: "Push-ups", sets: 5, reps: "30", rest: "45 sec" },
      { name: "Bodyweight Squats", sets: 5, reps: "35", rest: "45 sec" },
      { name: "Burpees", sets: 5, reps: "25", rest: "45 sec" },
      { name: "Plank Hold", sets: 5, reps: "90 sec", rest: "30 sec" },
      { name: "Jump Squats", sets: 5, reps: "25", rest: "45 sec" },
    ],
    tips: [
      "Push your limits",
      "You're almost there",
      "Stay beast mode"
    ]
  },
  {
    day: 23,
    title: "Core Destroyer",
    focus: "Abs & Core",
    intensity: 9,
    duration: "45 min",
    exercises: [
      { name: "Plank Hold", sets: 5, reps: "90 sec", rest: "30 sec" },
      { name: "Bicycle Crunches", sets: 5, reps: "60", rest: "45 sec" },
      { name: "Russian Twists", sets: 5, reps: "50", rest: "45 sec" },
      { name: "Leg Raises", sets: 5, reps: "30", rest: "45 sec" },
      { name: "Mountain Climbers", sets: 5, reps: "80", rest: "45 sec" },
      { name: "V-ups", sets: 4, reps: "20", rest: "45 sec" },
    ],
    tips: [
      "Abs on fire!",
      "Don't stop",
      "Feel every rep"
    ]
  },
  {
    day: 24,
    title: "Upper Body King",
    focus: "Chest, Arms, Shoulders",
    intensity: 9,
    duration: "50 min",
    exercises: [
      { name: "Push-ups", sets: 6, reps: "30", rest: "45 sec" },
      { name: "Diamond Push-ups", sets: 5, reps: "20", rest: "45 sec" },
      { name: "Pike Push-ups", sets: 5, reps: "18", rest: "45 sec" },
      { name: "Wide Push-ups", sets: 5, reps: "25", rest: "45 sec" },
      { name: "Tricep Dips", sets: 5, reps: "25", rest: "45 sec" },
      { name: "Plank to Push-up", sets: 5, reps: "20", rest: "45 sec" },
    ],
    tips: [
      "Build that upper body",
      "Squeeze hard",
      "Be the king"
    ]
  },
  {
    day: 25,
    title: "Lower Body Legend",
    focus: "Legs & Glutes",
    intensity: 10,
    duration: "50 min",
    exercises: [
      { name: "Bodyweight Squats", sets: 6, reps: "35", rest: "45 sec" },
      { name: "Jump Squats", sets: 5, reps: "25", rest: "45 sec" },
      { name: "Lunges", sets: 5, reps: "25 each leg", rest: "45 sec" },
      { name: "Pistol Squats", sets: 5, reps: "12 each leg", rest: "60 sec" },
      { name: "Wall Sit", sets: 5, reps: "60 sec", rest: "45 sec" },
      { name: "Calf Raises", sets: 5, reps: "50", rest: "30 sec" },
    ],
    tips: [
      "Legs of steel",
      "Push to the max",
      "Be a legend"
    ]
  },
  {
    day: 26,
    title: "Active Recovery",
    focus: "Rest & Recovery",
    intensity: 2,
    duration: "20 min",
    exercises: [
      { name: "Light Yoga", sets: 1, reps: "15 min", rest: "0 sec" },
      { name: "Full Body Stretch", sets: 1, reps: "10 min", rest: "0 sec" },
    ],
    tips: [
      "Recover for the finale",
      "Rest is important too",
      "Almost at the end"
    ]
  },
  {
    day: 27,
    title: "Final Challenge",
    focus: "Full Body Beast",
    intensity: 10,
    duration: "55 min",
    exercises: [
      { name: "Burpees", sets: 6, reps: "25", rest: "45 sec" },
      { name: "Push-ups", sets: 6, reps: "35", rest: "45 sec" },
      { name: "Jump Squats", sets: 6, reps: "30", rest: "45 sec" },
      { name: "Mountain Climbers", sets: 5, reps: "80", rest: "45 sec" },
      { name: "Plank Hold", sets: 5, reps: "90 sec", rest: "30 sec" },
      { name: "Diamond Push-ups", sets: 5, reps: "25", rest: "45 sec" },
    ],
    tips: [
      "This is the final push",
      "Leave everything out there",
      "Be a beast"
    ]
  },
  {
    day: 28,
    title: "The Gauntlet",
    focus: "Full Body Endurance",
    intensity: 10,
    duration: "55 min",
    exercises: [
      { name: "Warm-up", sets: 1, reps: "5 min", rest: "0 sec" },
      { name: "Burpees", sets: 6, reps: "30", rest: "45 sec" },
      { name: "Push-ups", sets: 6, reps: "35", rest: "45 sec" },
      { name: "Bodyweight Squats", sets: 6, reps: "40", rest: "45 sec" },
      { name: "Plank Hold", sets: 6, reps: "90 sec", rest: "30 sec" },
      { name: "Lunge Jumps", sets: 5, reps: "25 each leg", rest: "45 sec" },
    ],
    tips: [
      "Four weeks strong!",
      "Final days ahead",
      "You're unstoppable"
    ]
  },

  // DAYS 29-30: FINALE
  {
    day: 29,
    title: "Final Countdown",
    focus: "Full Body Power",
    intensity: 10,
    duration: "55 min",
    exercises: [
      { name: "Warm-up", sets: 1, reps: "5 min", rest: "0 sec" },
      { name: "Push-ups", sets: 6, reps: "40", rest: "45 sec" },
      { name: "Bodyweight Squats", sets: 6, reps: "40", rest: "45 sec" },
      { name: "Burpees", sets: 6, reps: "30", rest: "45 sec" },
      { name: "Diamond Push-ups", sets: 5, reps: "25", rest: "45 sec" },
      { name: "Jump Squats", sets: 5, reps: "30", rest: "45 sec" },
      { name: "Plank Hold", sets: 6, reps: "90 sec", rest: "30 sec" },
    ],
    tips: [
      "One more day!",
      "Give everything",
      "Tomorrow is the day!"
    ]
  },
  {
    day: 30,
    title: "SOLO LEVELING COMPLETE!",
    focus: "Ultimate Challenge",
    intensity: 10,
    duration: "60 min",
    exercises: [
      { name: "Warm-up", sets: 1, reps: "5 min", rest: "0 sec" },
      { name: "Push-ups", sets: 7, reps: "40", rest: "45 sec" },
      { name: "Bodyweight Squats", sets: 7, reps: "40", rest: "45 sec" },
      { name: "Burpees", sets: 6, reps: "30", rest: "45 sec" },
      { name: "Diamond Push-ups", sets: 6, reps: "30", rest: "45 sec" },
      { name: "Jump Squats", sets: 6, reps: "30", rest: "45 sec" },
      { name: "Plank Hold", sets: 6, reps: "100 sec", rest: "30 sec" },
      { name: "Mountain Climbers", sets: 5, reps: "100", rest: "45 sec" },
    ],
    tips: [
      "🎉 CONGRATULATIONS! 🎉",
      "You completed the 30-day journey!",
      "You're now a new person!",
      "Keep pushing forward!",
      "This is just the beginning!"
    ]
  }
];
