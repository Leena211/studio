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

export interface UserBadge {
  id: string;
  name: string;
  iconName: string; // Lucide icon name
  color?: string; // Tailwind color class for the icon
  dateEarned: string; // ISO date string
}

export interface UserActivity {
  id: string;
  type: 'topic_completed' | 'quiz_taken' | 'badge_earned' | 'account_created';
  title: string;
  date: string; // ISO date string
  details?: string; // e.g., "Score: 80%" or "Earned 'Budgeting Pro'"
}

export interface UserProgress {
  completedTopicIds: string[]; // Array of topic IDs
  // quizScores: Record<string, { score: number; totalQuestions: number; dateTaken: string }>; // topicId -> score details
  quizAttempts: Array<{
    quizId: string; // Corresponds to topicId for simplicity
    topicTitle: string;
    score: number;
    totalQuestions: number;
    dateTaken: string; // ISO date string
  }>;
  averageQuizScore?: number; // Optional, can be calculated
}

export interface UserProfile {
  id: string;
  name: string;
  username?: string;
  email?: string;
  avatarUrl?: string; // URL to an avatar image
  joinDate: string; // ISO date string
  badges: UserBadge[];
  activity: UserActivity[];
  progress: UserProgress;
}
