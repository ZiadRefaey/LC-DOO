import { FaCloudUploadAlt } from "react-icons/fa";

export default function FileDragDrop() {
  return (
    <div className="min-h-[200px] border-dashed border bg-adminSecondary border-adminTertiaryLight flex items-center justify-center flex-col p-4 w-full">
      <FaCloudUploadAlt className="text-adminTertiaryLight text-4xl" />
      <p className="text-lg">Drag and drop images to upload</p>
      <p className="text-lg">JPG and PNG format only</p>
    </div>
  );
}
