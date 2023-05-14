"use client";

import useSearchModal from "@/hook/useSearchModal";
import { formatISO } from "date-fns";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useCallback, useMemo, useState } from "react";
import { Range } from "react-date-range";

import Heading from "../Heading";
import Calendar from "../inputs/Calendar";
import Counter from "../inputs/Counter";
import Modal from "./Modal";
import Durations from "../inputs/Durations";
import { Itinerary } from "@/types";
import CitySelect from "../inputs/CitySelect";

enum STEPS {
  LOCATION = 0,
  DURATION = 1,
  //DATE,
}

type Props = {
  citiesStart: Itinerary["cityStart"][];
  citiesEnd: Itinerary["cityEnd"][];
};

function SearchModal({citiesStart, citiesEnd}: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const searchModel = useSearchModal();

  const [location, setLocation] = useState<Itinerary["cityStart"]>();
  const [step, setStep] = useState(STEPS.LOCATION);
  const [guestCount, setGuestCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [duration, setDuration] = useState<String>("1-3 days");
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const Map = useMemo(
    () =>
      dynamic(() => import("../Map"), {
        ssr: false,
      }),
    [location]
  );

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const onSubmit = useCallback(async () => {
    if (step !== STEPS.DURATION) {
      return onNext();
    }

    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      locationValue: location?.cityName,
      guestCount,
      roomCount,
      bathroomCount,
      duration,
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    setStep(STEPS.LOCATION);
    searchModel.onClose();

    router.push(url);
  }, [
    step,
    searchModel,
    location,
    router,
    guestCount,
    roomCount,
    bathroomCount,
    dateRange,
    onNext,
    params,
    duration,
  ]);

  const actionLabel = useMemo(() => {
    if (step === STEPS.DURATION) {
      return "Search";
    }

    return "Next";
  }, [step]);

  const secondActionLabel = useMemo(() => {
    if (step === STEPS.LOCATION) {
      return undefined;
    }

    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Où sera ton aventure?"
        subtitle="Trouve LA destination"
      />
      <CitySelect
        value={location}
        citiesStart={citiesStart}
        citiesEnd={citiesEnd}
        onChange={(value) => setLocation(value as Itinerary["cityStart"])}
      />
      <hr />
      {/* <Map center={location?.cityLocation} />*/}
    </div>
  );

  if (step === STEPS.DURATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Combien de temps as tu?"
          subtitle="Que tout le monde soit dispo!"
        />
        <Durations
          onChange={(value) => setDuration(value)}
          value={duration}
        />
      </div>
    );
  }
/*
  if (step === STEPS.DATE) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="When do you plan to go?"
          subtitle="Make sure everyone is free!"
        />
        <Calendar
          onChange={(value) => setDateRange(value.selection)}
          value={dateRange}
        />
      </div>
    );
  }

 

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading title="More information" subtitle="Find your perfect place!" />
        <Counter
          onChange={(value) => setGuestCount(value)}
          value={guestCount}
          title="Guests"
          subtitle="How many guests are coming?"
        />
        <hr />
        <Counter
          onChange={(value) => setRoomCount(value)}
          value={roomCount}
          title="Rooms"
          subtitle="How many rooms do you need?"
        />
        <hr />
        <Counter
          onChange={(value) => {
            setBathroomCount(value);
          }}
          value={bathroomCount}
          title="Bathrooms"
          subtitle="How many bahtrooms do you need?"
        />
      </div>
    );
  }
  */

  return (
    <Modal
      isOpen={searchModel.isOpen}
      onClose={searchModel.onClose}
      onSubmit={onSubmit}
      secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
      secondaryActionLabel={secondActionLabel}
      title="Filters"
      actionLabel={actionLabel}
      body={bodyContent}
    />
  );
}

export default SearchModal;
