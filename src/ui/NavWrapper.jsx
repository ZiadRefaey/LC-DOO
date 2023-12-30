export default function NavWrapper({ children }) {
  return (
    <header className="w-full sticky  bg-primary -z-10">
      <nav className="w-full py-4 ">
        <ul className="w-full max-w-[1280px] m-auto flex items-center justify-between">
          {children}
        </ul>
      </nav>
    </header>
  );
}
