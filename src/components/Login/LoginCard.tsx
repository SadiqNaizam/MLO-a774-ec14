import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSubmit = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsLoading(true);
      console.log('Login Credentials:', { username, password });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsLoading(false);
      // In a real application, you would handle success/error states here,
      // potentially navigate the user, or show a toast notification.
      // For this example, we'll just use an alert.
      alert(`Simulated login successful for user: ${username}`);
      // Optionally, clear form fields after submission
      // setUsername('');
      // setPassword('');
    },
    [username, password]
  );

  return (
    <Card className={cn('w-[300px] rounded-lg shadow-md bg-card text-card-foreground', className)}>
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          {/* Heading */}
          <h2 className="text-center text-2xl font-bold text-card-foreground">
            Log in
          </h2>

          {/* Form for Inputs and Button */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* InputUsername */}
            <div>
              <Input
                id="username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={isLoading}
                required
                aria-label="Username"
              />
            </div>

            {/* InputPassword */}
            <div>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
                aria-label="Password"
              />
            </div>

            {/* LoginButton */}
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring focus-visible:ring-offset-2"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Log in'}
            </Button>
          </form>

          {/* SignUpLink */}
          <p className="text-center text-sm text-muted-foreground">
            or,{' '}
            <a
              href="#" // In a real app, replace with actual sign-up route, e.g., '/signup'
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1"
            >
              sign up
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginCard;
