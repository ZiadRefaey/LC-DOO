import Table from "../../ui/Table";
import TableRow from "../../ui/TableRow";
import { FaTrashAlt } from "react-icons/fa";
import Bag from "../../assets/Beige.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import IncrementDecrementControl from "../../ui/IncrementDecrementControl";
const tableHeaders = ["Products", "size", "price", "quantity", "total"];

export default function CartTable() {
  const [quantity, setQuantity] = useState(1);
  const dummyTableRows = [
    {
      product: {
        text: "iPhone 13 pro max-Pacific Blue-128GB storage",
        img: Bag,
      },
      size: "XL",
      price: 125,
      quantity: quantity,
      total: 375,
    },
    {
      product: {
        text: "iPhone 13 pro max-Pacific Blue-128GB storage",
        img: Bag,
      },
      size: "XL",
      price: 125,
      quantity: quantity,
      total: 375,
    },
    {
      product: {
        text: "iPhone 13 pro max-Pacific Blue-128GB storage",
        img: Bag,
      },
      size: "XL",
      price: 125,
      quantity: quantity,
      total: 375,
    },
    {
      product: {
        text: "iPhone 13 pro max-Pacific Blue-128GB storage",
        img: Bag,
      },
      size: "XL",
      price: 125,
      quantity: quantity,
      total: 375,
    },
  ];
  return (
    <Table>
      <TableRow>
        {tableHeaders.map((header, index) => (
          <th
            key={index}
            className={`uppercase   ${
              index === 0 ? "w-[300px]" : index === 3 ? "w-[150px]" : "w-[75px]"
            }`}
          >
            {header}
          </th>
        ))}
      </TableRow>
      {dummyTableRows.map((tableRow, i) => (
        <TableRow key={i}>
          <td className="">
            <Link
              to={"/products/1"}
              className=" flex items-center justify-center w-[300px] gap-2 text-blue-600 hover:underline"
            >
              <img
                src={tableRow.product.img}
                alt="product image"
                className="border border-translucent rounded-lg p-2 w-[60px] h-[60px]"
              />
              <p>{tableRow.product.text}</p>
            </Link>
          </td>
          <td className=" flex items-center justify-center w-[75px]">
            {tableRow.size}
          </td>
          <td className=" flex items-center justify-center w-[75px]">
            {tableRow.price}
          </td>
          <td className=" flex items-center justify-center w-[150px]">
            <IncrementDecrementControl
              number={tableRow.quantity}
              setNumber={setQuantity}
              iconSize="text-sm"
            />
          </td>
          <td className=" flex items-center justify-center w-[75px]">
            {tableRow.total}
          </td>
          <td className=" flex items-center justify-center w-[75px] ">
            <FaTrashAlt className="cursor-pointer text-lightGray hover:text-black duration-300 transition-all text-xl" />
          </td>
        </TableRow>
      ))}
    </Table>
  );
}
