export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/40 bg-background/95 py-8">
      <div className="container mx-auto max-w-screen-2xl px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} FinLit Teens. All rights reserved.</p>
        <p className="mt-1">Empowering the next generation with financial wisdom.</p>
      </div>
    </footer>
  );
}
