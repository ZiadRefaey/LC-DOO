export default function FormValidationAlert({ children, className }) {
  return (
    <p className={`${className} text-danger`} role="alert">
      {children}
    </p>
  );
}
