"use client";

import useCountries from "@/hook/useCountries";
import useSearchModal from "@/hook/useSearchModal";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BiSearch, BiFilter } from "react-icons/bi";

type Props = {};

function Search({}: Props) {
  const searchModel = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return locationValue;
    }
    return "Ville de départ";
  }, [locationValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }

    return "Quand ?";
  }, [startDate, endDate]);

  const guessLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return "Ajouter invités";
  }, []);

  return (
    <div
      onClick={searchModel.onOpen}
      className="bg-white border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">{locationLabel}</div>
        <div className="hidden sm:block text-sm font-semibold px-6 border-l-[1px] flex-1 text-center">
          {durationLabel}
        </div>
        <div className="text-sm pl-0 pr-2 text-gray-600 flex flex-row items-center gap-3">
          {/* <div className="hidden sm:block text-center">{guessLabel}</div> */}
          <div className="p-2 bg-hourrail-orange rounded-full text-white">
            <BiFilter size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
