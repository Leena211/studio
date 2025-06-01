import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
              Welcome to <span className="text-primary">FinLit Teens</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0">
              Your journey to financial freedom starts here. Empower yourself with the knowledge to make smart money decisions for a brighter future.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/topics">
                  Explore Topics <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-shadow">
                <Link href="/ai-financial-guide">
                  Ask AI Guide
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative order-first md:order-last">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Financial literacy concept illustration"
              data-ai-hint="financial education students"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl mx-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
