import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TopicCard } from '@/components/topics/TopicCard';
import { topics as allTopics } from '@/lib/mockData'; // Assuming mockData is set up
import { ArrowRight } from 'lucide-react';

export function TopicsShowcase() {
  // Show a selection of topics, e.g., the first 3-4
  const featuredTopics = allTopics.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Featured Learning Topics
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into key financial concepts tailored for teens.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {featuredTopics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
        {allTopics.length > featuredTopics.length && (
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="text-lg">
              <Link href="/topics">
                View All Topics <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
