export default function SocialWrapper({ children }) {
  return (
    <div className="rounded-full border border-primary flex items-center justify-center p-2 cursor-pointer hover:-translate-y-1 duration-200 transition-all">
      {children}
    </div>
  );
}
