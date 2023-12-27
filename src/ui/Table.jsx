export default function Table({ children }) {
  return (
    <div className=" overflow-x-auto w-full flex items-center justify-start md:justify-center">
      <table className="">{children}</table>
    </div>
  );
}
