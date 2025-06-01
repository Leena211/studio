import { TopicCard } from '@/components/topics/TopicCard';
import { topics } from '@/lib/mockData';
import { Separator } from '@/components/ui/separator';

export default function TopicsPage() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          Explore Financial Topics
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Browse our library of financial literacy topics designed to help you build a strong financial foundation.
        </p>
      </div>
      <Separator className="my-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
}
