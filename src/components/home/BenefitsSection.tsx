import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Brain, ShieldCheck, TrendingUpIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: Brain,
    title: 'Make Smart Decisions',
    description: 'Understand money to make informed choices about spending, saving, and investing.',
  },
  {
    icon: TrendingUpIcon,
    title: 'Plan Your Future',
    description: 'Set financial goals and learn how to achieve them, from college to your first car.',
  },
  {
    icon: ShieldCheck,
    title: 'Avoid Debt Traps',
    description: 'Learn about loans, credit, and interest to manage debt wisely and avoid pitfalls.',
  },
  {
    icon: DollarSign,
    title: 'Build Wealth',
    description: 'Discover the basics of investing and how to make your money work for you.',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Why Financial Literacy Matters
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Equipping yourself with financial knowledge empowers you for a lifetime of success.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
              <CardHeader className="items-center pb-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-3">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-xl text-center">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
