import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, ListChecks, Target, TrendingUp } from 'lucide-react';
import { topics } from '@/lib/mockData'; // For total topics count

// Mock data - replace with actual user data fetching later
const userProgressData = {
  name: "Teen Investor",
  completedTopics: 2,
  totalTopics: topics.length,
  averageQuizScore: 75, // Percentage
  recentActivity: [
    { type: "quiz", title: "Budgeting Basics Quiz", score: "80%", date: "2 days ago" },
    { type: "topic", title: "Completed: Student Loans", date: "3 days ago" },
  ],
  badges: [
    { name: "Budgeting Pro", icon: <Target className="h-5 w-5 text-green-500" /> },
    { name: "Quiz Whiz", icon: <ListChecks className="h-5 w-5 text-blue-500" /> },
  ]
};

export default function DashboardPage() {
  const { name, completedTopics, totalTopics, averageQuizScore, recentActivity, badges } = userProgressData;
  const topicsProgress = totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0;

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
            <CardTitle className="font-headline text-4xl">{averageQuizScore}%</CardTitle>
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
          <CardContent className="flex space-x-2">
            {badges.map(badge => (
              <span key={badge.name} title={badge.name} className="p-2 bg-secondary rounded-full">{badge.icon}</span>
            ))}
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
                {recentActivity.map((activity, index) => (
                  <li key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-md">
                    <div>
                      <p className="font-medium text-foreground">{activity.title}</p>
                      {activity.type === "quiz" && <p className="text-sm text-primary">Score: {activity.score}</p>}
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.date}</p>
                  </li>
                ))}
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
                <CheckCircle className="h-5 w-5 text-primary mr-2" /> 
                <span className="text-foreground">Explore "Investing Basics" topic.</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" /> 
                <span className="text-foreground">Try the "Compound Interest Calculator".</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-2" /> 
                <span className="text-foreground">Review your notes on "Budgeting".</span>
              </li>
            </ul>
             <p className="text-sm text-muted-foreground mt-4">This section will be personalized based on your progress soon!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
