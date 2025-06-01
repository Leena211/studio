"use client";

import type { QuizQuestion } from '@/lib/types';
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

interface QuizFormProps {
  topicTitle: string;
  questions: QuizQuestion[];
  onSubmit: (score: number, totalQuestions: number, answers: Record<string, string>) => void;
}

export function QuizForm({ topicTitle, questions, onSubmit }: QuizFormProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerChange = (questionId: string, answer: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let score = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    onSubmit(score, totalQuestions, selectedAnswers);
  };

  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl rounded-xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl sm:text-3xl text-center">Quiz: {topicTitle}</CardTitle>
        <CardDescription className="text-center text-base">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </CardDescription>
        <Progress value={progressPercentage} className="w-full mt-2" />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">{currentQuestion.questionText}</h3>
            <RadioGroup
              value={selectedAnswers[currentQuestion.id] || ''}
              onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
              className="space-y-3"
            >
              {currentQuestion.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value={option} id={`${currentQuestion.id}-option-${index}`} />
                  <Label htmlFor={`${currentQuestion.id}-option-${index}`} className="text-base font-normal cursor-pointer flex-1">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between pt-6 border-t">
        <Button variant="outline" onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        {currentQuestionIndex < totalQuestions - 1 ? (
          <Button onClick={handleNext}>
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={handleSubmit} disabled={Object.keys(selectedAnswers).length !== totalQuestions}>
            <CheckCircle className="mr-2 h-4 w-4" /> Submit Quiz
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
