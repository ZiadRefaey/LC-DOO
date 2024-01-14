export default function AppLayout({ children }) {
  return (
    <main className="flex flex-col items-center justify-center bg-primary">
      {children}
    </main>
  );
}
