"use client";

import Select from "react-select";
import Flag from "react-world-flags";
import { Itinerary } from "@/types";

type Props = {
  //value is cityStart from itinerary
  value?: Itinerary["cityStart"];
  options: Itinerary["cityStart"][];
  placeholder?: string;
  onChange: (value: Itinerary["cityStart"]) => void;
};

function CitySelect({ value, onChange, placeholder, options }: Props) {
  //const cities = await getCities();
  //console.log(cities);
  //const { getCountries } = useCountries();

  return (
   
    <div>
      <Select
        placeholder={placeholder}
        isClearable
        options={options}
        value={value}
        onChange={(value) => onChange(value as Itinerary["cityStart"])}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3 overflow-hidden">
            {/* <Flag code={option.value} className="w-5" /> */}
            <div>
              {option.cityName},
              <span className="text-neutral-500 ml-1">{option.countryName}</span>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-3 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </div>

  );
}

export default CitySelect;
