import { InterestRateCalculator } from '@/components/calculators/InterestRateCalculator';
import { Separator } from '@/components/ui/separator';

export default function CalculatorsPage() {
  return (
    <div className="container mx-auto max-w-screen-md px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          Financial Calculators
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Use these simple tools to understand financial concepts better. More calculators coming soon!
        </p>
      </div>
      <Separator className="my-8" />
      <div className="mt-8 flex justify-center">
        <InterestRateCalculator />
      </div>
    </div>
  );
}
