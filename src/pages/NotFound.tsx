
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
        <div className="mb-6 bg-rolawn-green/10 p-5 rounded-full">
          <AlertCircle className="h-14 w-14 text-rolawn-green" />
        </div>
        <h1 className="text-4xl font-bold mb-2 text-rolawn-darkgray">404</h1>
        <p className="text-xl text-muted-foreground mb-8 text-center">
          Oops! We couldn't find the page you're looking for.
        </p>
        <Button asChild className="bg-rolawn-green hover:bg-rolawn-green/90">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
