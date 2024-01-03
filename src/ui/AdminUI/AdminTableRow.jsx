export default function AdminTableRow({ children, cols }) {
  return (
    <tr className={`w-full grid group hover:bg-adminSecondary ${cols}`}>
      {children}
    </tr>
  );
}
