import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <Helmet>
        <title>404 Not Found | Lilabai T. Dhokane Senior College</title>
        <meta name="description" content="Page not found on Lilabai Tulshiramji Dhokane Senior College website." />
        <link rel="canonical" href={location.pathname} />
      </Helmet>
      <div className="text-center">
        <h1 className="text-5xl font-heading font-bold mb-2">404</h1>
        <p className="text-base text-muted-foreground mb-6">Oops! Page not found</p>
        <a href="/" className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Return to Home</a>
      </div>
    </main>
  );
};

export default NotFound;
