import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Topic, LucideIcon } from '@/lib/types';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface TopicCardProps {
  topic: Topic;
}

const IconMap: Record<string, LucideIcon> = LucideIcons as any;


export function TopicCard({ topic }: TopicCardProps) {
  const IconComponent = topic.iconName ? IconMap[topic.iconName] || LucideIcons.BookOpen : LucideIcons.BookOpen;

  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
      <CardHeader className="bg-muted/30 p-6">
        <div className="flex items-center space-x-4">
          <div className={`p-3 rounded-lg bg-primary/10 ${topic.color || 'text-primary'}`}>
            <IconComponent className="h-8 w-8" />
          </div>
          <CardTitle className="font-headline text-xl">{topic.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6 flex flex-col">
        <CardDescription className="text-base text-muted-foreground mb-4 flex-grow">
          {topic.description}
        </CardDescription>
        <Button asChild variant="outline" className="mt-auto w-full group hover:bg-primary hover:text-primary-foreground transition-colors">
          <Link href={`/topics/${topic.id}`}>
            Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
