export default function Tag({ type, children }) {
  if (children.toLowerCase() === "active") type = "success";
  if (children.toLowerCase() === "deactive") type = "danger";

  return (
    <div
      className={`text-sm ${
        type === "danger" ? "bg-danger" : type === "success" ? "bg-success" : ""
      } px-2 py-1 text-white rounded-md flex items-center justify-center`}
    >
      {children}
    </div>
  );
}
