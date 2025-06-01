
import Image from 'next/image';
import { mockUser, topics } from '@/lib/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Award, Activity as ActivityIcon, CalendarDays, Mail, User, BarChart3, CheckCircle, ListChecks, Flame } from 'lucide-react';
import { format, formatDistanceToNow } from 'date-fns';
import * as LucideIcons from 'lucide-react';
import type { LucideIcon } from '@/lib/types';
import { cn } from '@/lib/utils';

const IconMap: Record<string, LucideIcon> = LucideIcons as any;

const BadgeIcon = ({ iconName, color }: { iconName: string; color?: string }) => {
  const IconComponent = IconMap[iconName] || Award;
  return <IconComponent className={cn("h-6 w-6", color || 'text-foreground')} />;
};

const ActivityTypeIcon = ({ type }: mockUser['activity'][0]['type'] | 'streak_updated') => {
  switch (type) {
    case 'quiz_taken': return <ListChecks className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />;
    case 'topic_completed': return <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />;
    case 'badge_earned': return <Award className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />;
    case 'account_created': return <User className="h-5 w-5 text-primary mr-3 flex-shrink-0" />;
    case 'streak_updated': return <Flame className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />;
    default: return <ActivityIcon className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />;
  }
}

export default function ProfilePage() {
  const { name, username, email, avatarUrl, joinDate, badges, activity, progress, currentStreak, longestStreak } = mockUser;
  const completedTopicsCount = progress.completedTopicIds.length;
  const totalTopicsCount = topics.length;
  const learningProgressPercentage = totalTopicsCount > 0 ? (completedTopicsCount / totalTopicsCount) * 100 : 0;

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  }

  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-8 sm:px-6 lg:px-8">
      {/* User Info Header */}
      <Card className="mb-8 shadow-xl rounded-xl overflow-hidden">
        <CardHeader className="bg-gradient-to-br from-primary/10 via-background to-background p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6">
          <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-4 border-primary/50 shadow-md">
            <AvatarImage src={avatarUrl} alt={name} data-ai-hint="user avatar cartoon" />
            <AvatarFallback className="text-4xl bg-primary/20 text-primary font-semibold">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle className="font-headline text-3xl sm:text-4xl text-foreground">{name}</CardTitle>
            {username && <CardDescription className="text-lg text-muted-foreground mt-1">@{username}</CardDescription>}
            <div className="mt-3 flex flex-col sm:flex-row sm:items-center flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
              {email && (
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-1.5" /> {email}
                </div>
              )}
              <div className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-1.5" /> Joined {formatDistanceToNow(new Date(joinDate), { addSuffix: true })}
              </div>
              {currentStreak !== undefined && (
                <div className="flex items-center" title={`Longest Streak: ${longestStreak || 0} days`}>
                  <Flame className="h-4 w-4 mr-1.5 text-orange-500" /> {currentStreak} day streak
                </div>
              )}
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column / Main Column on Mobile */}
        <div className="md:col-span-2 space-y-8">
          {/* Learning Progress */}
          <Card className="shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center">
                <BarChart3 className="mr-3 h-6 w-6 text-primary" />
                Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-muted-foreground mb-1">
                  <span>Topics Completed</span>
                  <span>{completedTopicsCount} / {totalTopicsCount}</span>
                </div>
                <Progress value={learningProgressPercentage} aria-label={`${learningProgressPercentage.toFixed(0)}% topics completed`} />
              </div>
              {progress.averageQuizScore !== undefined && (
                 <p className="text-sm text-muted-foreground">
                    Average Quiz Score: <span className="font-semibold text-primary">{progress.averageQuizScore.toFixed(0)}%</span>
                 </p>
              )}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card id="activity" className="shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center">
                <ActivityIcon className="mr-3 h-6 w-6 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              {activity.length > 0 ? (
                <ul className="space-y-4 max-h-96 overflow-y-auto pr-2">
                  {activity.map((act) => (
                    <li key={act.id} className="flex items-start pb-4 border-b border-border last:border-b-0">
                      <ActivityTypeIcon type={act.type as any} />
                      <div className="flex-grow">
                        <p className="font-medium text-foreground">{act.title}</p>
                        {act.details && <p className="text-sm text-muted-foreground">{act.details}</p>}
                      </div>
                      <p className="text-xs text-muted-foreground whitespace-nowrap ml-2 pt-1">
                        {formatDistanceToNow(new Date(act.date), { addSuffix: true })}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">No activity to display yet.</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column / Badges */}
        <div className="space-y-8">
          <Card className="shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center">
                <Award className="mr-3 h-6 w-6 text-primary" />
                Badges
              </CardTitle>
            </CardHeader>
            <CardContent>
              {badges.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-4">
                  {badges.map((badge) => (
                    <div 
                      key={badge.id} 
                      className="group flex flex-col items-center text-center p-3 bg-secondary/50 rounded-lg hover:shadow-md transition-shadow" 
                      title={`${badge.name} - Earned ${formatDistanceToNow(new Date(badge.dateEarned), { addSuffix: true })}`}
                    >
                      <div className={cn(
                        "p-3 rounded-full mb-2 bg-primary/10 group-hover:scale-110 transition-transform duration-200 ease-in-out", 
                        badge.color?.replace('text-', 'bg-') + '/20' // Ensure a bit more vibrant bg for colored badges
                       )}>
                         <BadgeIcon iconName={badge.iconName} color={badge.color} />
                      </div>
                      <p className="text-sm font-medium text-foreground">{badge.name}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No badges earned yet. Keep learning!</p>
              )}
            </CardContent>
          </Card>

           {progress.quizAttempts.length > 0 && (
            <Card className="shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center">
                  <ListChecks className="mr-3 h-6 w-6 text-primary" />
                  Quiz Attempts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 max-h-72 overflow-y-auto pr-2">
                  {progress.quizAttempts.map((attempt, index) => (
                    <li key={index} className="text-sm p-3 border rounded-md bg-muted/30">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{attempt.topicTitle}</span>
                        <span className={`font-semibold ${attempt.score / attempt.totalQuestions >= 0.7 ? 'text-green-500' : 'text-red-500'}`}>
                          {attempt.score}/{attempt.totalQuestions}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {format(new Date(attempt.dateTaken), "MMM d, yyyy")}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
           )}
        </div>
      </div>
    </div>
  );
}
