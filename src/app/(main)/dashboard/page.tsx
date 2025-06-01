import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, ListChecks, Target, TrendingUp, Activity, Award, Flame } from 'lucide-react';
import { topics, mockUser } from '@/lib/mockData';
import type { UserBadge } from '@/lib/types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from '@/lib/types';
import { format, formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';

const IconMap: Record<string, LucideIcon> = LucideIcons as any;

export default function DashboardPage() {
  const { name, progress, activity, badges, currentStreak } = mockUser;
  const completedTopics = progress.completedTopicIds.length;
  const totalTopics = topics.length;
  const topicsProgress = totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0;

  const averageQuizScore = progress.averageQuizScore !== undefined 
    ? progress.averageQuizScore 
    : progress.quizAttempts.length > 0
      ? (progress.quizAttempts.reduce((sum, attempt) => sum + (attempt.score / attempt.totalQuestions), 0) / progress.quizAttempts.length) * 100
      : 0;
      
  const recentActivity = activity.slice(0, 3); // Show top 3 recent activities

  const BadgeIcon = ({ iconName, color }: { iconName: string; color?: string }) => {
    const IconComponent = IconMap[iconName] || Award;
    return <IconComponent className={cn("h-5 w-5", color || 'text-foreground')} />;
  };


  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 md:mb-12">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
          Welcome back, <span className="text-primary">{name}!</span>
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Here's an overview of your financial learning journey.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="shadow-lg rounded-xl">
          <CardHeader className="pb-2">
            <CardDescription className="text-base">Topics Completed</CardDescription>
            <CardTitle className="font-headline text-4xl">{completedTopics} / {totalTopics}</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={topicsProgress} aria-label={`${topicsProgress.toFixed(0)}% topics completed`} />
          </CardContent>
        </Card>
        <Card className="shadow-lg rounded-xl">
          <CardHeader className="pb-2">
            <CardDescription className="text-base">Average Quiz Score</CardDescription>
            <CardTitle className="font-headline text-4xl">{averageQuizScore.toFixed(0)}%</CardTitle>
          </CardHeader>
          <CardContent>
            <TrendingUp className="h-8 w-8 text-green-500" />
          </CardContent>
        </Card>
         <Card className="shadow-lg rounded-xl">
          <CardHeader className="pb-2">
            <CardDescription className="text-base">Badges Earned</CardDescription>
            <CardTitle className="font-headline text-4xl">{badges.length}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {badges.slice(0,3).map(badge => ( // Show up to 3-4 badges for space
              <span key={badge.id} title={`${badge.name} - Earned ${formatDistanceToNow(new Date(badge.dateEarned), { addSuffix: true })}`} className="p-2 bg-secondary rounded-full group cursor-pointer">
                <BadgeIcon iconName={badge.iconName} color={badge.color} />
              </span>
            ))}
             {badges.length > 3 && <span className="text-sm text-muted-foreground self-center">+{badges.length-3} more</span>}
          </CardContent>
        </Card>
        <Card className="shadow-lg rounded-xl">
          <CardHeader className="pb-2">
            <CardDescription className="text-base">Current Streak</CardDescription>
            <CardTitle className="font-headline text-4xl">{currentStreak || 0} <span className="text-2xl">days</span></CardTitle>
          </CardHeader>
          <CardContent>
            <Flame className={cn("h-8 w-8", currentStreak && currentStreak > 0 ? "text-orange-500" : "text-muted-foreground")} />
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8 md:my-12" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            {recentActivity.length > 0 ? (
              <ul className="space-y-4">
                {recentActivity.map((act) => (
                  <li key={act.id} className="flex items-start justify-between p-3 bg-muted/30 rounded-md">
                    <div className="flex items-center">
                       <Activity className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">{act.title}</p>
                        {act.details && <p className="text-sm text-muted-foreground">{act.details}</p>}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground whitespace-nowrap ml-2">
                      {formatDistanceToNow(new Date(act.date), { addSuffix: true })}
                    </p>
                  </li>
                ))}
                 {activity.length > 3 && (
                  <li className="pt-2 text-center">
                    <Button variant="link" asChild>
                      <Link href="/profile#activity">View all activity</Link>
                    </Button>
                  </li>
                )}
              </ul>
            ) : (
              <p className="text-muted-foreground">No recent activity to display.</p>
            )}
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Recommended Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" /> 
                <span className="text-foreground">Explore "ETFs Explained" topic.</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" /> 
                <span className="text-foreground">Try the "Simple Interest Calculator".</span>
              </li>
              {completedTopics < totalTopics && (
                <li className="flex items-center">
                   <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" /> 
                  <span className="text-foreground">
                    Continue learning from{" "}
                    <Link href="/topics" className="text-primary hover:underline">
                       available topics
                    </Link>.
                  </span>
                </li>
              )}
            </ul>
             <p className="text-sm text-muted-foreground mt-4">Personalized recommendations coming soon!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
