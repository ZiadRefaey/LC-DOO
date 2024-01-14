import { cloneElement, createContext, useContext, useState } from "react";
import { HiXMark } from "react-icons/hi2";
const ModalContext = createContext();
export default function Modal({ children }) {
  const [openModal, setOpenModal] = useState("");
  function close() {
    setOpenModal("");
  }
  const open = setOpenModal;

  return (
    <ModalContext.Provider value={{ openModal, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function OpenModal({ children, opens }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => open(opens),
  });
}

function Window({ children, name }) {
  const { openModal, close } = useContext(ModalContext);

  if (name !== openModal) return null;
  return (
    <div className="fixed top-0 left-0 h-[100vh] w-[100vw] z-50  bg-black bg-opacity-70 flex items-center justify-center scroll ">
      <div
        className={`bg-primary p-4 shadow-xl rounded-md ${
          openModal === "" ? "h-0 w-0" : "min-w-[50%] h-auto"
        } transition-all duration-500 max-h-[90vh] overflow-y-scroll`}
      >
        <div className="w-full  flex items-center justify-end">
          <button onClick={close}>
            <HiXMark className="self-end text-xl" />
          </button>
        </div>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>
  );
}
Modal.OpenModal = OpenModal;
Modal.Window = Window;
