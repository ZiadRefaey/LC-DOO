import { CiCirclePlus } from "react-icons/ci";
import PrimaryButton from "../PrimaryButton";
export default function TableControl({ tabelTitle }) {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-6 mb-6">
      <div className="w-full items-center justify-start">
        <PrimaryButton
          className={"flex items-center justify-center gap-2"}
          color="bg-adminTertiary"
          rounded=""
        >
          <CiCirclePlus className="text-xl" /> Add {tabelTitle}
        </PrimaryButton>
      </div>
      <div className="w-full flex items-center justify-between">
        <div>
          Display{" "}
          <select className="border border-gray-300 px-3 py-1 mx-2">
            <option>5</option>
            <option>10</option>
            <option>15</option>
          </select>
          {tabelTitle}
        </div>
        <div className="flex items-center justify-center">
          Search:{" "}
          <input
            type="text"
            className="px-2 py-1 border mx-2 outline-gray-300"
          />
        </div>
      </div>
    </div>
  );
}
