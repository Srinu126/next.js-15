"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <p>ErrorBoundary - {error.message}</p>
      <button onClick={reload}>Try Again</button>
    </div>
  );
};

export default ErrorBoundary;
