import React from "react";

export default function RadioGroup({ groups }) {
  return (
    <div className="mr-20">
      {groups.map((group) => (
        <div key={group.title} className="mb-5">
          <p className="text-body-lg font-semibold mb-2">{group.title}</p>
          {group.groups.map((label, i) => (
            <div className="block" key={i}>
              <input
                type="checkbox"
                name={label}
                id={label}
                value={label}
                className="mr-3 "
              />
              <label htmlFor={label} className="font-normal capitalize">
                {label}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
