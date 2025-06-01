import type { Topic, LucideIcon } from '@/lib/types';
import * as LucideIcons from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface TopicDetailProps {
  topic: Topic;
}

const IconMap: Record<string, LucideIcon> = LucideIcons as any;

export function TopicDetail({ topic }: TopicDetailProps) {
  const IconComponent = topic.iconName ? IconMap[topic.iconName] || LucideIcons.BookOpen : LucideIcons.BookOpen;

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden shadow-xl rounded-xl">
        <CardHeader className={`p-8 bg-gradient-to-br ${topic.color ? `from-${topic.color.split('-')[1]}-500/20 to-${topic.color.split('-')[1]}-500/5` : 'from-primary/20 to-primary/5'}`}>
          <div className="flex items-center space-x-4">
            <div className={`p-4 rounded-lg ${topic.color ? `bg-${topic.color.split('-')[1]}-100 ${topic.color}` : 'bg-primary/10 text-primary'}`}>
              <IconComponent className="h-10 w-10" />
            </div>
            <CardTitle className="font-headline text-3xl md:text-4xl text-foreground">{topic.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-8 text-lg text-foreground/90 leading-relaxed">
          {topic.longDescription || topic.description}
        </CardContent>
      </Card>

      {topic.examples && topic.examples.length > 0 && (
        <Card className="shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-foreground">Real-World Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {topic.examples.map((example, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-foreground/80">{example}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {topic.tips && topic.tips.length > 0 && (
        <Card className="shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-foreground">Quick Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {topic.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <LucideIcons.Lightbulb className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-foreground/80">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
