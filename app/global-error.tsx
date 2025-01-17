"use client";
import React from "react";

const GlobalError = () => {
  return (
    <html>
      <body>
        <div>
          <h3>
            Error handled gracefully in root layout. Works only in production
            mode.
          </h3>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;
