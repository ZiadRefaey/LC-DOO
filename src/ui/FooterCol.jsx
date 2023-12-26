export default function FooterCol({ children, title }) {
  return (
    <div className="flex flex-col gap-1 items-start justify-center">
      <p className="text-sm-h4 md:text-md-h4 lg:text-lg-h4 mb-2 text-primary">
        {title}
      </p>
      {children}
    </div>
  );
}
