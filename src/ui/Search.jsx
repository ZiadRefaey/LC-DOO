import { useRef } from "react";
import { CiSearch } from "react-icons/ci";

export default function Search({ setIsFocused, isFocused }) {
  const InputRef = useRef();
  //to focus on the input when the div is clicked on
  function handleClick() {
    setIsFocused(true);
    InputRef.current.focus();
  }
  return (
    <>
      <form
        className={`flex items-center justify-center cursor-pointer border-[1px] rounded-lg py-2 px-1 transition-all duration-500 ${
          isFocused ? "flex-grow" : ""
        }`}
        onBlur={() => setIsFocused(false)}
        onClick={handleClick}
      >
        <CiSearch className="w-7 h-7 cursor-pointer mr-1" />
        <input type="text" className="outline-0 w-full" ref={InputRef}></input>
      </form>
    </>
  );
}
