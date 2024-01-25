import { cloneElement, createContext, useContext, useState } from "react";
import { HiXMark } from "react-icons/hi2";
//creating the context to consume in the properties
const PopoverContext = createContext();

export function Popover({ children }) {
  const [openPopover, setOpenPopover] = useState("users-nav-avatar");
  console.log();
  function show(popoverName) {
    setOpenPopover(popoverName);
  }

  function hide() {
    setOpenPopover("");
  }
  return (
    <PopoverContext.Provider
      value={{ openPopover, setOpenPopover, show, hide }}
    >
      <div className="relative">{children}</div>
    </PopoverContext.Provider>
  );
}

function Trigger({ children, name }) {
  const { show } = useContext(PopoverContext);
  return cloneElement(children, {
    onMouseEnter: () => {
      show(name);
      console.log("working");
    },
  });
}

export function Content({ children, name }) {
  const { openPopover, hide } = useContext(PopoverContext);
  if (name !== openPopover) return;
  return (
    <>
      <div className="p-2 border border-gray-300 bg-primary transition-all duration-300 flex flex-col gap-2 items-center justify-center absolute -bottom-4 left-[50%] -translate-x-[50%] translate-y-[100%] rounded-xl popover">
        <HiXMark className="self-end text-xl cursor-pointer" onClick={hide} />
        {children}
      </div>
    </>
  );
}

Popover.Trigger = Trigger;
Popover.Content = Content;
