import type { LucideProps } from 'lucide-react';
import type React from 'react';

// A more flexible way to define LucideIcon type
export type LucideIcon = React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

export interface Topic {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  examples?: string[];
  tips?: string[];
  iconName?: string; // Name of the Lucide icon, e.g., 'PiggyBank'
  color?: string; // Tailwind text color class, e.g., 'text-green-500'
}

export interface QuizQuestion {
  id: string;
  questionText: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface Quiz {
  topicId: string;
  questions: QuizQuestion[];
}

export interface UserProgress {
  userId: string;
  completedTopics: string[];
  quizScores: Record<string, { score: number; total: number }>;
}
