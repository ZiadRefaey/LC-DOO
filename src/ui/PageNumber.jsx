export default function PageNumber({ children }) {
  return (
    <li className="min-w-[40px] h-[40px] rounded-md transition-all duration-200 text-secondary hover:text-primary hover:bg-tertiary cursor-pointer flex items-center justify-center">
      {children}
    </li>
  );
}
