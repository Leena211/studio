"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { topics, quizzes } from '@/lib/mockData';
import type { Topic, Quiz, QuizQuestion } from '@/lib/types';
import { QuizForm } from '@/components/quizzes/QuizForm';
import { QuizScore } from '@/components/quizzes/QuizScore';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';

export default function QuizPage() {
  const params = useParams();
  const topicId = params.topicId as string;

  const [topic, setTopic] = useState<Topic | null>(null);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (topicId) {
      const currentTopic = topics.find((t) => t.id === topicId);
      const currentQuiz = quizzes.find((q) => q.topicId === topicId);
      
      setTopic(currentTopic || null);
      setQuiz(currentQuiz || null);
      setIsLoading(false);
    }
  }, [topicId]);

  const handleQuizSubmit = (calculatedScore: number, totalQuestions: number, answers: Record<string, string>) => {
    setScore(calculatedScore);
    setUserAnswers(answers);
    setShowScore(true);
  };

  const handleRetakeQuiz = () => {
    setShowScore(false);
    setScore(0);
    setUserAnswers({});
    // Reset QuizForm state if needed, though internal state management should handle it
  };

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-screen-md px-4 py-12 text-center flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
        <p className="text-lg text-muted-foreground">Loading quiz...</p>
      </div>
    );
  }

  if (!topic || !quiz || quiz.questions.length === 0) {
    return (
      <div className="container mx-auto max-w-screen-md px-4 py-12 text-center">
        <h1 className="font-headline text-3xl font-bold">Quiz Not Available</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Sorry, a quiz for this topic is not currently available or the topic was not found.
        </p>
        <Button asChild className="mt-8">
          <Link href="/topics">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Topics
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-screen-md px-4 py-8 sm:px-6 lg:px-8">
       <Button asChild variant="outline" className="mb-8">
        <Link href={`/topics/${topicId}`}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to {topic.title}
        </Link>
      </Button>
      
      {showScore ? (
        <QuizScore
          score={score}
          totalQuestions={quiz.questions.length}
          topicId={topic.id}
          topicTitle={topic.title}
          questions={quiz.questions}
          userAnswers={userAnswers}
          onRetake={handleRetakeQuiz}
        />
      ) : (
        <QuizForm
          topicTitle={topic.title}
          questions={quiz.questions}
          onSubmit={handleQuizSubmit}
        />
      )}
    </div>
  );
}
