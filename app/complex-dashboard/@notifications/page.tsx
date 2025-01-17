import Link from "next/link";
import React from "react";

const Notifications = () => {
  return (
    <div>
      Notifications
      <Link
        className="underline text-blue-700"
        href="/complex-dashboard/archived"
      >
        Archived Notifications
      </Link>
    </div>
  );
};

export default Notifications;
