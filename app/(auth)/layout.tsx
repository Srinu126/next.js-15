export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h3>Auth Layout</h3>
      {children}
    </div>
  );
}
