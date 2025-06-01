import { topics } from '@/lib/mockData';
import { TopicDetail } from '@/components/topics/TopicDetail';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, FileQuestion } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface TopicPageParams {
  params: {
    topicId: string;
  };
}

// This function can be used for generateStaticParams if using SSG for topics
export async function generateStaticParams() {
  return topics.map((topic) => ({
    topicId: topic.id,
  }));
}

export default function TopicPage({ params }: TopicPageParams) {
  const topic = topics.find((t) => t.id === params.topicId);

  if (!topic) {
    return (
      <div className="container mx-auto max-w-screen-md px-4 py-12 text-center">
        <h1 className="font-headline text-3xl font-bold">Topic Not Found</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Sorry, we couldn't find the topic you were looking for.
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
    <div className="container mx-auto max-w-screen-lg px-4 py-8 sm:px-6 lg:px-8">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/topics">
          <ArrowLeft className="mr-2 h-4 w-4" /> All Topics
        </Link>
      </Button>
      
      <TopicDetail topic={topic} />

      <Separator className="my-12" />

      <div className="text-center p-6 bg-secondary/30 rounded-xl shadow-md">
        <h2 className="font-headline text-2xl sm:text-3xl font-semibold text-foreground mb-4">
          Ready to test your knowledge?
        </h2>
        <p className="text-muted-foreground mb-6">
          Take a short quiz on "{topic.title}" to see what you've learned!
        </p>
        <Button asChild size="lg" className="text-lg">
          <Link href={`/quizzes/${topic.id}`}>
            <FileQuestion className="mr-2 h-5 w-5" /> Take Quiz
          </Link>
        </Button>
      </div>
    </div>
  );
}
