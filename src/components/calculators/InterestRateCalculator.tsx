"use client";

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CalculatorIcon, TrendingUp } from 'lucide-react';

export function InterestRateCalculator() {
  const [principal, setPrincipal] = useState<string>('');
  const [rate, setRate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [simpleInterest, setSimpleInterest] = useState<number | null>(null);
  const [totalAmount, setTotalAmount] = useState<number | null>(null);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and a single decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      setter(value);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100; // Convert percentage to decimal
    const t = parseFloat(time);

    if (isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || r < 0 || t <= 0) {
      alert('Please enter valid positive numbers for all fields.');
      setSimpleInterest(null);
      setTotalAmount(null);
      return;
    }

    const si = p * r * t;
    setSimpleInterest(si);
    setTotalAmount(p + si);
  };

  const handleReset = () => {
    setPrincipal('');
    setRate('');
    setTime('');
    setSimpleInterest(null);
    setTotalAmount(null);
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl rounded-xl">
      <CardHeader className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
          <CalculatorIcon className="h-6 w-6" />
        </div>
        <CardTitle className="font-headline text-2xl sm:text-3xl">Simple Interest Calculator</CardTitle>
        <CardDescription className="text-base">Calculate simple interest and the total amount.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="principal" className="text-base">Principal Amount (₹)</Label>
            <Input
              id="principal"
              type="text"
              value={principal}
              onChange={handleInputChange(setPrincipal)}
              placeholder="e.g., 10000"
              required
              className="text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rate" className="text-base">Annual Interest Rate (%)</Label>
            <Input
              id="rate"
              type="text"
              value={rate}
              onChange={handleInputChange(setRate)}
              placeholder="e.g., 5"
              required
              className="text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="time" className="text-base">Time Period (Years)</Label>
            <Input
              id="time"
              type="text"
              value={time}
              onChange={handleInputChange(setTime)}
              placeholder="e.g., 2"
              required
              className="text-base"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button type="submit" className="flex-1 text-lg py-3">Calculate</Button>
            <Button type="button" variant="outline" onClick={handleReset} className="flex-1 text-lg py-3">Reset</Button>
          </div>
        </form>
      </CardContent>
      {simpleInterest !== null && totalAmount !== null && (
        <CardFooter className="flex flex-col items-start space-y-4 pt-6 border-t mt-6">
            <div className="flex items-center text-lg w-full">
                <TrendingUp className="h-6 w-6 text-green-500 mr-3" />
                <span className="font-medium text-foreground">Simple Interest:</span>
                <span className="ml-auto font-semibold text-primary">₹{simpleInterest.toFixed(2)}</span>
            </div>
            <div className="flex items-center text-lg w-full">
                <DollarSignEmoji className="h-6 w-6 text-green-500 mr-3" />
                <span className="font-medium text-foreground">Total Amount:</span>
                <span className="ml-auto font-semibold text-primary">₹{totalAmount.toFixed(2)}</span>
            </div>
        </CardFooter>
      )}
    </Card>
  );
}

// Simple SVG for Dollar Sign as Lucide doesn't have a standalone one in this context
const DollarSignEmoji = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

