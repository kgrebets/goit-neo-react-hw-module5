
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container mx-auto my-10 text-center">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 underline mt-4 block">Go to Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
