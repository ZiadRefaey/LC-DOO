export default function TableRow({ children }) {
  return (
    <tr
      className={`flex items-center justify-start min-h-[50px] w-full  border-b-2 py-2 border-translucent`}
    >
      {children}
    </tr>
  );
}
