import type { QuizQuestion } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import { Check, X, Award, Repeat, BookOpen } from 'lucide-react';

interface QuizScoreProps {
  score: number;
  totalQuestions: number;
  topicId: string;
  topicTitle: string;
  questions: QuizQuestion[];
  userAnswers: Record<string, string>;
  onRetake: () => void;
}

export function QuizScore({ score, totalQuestions, topicId, topicTitle, questions, userAnswers, onRetake }: QuizScoreProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  let message = '';
  let messageColor = '';

  if (percentage >= 80) {
    message = 'Excellent Work!';
    messageColor = 'text-green-500';
  } else if (percentage >= 60) {
    message = 'Good Job!';
    messageColor = 'text-yellow-500';
  } else {
    message = 'Keep Practicing!';
    messageColor = 'text-red-500';
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl rounded-xl">
      <CardHeader className="text-center items-center">
        <Award className={`h-16 w-16 mb-4 ${messageColor}`} />
        <CardTitle className="font-headline text-3xl sm:text-4xl">{message}</CardTitle>
        <CardDescription className="text-xl mt-2">
          You scored <span className={`font-bold ${messageColor}`}>{score}</span> out of <span className="font-bold">{totalQuestions}</span> ({percentage}%)
        </CardDescription>
        <p className="text-muted-foreground mt-1">Quiz on: {topicTitle}</p>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold">Review Your Answers</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-4 mt-4">
                {questions.map((q, index) => (
                  <li key={q.id} className="p-4 border rounded-lg">
                    <p className="font-semibold text-foreground">{index + 1}. {q.questionText}</p>
                    <p className={`mt-1 text-sm ${userAnswers[q.id] === q.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                      Your answer: {userAnswers[q.id] || 'Not answered'}
                      {userAnswers[q.id] === q.correctAnswer ? <Check className="inline ml-1 h-4 w-4" /> : <X className="inline ml-1 h-4 w-4" />}
                    </p>
                    {userAnswers[q.id] !== q.correctAnswer && (
                       <p className="mt-1 text-sm text-green-700">Correct answer: {q.correctAnswer}</p>
                    )}
                    {q.explanation && <p className="mt-1 text-xs text-muted-foreground italic">Explanation: {q.explanation}</p>}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-center gap-4 pt-6 border-t">
        <Button onClick={onRetake} variant="outline" size="lg">
          <Repeat className="mr-2 h-5 w-5" /> Retake Quiz
        </Button>
        <Button asChild size="lg">
          <Link href="/topics">
            <BookOpen className="mr-2 h-5 w-5" /> Explore More Topics
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
