import { Link } from "react-router-dom";
import Bag from "../../assets/Beige.png";
import Table from "../../ui/Table";
import TableRow from "../../ui/TableRow";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import PrimaryButton from "../../ui/PrimaryButton";

const tableHeaders = ["Products", "size", "price"];

export default function WisshlistTable() {
  const dummyTableRows = [
    {
      product: {
        text: "iPhone 13 pro max-Pacific Blue-128GB storage",
        img: Bag,
      },
      size: "XL",
      price: 125,
    },
    {
      product: {
        text: "iPhone 13 pro max-Pacific Blue-128GB storage",
        img: Bag,
      },
      size: "XL",
      price: 125,
    },
    {
      product: {
        text: "iPhone 13 pro max-Pacific Blue-128GB storage",
        img: Bag,
      },
      size: "XL",
      price: 125,
    },
    {
      product: {
        text: "iPhone 13 pro max-Pacific Blue-128GB storage",
        img: Bag,
      },
      size: "XL",
      price: 125,
    },
  ];

  return (
    <Table>
      <TableRow>
        {tableHeaders.map((header, index) => (
          <th
            key={index}
            className={`uppercase   ${
              index === 0
                ? `w-[250px] lg:w-[340px] xl:w-[425px]`
                : `w-[85px] lg:w-[113px] xl:[140px]`
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
              className={`flex items-center justify-center w-[250px] lg:w-[340px] xl:w-[425px] gap-3 text-blue-600 hover:underline `}
            >
              <img
                src={tableRow.product.img}
                alt="product image"
                className={
                  "border border-translucent rounded-lg p-2 w-[60px] h-[60px]"
                }
              />
              <p>{tableRow.product.text}</p>
            </Link>
          </td>
          <td
            className={` flex items-center justify-center w-[85px] lg:w-[113px] xl:[140px]`}
          >
            {tableRow.size}
          </td>
          <td
            className={` flex items-center justify-center w-[85px] lg:w-[113px] xl:[140px]`}
          >
            {tableRow.price}
          </td>

          <td
            className={`flex items-center justify-center gap-4 w-[128px] lg:w-[170px] xl:[213px]`}
          >
            <FaTrashAlt className="cursor-pointer text-lightGray hover:text-black duration-300 transition-all text-xl" />
            <PrimaryButton className={"flex items-center justify-center py-3"}>
              <FaShoppingCart className="inline mr-1" />
              <p className="text-sm">Add to cart</p>
            </PrimaryButton>
          </td>
        </TableRow>
      ))}
      <TableRow></TableRow>
    </Table>
  );
}
