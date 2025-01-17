"use client";

import { useState } from "react";

const SimulateError = ({ message }: { message: string }) => {
  const [error, setError] = useState(false);
  if (error) throw new Error(message);
  return (
    <button className="p-3 bg-slate-700 rounded-lg text-white hover:opacity-90" onClick={() => setError((error: boolean) => !error)}>
      Simulate an Error
    </button>
  );
};

const ErrorWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SimulateError message="Error in root layout" />
      {children}
    </div>
  );
};

export default ErrorWrapper;
