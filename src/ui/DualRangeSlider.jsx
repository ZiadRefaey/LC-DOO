import { useState } from "react";

const DualRangeSlider = () => {
  const [range1, setRange1] = useState(50);
  const [range2, setRange2] = useState(50);

  const handleRangeChange = (event) => {
    const { name, value } = event.target;

    if (name === "range1") {
      setRange1(value);
    } else if (name === "range2") {
      setRange2(value);
    }
  };

  return (
    <div className="w-64 mx-auto mt-8">
      <div className="flex items-center">
        <label className="mr-4">Range 1: {range1}</label>
        <input
          type="range"
          min="0"
          max="100"
          value={range1}
          name="range1"
          onChange={handleRangeChange}
          className="flex-grow"
        />
      </div>

      <div className="flex items-center mt-4">
        <label className="mr-4">Range 2: {range2}</label>
        <input
          type="range"
          min="0"
          max="100"
          value={range2}
          name="range2"
          onChange={handleRangeChange}
          className="flex-grow"
        />
      </div>
    </div>
  );
};

export default DualRangeSlider;
