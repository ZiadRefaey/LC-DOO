export default function AngleImageWrapper({ children }) {
  return (
    <div className="max-w-[50px] md:max-w-[75px] rounded-lg bg-primary border border-translucent hover:border-blue-400 transition-all duration-100 h-auto object-contain p-4 cursor-pointer">
      {children}
    </div>
  );
}
