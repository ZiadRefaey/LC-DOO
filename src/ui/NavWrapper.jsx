export default function NavWrapper({ children }) {
  return (
    <header className="w-full">
      <nav className="w-full py-4 sticky">
        <ul className="w-full max-w-[1280px] m-auto flex items-center justify-between">
          {children}
        </ul>
      </nav>
    </header>
  );
}
