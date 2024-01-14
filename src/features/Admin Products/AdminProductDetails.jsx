import { FaEdit } from "react-icons/fa";
import StarRatingDisplay from "../../ui/StarRatingDisplay";
import Tag from "../../ui/Tag";
import Modal from "../../ui/Modal";
import EditProductForm from "./EditProductForm";
export default function AdminProductDetails() {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="flex items-start justify-start  w-full flex-col gap-1">
        <h1 className="text-2xl text-gray-700 font-semibold m">
          Amazing Modern Bag (Beige){" "}
          <Modal>
            <Modal.OpenModal opens={"product-edit"}>
              <FaEdit className="inline ml-2 text-gray-400 hover:text-gray-800 cursor-pointer duration-200 transition-all" />
            </Modal.OpenModal>
            <Modal.Window name={"product-edit"}>
              <EditProductForm />
            </Modal.Window>
          </Modal>
        </h1>
        <p className="font-thin text-md text-gray-500">
          Added Date: 09/12/2018
        </p>
        <StarRatingDisplay rating={4.3} />
      </div>
      <Tag className={"self-start"}>Active</Tag>
      <div className="w-full">
        <p className="text-lg text-gray-700 font-medium">Price:</p>
        <p className="text-xl font-semibold text-gray-700">139.99 EGP</p>
      </div>
      <div>
        <p className="text-lg text-gray-700 font-medium">Description:</p>
        <p className="text-md text-gray-700 font-thin">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, earum
          ullam aliquam soluta doloribus illo, debitis dolore consequuntur
          perferendis dolores rerum qui quam cumque officiis reiciendis
          similique a? Placeat dolorum corporis hic dicta non earum, reiciendis
          quidem dolorem aliquam aspernatur, perferendis fugiat. Odit mollitia
          laboriosam voluptas sed quo blanditiis ipsum.
        </p>
      </div>
      <div className="flex items-center justify-between self-start w-full ">
        <div>
          <p className="text-lg text-gray-700 font-medium ">Avalable stock</p>
          <p className="text-md text-gray-700 mb-10">1784</p>
        </div>
        <div>
          <p className="text-lg text-gray-700 font-medium ">Number of Orders</p>
          <p className="text-md text-gray-700 mb-10">750 </p>
        </div>
        <div>
          <p className="text-lg text-gray-700 font-medium ">Revenue</p>
          <p className="text-md text-gray-700 mb-10">15690 EGP</p>
        </div>
      </div>
    </div>
  );
}
