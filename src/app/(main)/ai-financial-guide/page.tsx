"use client";

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Bot, CheckCircle, Loader2 } from 'lucide-react';
import { explainFinancialConcept, type ExplainFinancialConceptOutput } from '@/ai/flows/financial-explanation';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

export default function AIFinancialGuidePage() {
  const [concept, setConcept] = useState<string>('');
  const [explanation, setExplanation] = useState<ExplainFinancialConceptOutput | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!concept.trim()) {
      setError('Please enter a financial concept to explain.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setExplanation(null);

    try {
      const result = await explainFinancialConcept({ concept });
      setExplanation(result);
      toast({
        title: "Explanation Generated!",
        description: "The AI has provided an explanation for your concept.",
        action: <CheckCircle className="h-5 w-5 text-green-500" />,
      });
    } catch (err) {
      console.error("Error explaining financial concept:", err);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setError(`Failed to get explanation: ${errorMessage}`);
      toast({
        title: "Error",
        description: `Could not generate explanation: ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-screen-md px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-8 md:mb-12">
         <Sparkles className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          AI Financial Guide
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Confused about a financial term? Ask our AI guide for a simple explanation with relatable examples.
        </p>
      </div>

      <Card className="w-full shadow-xl rounded-xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Ask a Question</CardTitle>
          <CardDescription>Enter a financial concept (e.g., "compound interest", "ETFs", "credit score") below.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="financial-concept" className="text-base font-medium">
                Financial Concept
              </Label>
              <Textarea
                id="financial-concept"
                value={concept}
                onChange={(e) => setConcept(e.target.value)}
                placeholder="Type your financial question or concept here..."
                rows={4}
                className="mt-2 text-base"
                required
              />
            </div>
            <Button type="submit" disabled={isLoading} className="w-full text-lg py-3">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Explain Concept
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive" className="mt-8">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {explanation && (
        <Card className="mt-8 shadow-lg rounded-xl">
          <CardHeader className="bg-primary/5">
             <div className="flex items-center space-x-3">
                <Bot className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-2xl text-primary">AI Explanation</CardTitle>
             </div>
          </CardHeader>
          <CardContent className="pt-6">
            <h3 className="font-semibold text-xl text-foreground mb-2">Concept: {concept}</h3>
            <div className="prose prose-lg max-w-none text-foreground/90 whitespace-pre-wrap leading-relaxed">
              {explanation.explanation}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
