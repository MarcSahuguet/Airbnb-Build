import qs from "query-string";
import { Itinerary } from "@/types";
import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Select from "react-select";

type Props = {
  citiesStart: Itinerary["cityStart"][];
  citiesEnd: Itinerary["cityEnd"][];
};

export default function CitySelectTemp({ citiesStart, citiesEnd }: Props) {
  const router = useRouter();
  const params = useSearchParams();

  const onSubmit = useCallback((value: Itinerary["cityStart"], where:string) => {
      let currentQuery = {};
      let updatedQuery = {};
      if (params) {
        currentQuery = qs.parse(params.toString());
      }
      if (where === "departure") {
      updatedQuery = {
        ...currentQuery,
        departureCity: value?.cityName.toLowerCase(),
      };
      } else {
      updatedQuery = {
          ...currentQuery,
          arrivalCity: value?.cityName.toLowerCase(),
        };
      }
      const url = qs.stringifyUrl(
        {
          url: "/",
          query: updatedQuery,
        },
        { skipNull: true }
      );
      router.push(url);
  }, [router, params]);


  const formatOptionLabel = (option : Itinerary["cityStart"]) => (
    <div className="flex flex-row items-center gap-3">
      {/* <Flag code={option.value} className="w-5" /> */}
      <div>
        {option.cityName},
        <span className="text-neutral-500 ml-1">{option.countryName}</span>
      </div>
    </div>
  );
  
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center">
      <Select
        placeholder="Ville de départ"
        isClearable
        
        isSearchable={true}
        options={citiesStart.map((city) => ({ ...city, label: city.cityName }))}
        onChange={(value) => onSubmit(value as Itinerary["cityStart"],"departure")}
        formatOptionLabel={formatOptionLabel}
        classNames={{
          control: () => "p-3 py-2 border-2 hover:scale-105 duration-150 transform",
          input: () => "text-lg",
          option: () => "text-lg",
          
        }}
        className="w-full cursor-pointer"
        theme={(theme) => ({
          ...theme,
          borderRadius: 34,
          colors: {
            ...theme.colors,
            primary: "#ED4A3A",
            primary25: "#ffe4e6",
      
          },
        })}
      />
      <Select
        placeholder="Ville d'arrivée"
        isClearable
        isSearchable={true}
        options={citiesEnd.map((city) => ({ ...city, label: city.cityName }))}
        onChange={(value) => onSubmit(value as Itinerary["cityStart"],"arrival")}
        formatOptionLabel={formatOptionLabel}
        classNames={{
          control: () => "p-3 py-2 border-2 hover:scale-105 duration-150 transform",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        className="w-full cursor-pointer"
        theme={(theme) => ({
          ...theme,
          borderRadius: 34,
          colors: {
            ...theme.colors,
            primary: "#ED4A3A",
            primary25: "#ffe4e6",
      
          },
        })}
      />
    </div>
  );
}