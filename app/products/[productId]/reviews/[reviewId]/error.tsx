"use client";

const ErrorBoundary = ({ error }: { error: Error }) => {
  return <div>ErrorBoundary - {error.message}</div>;
};

export default ErrorBoundary;
