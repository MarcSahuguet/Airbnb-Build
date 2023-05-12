"use client";

import React from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type Props = {
  value: String;
  onChange: (value: String) => void;
};

function Durations({ value, onChange }: Props) {
    // return 3 squared buttons aligned horizontally with the following labels: "1-3 days", "1 week", "+1 week"
    // clicking on any of the buttons should change the value of the range to the corresponding value
    // clicking on the button that corresponds to the current value should reset the value to the default value
    return (
        <div className="flex flex-col gap-2">
            <button
            //Selected is value = 1-3 days   
            className={`${value == "1-3 days" ? 'border-gray-500' : 'hover:border-gray-300'} bg-gray-100 text-gray-700 font-semibold py-3 border-2  rounded-lg w-full active:shadow-hourrail-smooth-orange transform duration-100`}
            onClick={() => {
                    onChange("1-3 days");
                }}
            >
                1-3 days
            </button>
            <button
            className={`${value == "1 week" ? 'border-gray-500' : 'hover:border-gray-300'} bg-gray-100 text-gray-700 font-semibold py-3 border-2  rounded-lg w-full active:shadow-hourrail-smooth-orange transform duration-100`}

                onClick={() => {
                    onChange("1 week");
                }}
            >
                1 week
            </button>
            <button
            className={`${value == "+1 week" ? 'border-gray-500' : 'hover:border-gray-300'} bg-gray-100 text-gray-700 font-semibold py-3 border-2  rounded-lg w-full active:shadow-hourrail-smooth-orange transform duration-100`}
            onClick={() => {
                    onChange("+1 week")
                }}
            >
                +1 week
            </button>
        </div>
    );

  
}

export default Durations;
