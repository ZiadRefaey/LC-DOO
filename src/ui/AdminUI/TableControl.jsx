import { CiCirclePlus } from "react-icons/ci";
import PrimaryButton from "../PrimaryButton";
export default function TableControl({
  tableTitle,
  table,
  setGlobalFilter,
  globalFilter,
}) {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-6 mb-6">
      <div className="w-full items-center justify-start">
        <PrimaryButton
          className={"flex items-center justify-center gap-2"}
          color="bg-adminTertiary"
          rounded=""
        >
          <CiCirclePlus className="text-xl" /> Add {tableTitle}
        </PrimaryButton>
      </div>
      <div className="w-full flex items-center justify-between">
        <div>
          Display
          <select
            className="border border-gray-300 px-3 py-1 mx-2"
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
          </select>
          {tableTitle}
        </div>
        <div className="flex items-center justify-center">
          Search:
          <input
            onChange={(value) => setGlobalFilter(String(value))}
            type="text"
            className="px-2 py-1 border mx-2 outline-gray-300"
          />
        </div>
      </div>
    </div>
  );
}
