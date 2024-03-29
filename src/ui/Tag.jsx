export default function Tag({ type, children, className }) {
  switch (children.toLowerCase()) {
    case "active":
      type = "success";
      break;
    case "deactive":
      type = "danger";
      break;
    case "failed":
      type = "danger";
      break;
    case "paid":
      type = "success";
      break;
    case "waiting":
      type = "warning";
      break;
    case "shipped":
      type = "ready";
      break;
    case "unpaid":
      type = "ready";
      break;
    case "processing":
      type = "warning";
      break;
    case "delivered":
      type = "success";
      break;
    case "blocked":
      type = "danger";
      break;
    case "cancelled":
      type = "danger";
      break;
    case "ongoing":
      type = "ready";
      break;
    case "finished":
      type = "success";
      break;
    // Add more cases if needed
    default:
      // Handle other cases if needed
      break;
  }
  return (
    <div
      className={`text-sm ${
        type === "danger"
          ? "bg-danger"
          : type === "success"
          ? "bg-success"
          : type === "ready"
          ? " bg-adminTertiaryLight"
          : type === "warning"
          ? " bg-warning"
          : ""
      } px-2 py-1 text-white rounded-md flex items-center justify-center text-center max-w-[100px] ${className}`}
    >
      {children}
    </div>
  );
}
