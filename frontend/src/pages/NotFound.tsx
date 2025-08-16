import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-6xl font-serif font-bold gradient-text">404</h1>
          <p className="text-2xl font-semibold text-foreground">Oops! Page not found</p>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <a 
            href="/" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Return to Home
          </a>
          <a 
            href="/all-projects" 
            className="inline-flex items-center px-6 py-3 border border-border bg-background text-foreground rounded-lg hover:bg-secondary transition-colors font-medium"
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
