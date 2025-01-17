import React from "react";

const DashboardLayout = ({
  children,
  users,
  notifications,
  marketing,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
  marketing: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-3">
          <span className="bg-slate-200 shadow-lg border-3 p-3">{users}</span>
          <span className="bg-slate-200 shadow-lg border-3 p-3">
            {notifications}
          </span>
        </div>
        <div className="flex flex-1">
          <span className="bg-slate-200 shadow-lg border-3 p-3">
            {marketing}
          </span>
        </div>
      </div>
    </div>
  ) : (
    login
  );
};

export default DashboardLayout;
